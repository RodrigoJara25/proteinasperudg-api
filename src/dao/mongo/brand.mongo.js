import BrandModel from '../models/brand.model.js';

export default class BrandMongo {
    constructor() { }

    // Obtener todas las marcas => Retorna ARRAY
    get = async (filter = {}) => {
        try {
            const brands = await BrandModel
                .find(filter)
                .lean();
            return brands;
        } catch (error) {
            console.error(`Error al recuperar marcas: ${error.message}`);
            return null;
        }
    }

    // Obtener UNA marca por ID => Retorna OBJETO o NULL
    getById = async (id) => {
        try {
            const brand = await BrandModel
                .findById(id)
                .lean();
            return brand;
        } catch (error) {
            console.error(`Error al recuperar marca: ${error.message}`);
            return null;
        }
    }

    // Crear marca => Retorna OBJETO o NULL
    create = async (brandData) => {
        try {
            const brand = await BrandModel.create(brandData);
            return brand;
        } catch (error) {
            console.error(`Error al crear marca: ${error.message}`);
            return null;
        }
    }

    // Actualizar marca => Retorna OBJETO o NULL
    update = async (id, brandData) => {
        try {
            if (!id) {
                throw new Error('ID de marca no proporcionado');
            }
            const brand = await BrandModel.findByIdAndUpdate(
                id,
                brandData,
                { new: true, runValidators: true }
            );
            return brand;
        } catch (error) {
            console.error(`Error al actualizar marca: ${error.message}`);
            return null;
        }
    }

    // Eliminar marca => Retorna OBJETO o NULL
    delete = async (id) => {
        try {
            const brand = await BrandModel.findByIdAndDelete(id);
            return brand;
        } catch (error) {
            console.error(`Error al eliminar marca: ${error.message}`);
            return null;
        }
    }
}