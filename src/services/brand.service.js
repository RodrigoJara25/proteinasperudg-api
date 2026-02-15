import BrandMongo from "../dao/mongo/brand.mongo.js";
import BrandDTO from "../dao/dto/brand.dto.js";

const brandDao = new BrandMongo();

export default class BrandService {

    // Obtener todas las marcas
    async getAllBrands(filters = {}) {
        try {
            const brands = await brandDao.get(filters);
            return brands.map(brand => new BrandDTO(brand));
        } catch (error) {
            throw error;
        }
    }

    // Obtener marca por ID
    async getBrandById(id) {
        try {
            if (!id) throw new Error("ID es requerido");

            const brand = await brandDao.getById(id);

            if (!brand) {
                throw new Error("Marca no encontrada");
            }

            return new BrandDTO(brand);
        } catch (error) {
            throw error;
        }
    }

    // Crear marca
    async createBrand(brandData) {
        try {
            const newBrand = await brandDao.create(brandData);
            if (!newBrand) {
                throw new Error('Error al crear la marca');
            }
            return new BrandDTO(newBrand);
        } catch (error) {
            throw error;
        }
    }

    // Actualizar marca
    async updateBrand(id, brandData) {
        try {
            if (!id) throw new Error('ID es requerido');

            const updatedBrand = await brandDao.update(id, brandData);

            if (!updatedBrand) {
                throw new Error('Marca no encontrada');
            }
            return new BrandDTO(updatedBrand);
        } catch (error) {
            throw error;
        }
    }

    // Eliminar marca
    async deleteBrand(id) {
        try {
            if (!id) throw new Error('ID es requerido');

            const deletedBrand = await brandDao.delete(id);
            if (!deletedBrand) {
                throw new Error('Marca no encontrada');
            }
            return new BrandDTO(deletedBrand);
        } catch (error) {
            throw error;
        }
    }
}
