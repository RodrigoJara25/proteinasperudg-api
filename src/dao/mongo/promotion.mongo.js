import PromotionModel from '../models/promotion.model.js';

export default class PromotionMongo {
    constructor() { }

    // Obtener todas las promociones => Retorna ARRAY
    get = async (filter = {}) => {
        try {
            const promotions = await PromotionModel
                .find(filter)
                .lean();
            return promotions;
        } catch (error) {
            console.error(`Error al recuperar promociones: ${error.message}`);
            return null;
        }
    }

    // Obtener UNA promoción por ID => Retorna OBJETO o NULL
    getById = async (id) => {
        try {
            const promotion = await PromotionModel
                .findById(id)
                .lean();
            return promotion;
        } catch (error) {
            console.error(`Error al recuperar promoción: ${error.message}`);
            return null;
        }
    }

    // Crear promoción => Retorna OBJETO o NULL
    create = async (promotionData) => {
        try {
            const promotion = await PromotionModel.create(promotionData);
            return promotion;
        } catch (error) {
            console.error(`Error al crear promoción: ${error.message}`);
            return null;
        }
    }

    // Actualizar promoción => Retorna OBJETO o NULL
    update = async (id, promotionData) => {
        try {
            if (!id) {
                throw new Error('ID de promoción no proporcionado');
            }
            const promotion = await PromotionModel.findByIdAndUpdate(
                id,
                promotionData,
                { new: true, runValidators: true }
            );
            return promotion;
        } catch (error) {
            console.error(`Error al actualizar promoción: ${error.message}`);
            return null;
        }
    }

    // Eliminar promoción => Retorna OBJETO o NULL
    delete = async (id) => {
        try {
            const promotion = await PromotionModel.findByIdAndDelete(id);
            return promotion;
        } catch (error) {
            console.error(`Error al eliminar promoción: ${error.message}`);
            return null;
        }
    }
}
