import { Router } from "express";
import {
    getAllPromotions,
    getPromotionById,
    createPromotion,
    updatePromotion,
    deletePromotion
} from "../controllers/promotion.controller.js";

const router = Router();

// GET /api/promotions - Obtener todas las promociones
// Query param opcional: ?destacado=true para solo destacadas
router.get('/', getAllPromotions);

// GET /api/promotions/:id - Obtener promoción por ID
router.get('/:id', getPromotionById);

// POST /api/promotions - Crear nueva promoción
router.post('/', createPromotion);

// PUT /api/promotions/:id - Actualizar promoción (toggle destacado)
router.put('/:id', updatePromotion);

// DELETE /api/promotions/:id - Eliminar promoción
router.delete('/:id', deletePromotion);

export default router;
