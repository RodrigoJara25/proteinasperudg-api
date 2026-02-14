import CategoryModel from '../models/category.model.js';

export default class CategoryMongo {
    constructor() { }

    get = async (filter = {}) => {
        try {
            const categories = await CategoryModel.find(filter).lean()
            return categories;
        } catch (error) {
            console.error(`Error al recuperar las categorías: ${error.message}`);
            return null;
        }
    }

    create = async (categoryData) => {
        try {
            const category = await CategoryModel.create(categoryData);
            return category;
        } catch (error) {
            console.error(`Error al crear la categoría: ${error.message}`);
            return null;
        }
    }

    delete = async (id) => {
        try {
            const category = await CategoryModel.findByIdAndDelete(id);
            return category;
        } catch (error) {
            console.error(`Error al eliminar la categoría: ${error.message}`);
            return null;
        }
    }

    update = async (id, categoryData) => {
        try {
            if (!id) {
                throw new Error('ID de categoría no proporcionado');
            }
            const category = await CategoryModel.findByIdAndUpdate(id, categoryData, { new: true });
            return category;
        } catch (error) {
            console.error(`Error al actualizar la categoría: ${error.message}`);
            return null;
        }
    }
}