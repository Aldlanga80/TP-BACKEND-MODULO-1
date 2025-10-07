import mongoose from "mongoose";
import dotenv from "dotenv";
import {
  createProduct,
  getProducts,
  getProductsById,
  updateProduct,
  deleteProduct,
} from './services/product.service.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/products_ts";

(async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Conectado a MongoDB");


    const newProduct = await createProduct({
      name: "Teclado Mecanico RBG",
      description: "Teclado con retroiluminacion RBG",
      price: 100,
      stock: 40,
      category: "Periféricos",
      available: true,
    } as any);

    console.log("🆕 Producto creado", newProduct);

    const allProducts = await getProducts();
    console.log("📦 Todos los productos:", allProducts);

    const found = await getProductsById(newProduct.id);
    console.log("🔎 Producto encontrado", found);

    const updated = await updateProduct(newProduct.id, { stock: 45 });
    console.log("Producto actualizado ✍️", updated);

    const deleted = await deleteProduct(newProduct.id);
    console.log("Producto eliminado 🚮", deleted);

    await mongoose.disconnect();
    console.log("Desconectado de MongoDB");
  } catch (error) {
    console.error("❌Error:", error);
  }
})();