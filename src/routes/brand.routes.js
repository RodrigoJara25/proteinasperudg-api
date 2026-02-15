import { Router } from "express";
import {
    getAllBrands,
    getBrandById,
    createBrand,
    updateBrand,
    deleteBrand
} from "../controllers/brand.controller.js";

const router = Router();

// GET /api/brands - Obtener todas las marcas
router.get('/', getAllBrands);

// GET /api/brands/:id - Obtener marca por ID
router.get('/:id', getBrandById);

// POST /api/brands - Crear nueva marca
router.post('/', createBrand);

// PUT /api/brands/:id - Actualizar marca
router.put('/:id', updateBrand);

// DELETE /api/brands/:id - Eliminar marca
router.delete('/:id', deleteBrand);

export default router;
