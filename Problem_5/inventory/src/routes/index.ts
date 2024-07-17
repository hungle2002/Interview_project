import {
  ProductController,
} from '../controllers/';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../../swagger.json';
import schemaValidator from '../middlewares/schemaValidator';

const router = express.Router();

/**
 * Swagger Documentation
 */
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

/**
 * Routes
 */
router
  .route('/products')
  .get(ProductController.getProducts)
  .post(schemaValidator('/inventory/products/create'), ProductController.createProduct)

router
  .route('/products/:id')
    .get(ProductController.getProductById)
    .patch(schemaValidator('/inventory/products/update/{id}'), ProductController.updateProduct)
    .delete(ProductController.deleteProductById);

export default router;
