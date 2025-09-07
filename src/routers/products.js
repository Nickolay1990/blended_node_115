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

productRouter.get('/', getProductController);
productRouter.get('/:productId', isValidId, getProductIdController);
productRouter.post(
  '/',
  validateBody(createProductSchema),
  createProductController,
);
productRouter.patch(
  '/:productId',
  isValidId,
  validateBody(createProductSchema),
  updateProductController,
);
productRouter.delete('/:productId', isValidId, deleteProductController);

export default productRouter;
