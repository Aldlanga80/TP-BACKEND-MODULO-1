"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const product_service_1 = require("./services/product.service");
dotenv_1.default.config();
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/products_ts";
(async () => {
    try {
        await mongoose_1.default.connect(MONGO_URI);
        console.log("✅ Conectado a MongoDB");
        const newProduct = await (0, product_service_1.createProduct)({
            name: "Teclado Mecanico RBG",
            description: "Teclado con retroiluminacion RBG",
            price: 100,
            stock: 40,
            category: "Periféricos",
            available: true,
        });
        console.log("🆕 Producto creado", newProduct);
        const allProducts = await (0, product_service_1.getProducts)();
        console.log("📦 Todos los productos:", allProducts);
        const found = await (0, product_service_1.getProductsById)(newProduct.id);
        console.log("🔎 Producto encontrado", found);
        const updated = await (0, product_service_1.updateProduct)(newProduct.id, { stock: 45 });
        console.log("Producto actualizado ✍️", updated);
        const deleted = await (0, product_service_1.deleteProduct)(newProduct.id);
        console.log("Producto eliminado 🚮", deleted);
        await mongoose_1.default.disconnect();
        console.log("Desconectado de MongoDB");
    }
    catch (error) {
        console.error("❌Error:", error);
    }
})();
