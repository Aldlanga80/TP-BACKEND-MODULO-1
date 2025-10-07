"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.getProductsById = exports.getProducts = exports.createProduct = void 0;
const product_1 = __importDefault(require("../models/product"));
const createProduct = async (data) => {
    const product = new product_1.default(data);
    return await product.save();
};
exports.createProduct = createProduct;
const getProducts = async () => {
    return await product_1.default.find();
};
exports.getProducts = getProducts;
const getProductsById = async (id) => {
    return await product_1.default.findById(id);
};
exports.getProductsById = getProductsById;
const updateProduct = async (id, data) => {
    return await product_1.default.findByIdAndUpdate(id, data, { new: true });
};
exports.updateProduct = updateProduct;
const deleteProduct = async (id) => {
    return await product_1.default.findByIdAndDelete(id);
};
exports.deleteProduct = deleteProduct;
