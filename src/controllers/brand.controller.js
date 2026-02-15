import BrandService from "../services/brand.service.js";

const brandService = new BrandService();

// Obtener todas las marcas
export const getAllBrands = async (req, res, next) => {
    try {
        const brands = await brandService.getAllBrands();
        res.status(200).json({
            success: true,
            data: brands
        });
    } catch (error) {
        next(error);
    }
};

// Obtener marca por ID
export const getBrandById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const brand = await brandService.getBrandById(id);
        res.status(200).json({
            success: true,
            data: brand
        });
    } catch (error) {
        next(error);
    }
};

// Crear nueva marca
export const createBrand = async (req, res, next) => {
    try {
        const brandData = req.body;
        const newBrand = await brandService.createBrand(brandData);
        res.status(201).json({
            success: true,
            message: 'Marca creada exitosamente',
            data: newBrand
        });
    } catch (error) {
        next(error);
    }
};

// Actualizar marca
export const updateBrand = async (req, res, next) => {
    try {
        const { id } = req.params;
        const brandData = req.body;
        const updatedBrand = await brandService.updateBrand(id, brandData);
        res.status(200).json({
            success: true,
            message: 'Marca actualizada exitosamente',
            data: updatedBrand
        });
    } catch (error) {
        next(error);
    }
};

// Eliminar marca
export const deleteBrand = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedBrand = await brandService.deleteBrand(id);
        res.status(200).json({
            success: true,
            message: 'Marca eliminada exitosamente',
            data: deletedBrand
        });
    } catch (error) {
        next(error);
    }
};
