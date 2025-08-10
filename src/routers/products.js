import { Router } from "express";
import { getProductController, getProductIdController } from "../controllers/products.js";

const router = Router();

router.get('/products', getProductController);
router.get('/products/:productId', getProductIdController);

export default router;
