import { Router } from 'express';
import authRouter from './auth.js';
import productRouter from './products.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/products', productRouter);

export default router;
