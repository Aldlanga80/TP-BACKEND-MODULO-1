import Product from "../models/product";
import type { IProduct } from "../models/product";

export const createProduct = async () => {
  const product = new Product();
  return await product.save();
}