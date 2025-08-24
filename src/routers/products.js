import { Router } from 'express';
import { getProductController } from '../controllers/products.js';

const productRouter = Router();

productRouter.get('/', getProductController);

export default productRouter;
