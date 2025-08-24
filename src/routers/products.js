import { Router } from 'express';
import {
  getProductController,
  getProductIdController,
  createProductController,
  updateProductController,
  deleteProductController,
} from '../controllers/products.js';
import {validateBody} from '../middlewares/validateBody.js';
import { createProductSchema } from '../validation/product.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.get('/products', getProductController);
router.get('/products/:productId', isValidId, getProductIdController);
router.post('/products', validateBody(createProductSchema), createProductController);
router.patch('/products/:productId', isValidId, validateBody(createProductSchema), updateProductController);
router.delete('/products/:productId', isValidId, deleteProductController);

export default router;
