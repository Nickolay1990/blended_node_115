import { Router } from "express";
import { getProductController, getProductIdController, createProductController } from "../controllers/products.js";


const router = Router();

router.get('/products', getProductController);
router.get('/products/:productId', getProductIdController);
router.post("/products",createProductController)

export default router;
