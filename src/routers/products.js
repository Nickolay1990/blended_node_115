import { Router } from "express";
import { getProductController } from "../controllers/products.js";

const router = Router();

router.get('/products', getProductController);

export default router;
