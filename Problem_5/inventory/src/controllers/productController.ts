import ProductRepository from '../repositories/ProductRepository';
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { IGetProductsQuery, IProductFilter } from '../interfaces/product';
import Validate from '../utils/validator';
import TABLE_NAMES, { defaultPaginationLimit, SCHEMA_NAME } from '../common/constant';
import NotFoundError from '../errors/notFound';
import InternalServerError from '../errors/internalServerError';

async function getProducts(
  req: Request<object, object, object, IGetProductsQuery>,
  res: Response,
  next: NextFunction
) {
  try {
    const { page, pageSize, name, minPrice, maxPrice } = req.query;

    // Request query validation
    const requestError = { error: null };
    if (page) {
      if (new Validate(parseInt(page), 'page').isInteger().withMinValue(1).hasError(requestError)) {
        next(requestError.error);
        return;
      }  
    }
    if (pageSize) {
      if (new Validate(parseInt(pageSize), 'pageSize').isInteger().withMinValue(1).hasError(requestError)) {
        next(requestError.error);
        return;
      }  
    }
    if (name) {
      if (new Validate(name, 'name').isNonEmptyString().hasError(requestError)) {
        next(requestError.error);
        return;
      }  
    }
    if (minPrice) {
      if (new Validate(parseInt(minPrice), 'minPrice').isInteger().withMinValue(0).hasError(requestError)) {
        next(requestError.error);
        return;
      }  
    }
    if (maxPrice) {
      if (new Validate(parseInt(maxPrice), 'maxPrice').isInteger().withMinValue(0).hasError(requestError)) {
        next(requestError.error);
        return;
      }  
    }

    // Process request
    const productFilter: IProductFilter = {
      page: page ? parseInt(page) : 1,
      pageSize: pageSize ? parseInt(pageSize) : defaultPaginationLimit,
      name: name || '',
      minPrice: minPrice ? parseInt(minPrice) : -1,
      maxPrice: maxPrice ? parseInt(maxPrice) : -1,
    }
    const products = await ProductRepository.getProducts(productFilter);
    res.status(httpStatus.OK).json({ products });
  } catch (err) {
    next(new InternalServerError());
    return;
  }
}

async function getProductById(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  // Request query validation
  const requestError = { error: null };

  if (new Validate(parseInt(id), 'id').isInteger().withMinValue(1).hasError(requestError)) {
    next(requestError.error);
    return;
  }  

  try {
    const product = await ProductRepository.getById(id, SCHEMA_NAME, TABLE_NAMES.PRODUCTS);

    if (product.length === 0) {
      next(new NotFoundError('Product not found'));
      return;
    }
  
    res.status(httpStatus.OK).json(product[0]);    
  } catch (error) {
    next(new InternalServerError())
    return;
  }

}

async function createProduct(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, description, price, image } = req.body;

    const product = await ProductRepository.create(name,price, description, image);

    res.status(httpStatus.CREATED).json(product);
  } catch (error) {
    next(new InternalServerError())
    return;
  }
}

async function deleteProductById(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  try {
    const numberId = parseInt(id as string);
    // Request query validation
    const requestError = { error: null };

    if (new Validate(numberId, 'id').isInteger().withMinValue(1).hasError(requestError)) {
      next(requestError.error);
      return;
    }  

    // find product
    const product = await ProductRepository.getById(id as string, SCHEMA_NAME, TABLE_NAMES.PRODUCTS);
    if (product.length === 0) {
      next(new NotFoundError('Product not found'));
      return;
    }

    // remove product
    await ProductRepository.deleteProduct(numberId);
    res.status(httpStatus.NO_CONTENT).json({});
  } catch (error) {
    next(new InternalServerError())
    return;
  }
}

async function updateProduct(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, description, price, image } = req.body;
    const { id } = req.params;

    const numberId = parseInt(id as string);

    // Request query validation
    const requestError = { error: null };

    if (new Validate(numberId, 'id').isInteger().withMinValue(1).hasError(requestError)) {
      next(requestError.error);
      return;
    }

    // find product
    const product = await ProductRepository.getById(id as string, SCHEMA_NAME, TABLE_NAMES.PRODUCTS);
    if (product.length === 0) {
      next(new NotFoundError('Product not found'));
      return;
    }

    const upadatedProduct = await ProductRepository.updateProduct(numberId, name, price, description, image);

    res.status(httpStatus.OK).json(upadatedProduct);
  } catch (error) {
    next(new InternalServerError())
    return;
  }
}

export default {
  deleteProductById,
  getProducts,
  getProductById,
  createProduct,
  updateProduct
};
