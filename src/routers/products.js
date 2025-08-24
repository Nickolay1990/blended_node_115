import { Router } from 'express';

import {
  getProductController,
  getProductIdController,
  createProductController,
  updateProductController,
  deleteProductController,
} from '../controllers/products.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createProductSchema } from '../validation/product.js';
import { isValidId } from '../middlewares/isValidId.js';

const productRouter = Router();

productRouter.get('/products', getProductController);
productRouter.get('/products/:productId', isValidId, getProductIdController);
productRouter.post(
  '/products',
  validateBody(createProductSchema),
  createProductController,
);
productRouter.patch(
  '/products/:productId',
  isValidId,
  validateBody(createProductSchema),
  updateProductController,
);
productRouter.delete(
  '/products/:productId',
  isValidId,
  deleteProductController,
);

export default productRouter;
