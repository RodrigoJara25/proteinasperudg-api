import express from "express";
import cors from "cors";

import categoryRoutes from "./src/routes/category.routes.js";
import productRoutes from "./src/routes/product.routes.js";

import { errorHandler } from "./src/middlewares/errorHandler.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);

// Error handler
app.use(errorHandler);

export default app;