import BaseRepository from './BaseRepository';
import TABLE_NAMES from '../common/constant';
import { Prisma, products } from '@prisma/client';
import db from '../modules/db';
import { IProductFilter } from '../interfaces/product';


const { SCHEMA_NAME } = process.env;

class ProductRepository extends BaseRepository {
  private static _instance: ProductRepository;

  private constructor() {
    super(SCHEMA_NAME || 'inventory', TABLE_NAMES.PRODUCTS);
  }
  public static ProductRepository(): ProductRepository {
    if (!ProductRepository._instance) {
      return new ProductRepository();
    }
    return ProductRepository._instance;
  }

  public async create(
    name: string,
    price: number,
    description?: string,
    image?: string
  ): Promise<products> {
    const product: Prisma.productsCreateInput = {
      name: name,
      description: description,
      price: price,
      image: image,
    };
    return db.products.create({
      data: product,
    });
  }

  public async updateProduct(
    id: number,
    name?: string,
    price?: number,
    description?: string,
    image?: string
  ): Promise<products> {
    const product: Prisma.productsUpdateInput = {
      name: name,
      description: description,
      price: price,
      image: image,
    };
    return db.products.update({
      where: {
        id: id,
      },
      data: product,
    })
  }

  public async getProducts(productFilter: IProductFilter): Promise<products[]> {
    const { page, pageSize, name, minPrice, maxPrice } = productFilter;

    return db.products.findMany({
      where: {
        ...(name !== ''
          ? { name: { contains: name, mode: 'insensitive' } }
          : undefined),
        ...(minPrice > -1 || maxPrice > -1
          ? {
              price: {
                ...(minPrice > -1 ? { gte: minPrice } : undefined),
                ...(maxPrice > -1 ? { lte: maxPrice } : undefined),
              },
            }
          : undefined),
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
    });
  }

  async deleteProduct(id: number): Promise<products> {
    return db.products.delete({
      where: {
        id: id,
      },
    });
  }
}

export default ProductRepository.ProductRepository();
