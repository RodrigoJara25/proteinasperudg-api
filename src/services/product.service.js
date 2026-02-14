import ProductMongo from "../dao/mongo/product.mongo.js";
import ProductDTO from "../dao/dto/product.dto.js";

const productDao = new ProductMongo();

export default class ProductService {

    // Obtener todos los productos o filtrar
    async getAllProducts(filters = {}) {
        try {
            const products = await productDao.get(filters);
            return products.map(product => new ProductDTO(product));
        } catch (error) {
            throw error;
        }
    }

    // Obtener producto por ID
    async getProductById(id) {
        try {
            if (!id) throw new Error("ID es requerido");

            const product = await productDao.getById(id);

            if (!product) {
                throw new Error("Producto no encontrado");
            }

            return new ProductDTO(product);
        } catch (error) {
            throw error;
        }
    }

    // Obtener productos por categoría
    async getProductsByCategory(categoryId) {
        try {
            if (!categoryId) throw new Error("ID de categoría es requerido");

            const products = await productDao.getByCategory(categoryId);
            return products.map(product => new ProductDTO(product));
        } catch (error) {
            throw error;
        }
    }

    // Obtener productos por marca
    async getProductsByMarca(marca) {
        try {
            if (!marca) throw new Error("Marca es requerida");

            const products = await productDao.getByMarca(marca);
            return products.map(product => new ProductDTO(product));
        } catch (error) {
            throw error;
        }
    }

    // Crear producto
    async createProduct(productData) {
        try {
            const newProduct = await productDao.create(productData);
            if (!newProduct) {
                throw new Error('Error al crear el producto');
            }
            return new ProductDTO(newProduct);
        } catch (error) {
            throw error;
        }
    }

    // Actualizar producto
    async updateProduct(id, productData) {
        try {
            if (!id) throw new Error('ID es requerido');

            const updatedProduct = await productDao.update(id, productData);

            if (!updatedProduct) {
                throw new Error('Producto no encontrado');
            }
            return new ProductDTO(updatedProduct);
        } catch (error) {
            throw error;
        }
    }

    // Eliminar producto
    async deleteProduct(id) {
        try {
            if (!id) throw new Error('ID es requerido');

            const deletedProduct = await productDao.delete(id);
            if (!deletedProduct) {
                throw new Error('Producto no encontrado');
            }
            return new ProductDTO(deletedProduct);
        } catch (error) {
            throw error;
        }
    }
}