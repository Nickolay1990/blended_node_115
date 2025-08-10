import { getProducts } from "../services/products.js";

export const getProductController = async (req, res) => {
    const products = await getProducts();

    res.json({
        status: 200,
        message: "Successfully found products!",
        data: products,
    });
};