import { ProductModel } from "../db/models/product.js";

export const getProducts = async () => {
    const products = await ProductModel.find();

    return products;
};


export const getProductById = async (productId) => {
    const product = await ProductModel.findById(productId);
    return product;
};
