import { Router } from "express";
import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/product.controller.js";

const router = Router();

// GET /api/products - Obtener todos los productos
// Query params opcionales: categoria, marca, precioMin, precioMax, search, activos
router.get('/', getAllProducts);

// GET /api/products/:id - Obtener producto por ID
router.get('/:id', getProductById);

// POST /api/products - Crear nuevo producto
router.post('/', createProduct);

// PUT /api/products/:id - Actualizar producto
router.put('/:id', updateProduct);

// DELETE /api/products/:id - Eliminar producto
router.delete('/:id', deleteProduct);

export default router;