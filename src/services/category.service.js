import CategoryMongo from "../dao/mongo/category.mongo.js";
import CategoryDTO from "../dao/dto/category.dto.js";

const categoryDao = new CategoryMongo();

export default class CategoryService {

    // Obtener todas las categorias
    async getAllCategories() {
        try {
            const categories = await categoryDao.get(); // ✅ Retorna array
            return categories.map(category => new CategoryDTO(category));
        } catch (error) {
            throw error;
        }
    }

    // Obtener categoria por ID
    async getCategoryById(id) {
        try {
            if (!id) throw new Error("ID es requerido");

            const category = await categoryDao.getById(id);

            if (!category) {
                throw new Error("Categoría no encontrada");
            }

            return new CategoryDTO(category);
        } catch (error) {
            throw error;
        }
    }

    // Crear categoria
    async createCategory(categoryData) {
        try {
            const newCategory = await categoryDao.create(categoryData);
            if (!newCategory) {
                throw new Error('Error al crear la categoría');
            }
            return new CategoryDTO(newCategory);
        } catch (error) {
            throw error;
        }
    }

    // Actualizar categoria
    async updateCategory(id, categoryData) {
        try {
            if (!id) {
                throw new Error('ID es requerido');
            }
            const updatedCategory = await categoryDao.update(id, categoryData);

            if (!updatedCategory) {
                throw new Error('Categoría no encontrada');
            }
            return new CategoryDTO(updatedCategory);
        } catch (error) {
            throw error;
        }
    }

    // Eliminar categoría
    async deleteCategory(id) {
        try {
            if (!id) {
                throw new Error('ID es requerido');
            }

            const deletedCategory = await categoryDao.delete(id);
            if (!deletedCategory) {
                throw new Error('Categoría no encontrada');
            }
            return new CategoryDTO(deletedCategory);
        } catch (error) {
            throw error;
        }
    }
}