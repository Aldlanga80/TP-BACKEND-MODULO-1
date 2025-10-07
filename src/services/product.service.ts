import Product from "../models/product";
import type { IProduct } from "../models/product";

export const createProduct = async () => {
  const product = new Product();
  return await product.save();
};

export const getProducts = async () => {
  return await Product.find();
};

export const getProductsById = async (id: string) => {
  return await Product.findById(id);
};

