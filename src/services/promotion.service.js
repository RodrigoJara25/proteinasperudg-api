import PromotionMongo from "../dao/mongo/promotion.mongo.js";
import PromotionDTO from "../dao/dto/promotion.dto.js";

const promotionDao = new PromotionMongo();

export default class PromotionService {

    // Obtener todas las promociones
    async getAllPromotions(filters = {}) {
        try {
            const promotions = await promotionDao.get(filters);
            return promotions.map(promotion => new PromotionDTO(promotion));
        } catch (error) {
            throw error;
        }
    }

    // Obtener promoción por ID
    async getPromotionById(id) {
        try {
            if (!id) throw new Error("ID es requerido");

            const promotion = await promotionDao.getById(id);

            if (!promotion) {
                throw new Error("Promoción no encontrada");
            }

            return new PromotionDTO(promotion);
        } catch (error) {
            throw error;
        }
    }

    // Crear promoción
    async createPromotion(promotionData) {
        try {
            const newPromotion = await promotionDao.create(promotionData);
            if (!newPromotion) {
                throw new Error('Error al crear la promoción');
            }
            return new PromotionDTO(newPromotion);
        } catch (error) {
            throw error;
        }
    }

    // Actualizar promoción
    async updatePromotion(id, promotionData) {
        try {
            if (!id) throw new Error('ID es requerido');

            const updatedPromotion = await promotionDao.update(id, promotionData);

            if (!updatedPromotion) {
                throw new Error('Promoción no encontrada');
            }
            return new PromotionDTO(updatedPromotion);
        } catch (error) {
            throw error;
        }
    }

    // Eliminar promoción
    async deletePromotion(id) {
        try {
            if (!id) throw new Error('ID es requerido');

            const deletedPromotion = await promotionDao.delete(id);
            if (!deletedPromotion) {
                throw new Error('Promoción no encontrada');
            }
            return new PromotionDTO(deletedPromotion);
        } catch (error) {
            throw error;
        }
    }
}
