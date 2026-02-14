import CategoryService from "../services/category.service.js";

const categoryService = new CategoryService();

// Obtener todas las categorías
export const getAllCategories = async (req, res, next) => {
    try {
        const categories = await categoryService.getAllCategories();
        res.status(200).json({
            success: true,
            data: categories
        });
    } catch (error) {
        next(error);
    }
};

// Obtener categoría por ID
export const getCategoryById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const category = await categoryService.getCategoryById(id);
        res.status(200).json({
            success: true,
            data: category
        });
    } catch (error) {
        next(error);
    }
};

// Crear nueva categoría
export const createCategory = async (req, res, next) => {
    try {
        const categoryData = req.body;
        const newCategory = await categoryService.createCategory(categoryData);
        res.status(201).json({
            success: true,
            message: 'Categoría creada exitosamente',
            data: newCategory
        });
    } catch (error) {
        next(error);
    }
};

// Actualizar categoría
export const updateCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const categoryData = req.body;
        const updatedCategory = await categoryService.updateCategory(id, categoryData);
        res.status(200).json({
            success: true,
            message: 'Categoría actualizada exitosamente',
            data: updatedCategory
        });
    } catch (error) {
        next(error);
    }
};

// Eliminar categoría
export const deleteCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedCategory = await categoryService.deleteCategory(id);
        res.status(200).json({
            success: true,
            message: 'Categoría eliminada exitosamente',
            data: deletedCategory
        });
    } catch (error) {
        next(error);
    }
};