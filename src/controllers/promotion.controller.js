import PromotionService from "../services/promotion.service.js";

const promotionService = new PromotionService();

// Obtener todas las promociones (con filtro opcional de destacado)
export const getAllPromotions = async (req, res, next) => {
    try {
        const { destacado } = req.query;

        const filters = {};

        // Filtro por destacado (para admin o sección especial)
        if (destacado === 'true') {
            filters.destacado = true;
        }

        const promotions = await promotionService.getAllPromotions(filters);

        res.status(200).json({
            success: true,
            data: promotions
        });
    } catch (error) {
        next(error);
    }
};

// Obtener promoción por ID
export const getPromotionById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const promotion = await promotionService.getPromotionById(id);
        res.status(200).json({
            success: true,
            data: promotion
        });
    } catch (error) {
        next(error);
    }
};

// Crear nueva promoción
export const createPromotion = async (req, res, next) => {
    try {
        const promotionData = req.body;
        const newPromotion = await promotionService.createPromotion(promotionData);
        res.status(201).json({
            success: true,
            message: 'Promoción creada exitosamente',
            data: newPromotion
        });
    } catch (error) {
        next(error);
    }
};

// Actualizar promoción (principalmente para toggle destacado)
export const updatePromotion = async (req, res, next) => {
    try {
        const { id } = req.params;
        const promotionData = req.body;
        const updatedPromotion = await promotionService.updatePromotion(id, promotionData);
        res.status(200).json({
            success: true,
            message: 'Promoción actualizada exitosamente',
            data: updatedPromotion
        });
    } catch (error) {
        next(error);
    }
};

// Eliminar promoción
export const deletePromotion = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedPromotion = await promotionService.deletePromotion(id);
        res.status(200).json({
            success: true,
            message: 'Promoción eliminada exitosamente',
            data: deletedPromotion
        });
    } catch (error) {
        next(error);
    }
};
