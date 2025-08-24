import createHttpError, { HttpError } from 'http-errors';
import {
  getProductById,
  getProducts,
  createProduct,
  patchProduct,
  deleteProduct,
} from '../services/products.js';
import { parsFilterParams } from '../utils/parsFilterParams.js';

export const getProductController = async (req, res) => {
  const filter = parsFilterParams(req.query);

  const products = await getProducts(filter);

  res.json({
    status: 200,
    message: 'Successfully found products!',
    data: products,
  });
};

export const getProductIdController = async (req, res) => {
  const { productId } = req.params;
  const product = await getProductById(productId);

  if (!product) {
    throw createHttpError(404, 'Product not found');
  }

  res.json({
    status: 200,
    data: product,
    message: `Successfully found product with id ${productId}!`,
  });
};

export const createProductController = async (req, res) => {
  const product = await createProduct(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully created a product!',
    data: product,
  });
};

export const updateProductController = async (req, res) => {
  const product = await patchProduct(req.params.productId, req.body);
  if (!product) {
    throw createHttpError(404, 'Product not found');
  }
  res.status(200).json({
    status: 200,
    message: 'Successfully patched a product!',
    data: product,
  });
};

export const deleteProductController = async (req, res) => {
  const { productId } = req.params;

  const product = await deleteProduct(productId);

  if (!product) {
    throw createHttpError(404, 'Product not found');
  }

  res.status(204).send();
};
