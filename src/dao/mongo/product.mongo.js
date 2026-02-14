import ProductModel from '../models/product.model.js';

export default class ProductMongo {
    constructor() { }

    // Obtener todos o filtrar productos => Retorna ARRAY
    get = async (filter = {}) => {
        try {
            const products = await ProductModel
                .find(filter)
                .populate('categoria', 'name description') // ← Trae name y description de categoria
                .lean();
            return products;
        } catch (error) {
            console.error(`Error al recuperar productos: ${error.message}`);
            return null;
        }
    }

    // Obtener UN producto por ID => Retorna OBJETO o NULL
    getById = async (id) => {
        try {
            const product = await ProductModel
                .findById(id)
                .populate('categoria', 'name description') // ← Rellena la categoría
                .lean();
            return product;
        } catch (error) {
            console.error(`Error al recuperar producto: ${error.message}`);
            return null;
        }
    }

    // Crear producto => Retorna OBJETO o NULL
    create = async (productData) => {
        try {
            const product = await ProductModel.create(productData);
            // Poblar la categoría después de crear
            const populatedProduct = await ProductModel
                .findById(product._id)
                .populate('categoria', 'name description')
                .lean();
            return populatedProduct;
        } catch (error) {
            console.error(`Error al crear producto: ${error.message}`);
            return null;
        }
    }

    // Actualizar producto => Retorna OBJETO o NULL
    update = async (id, productData) => {
        try {
            if (!id) {
                throw new Error('ID de producto no proporcionado');
            }
            const product = await ProductModel.findByIdAndUpdate(
                id,
                productData,
                { new: true, runValidators: true }
            ).populate('categoria', 'name description');
            return product;
        } catch (error) {
            console.error(`Error al actualizar producto: ${error.message}`);
            return null;
        }
    }

    // Eliminar producto => Retorna OBJETO o NULL
    delete = async (id) => {
        try {
            const product = await ProductModel
                .findByIdAndDelete(id)
                .populate('categoria', 'name description');
            return product;
        } catch (error) {
            console.error(`Error al eliminar producto: ${error.message}`);
            return null;
        }
    }

    // Obtener productos por categoría => Retorna ARRAY
    getByCategory = async (categoryId) => {
        try {
            const products = await ProductModel
                .find({ categoria: categoryId })
                .populate('categoria', 'name description')
                .lean();
            return products;
        } catch (error) {
            console.error(`Error al recuperar productos por categoría: ${error.message}`);
            return null;
        }
    }

    // Obtener productos por marca => Retorna ARRAY
    getByMarca = async (marca) => {
        try {
            const products = await ProductModel
                .find({ marca: marca })
                .populate('categoria', 'name description')
                .lean();
            return products;
        } catch (error) {
            console.error(`Error al recuperar productos por marca: ${error.message}`);
            return null;
        }
    }
}