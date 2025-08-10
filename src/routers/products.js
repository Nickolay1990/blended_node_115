import { Router } from "express";
import { getProductController, getProductIdController, createProductController, updateProductController } from "../controllers/products.js";


const router = Router();

router.get('/products', getProductController);
router.get('/products/:productId', getProductIdController);
router.post("/products", createProductController);
router.patch("/products/:productId", updateProductController);

export default router;
