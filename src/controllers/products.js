import createHttpError from "http-errors";
import { getProductById, getProducts } from "../services/products.js";

export const getProductController = async (req, res) => {
    const products = await getProducts();

    res.json({
        status: 200,
        message: "Successfully found products!",
        data: products,
    });
};

export const getProductIdController = async (req, res) => {
    const { productId } = req.params;
    const product = await getProductById(productId);

    if (!product) {
        throw createHttpError(404, "Product not found");
    }

    res.json({
        status: 200,
        data: product,
        message: `Successfully found product with id ${productId}!`,
    });
};
