import ProductService from "../services/product.service.js";

const productService = new ProductService();

// Obtener todos los productos (con filtros dinámicos)
export const getAllProducts = async (req, res, next) => {
    try {
        const { categoria, marca, precioMin, precioMax, search, activos } = req.query;

        // Construir filtros dinámicamente
        const filters = {};

        // Filtro por categoría
        if (categoria) {
            filters.categoria = categoria;
        }

        // Filtro por marca
        if (marca) {
            filters.marca = marca;
        }

        // Filtro por precio mínimo
        if (precioMin) {
            filters.precio = { ...filters.precio, $gte: Number(precioMin) };
        }

        // Filtro por precio máximo
        if (precioMax) {
            filters.precio = { ...filters.precio, $lte: Number(precioMax) };
        }

        // Filtro para búsqueda por nombre (búsqueda parcial)
        if (search) {
            filters.name = { $regex: search, $options: 'i' }; // i = case insensitive
        }

        // Filtro solo activos (por defecto true si no se especifica)
        if (activos !== 'false') { // Si no se pide explícitamente inactivos
            filters.isActive = true;
        }

        // Llamar al service con los filtros construidos
        const products = await productService.getAllProducts(filters);

        res.status(200).json({
            success: true,
            count: products.length,
            data: products
        });
    } catch (error) {
        next(error);
    }
};

// Obtener producto por ID
export const getProductById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await productService.getProductById(id);
        res.status(200).json({
            success: true,
            data: product
        });
    } catch (error) {
        next(error);
    }
};

// Crear nuevo producto
export const createProduct = async (req, res, next) => {
    try {
        const productData = req.body;
        const newProduct = await productService.createProduct(productData);
        res.status(201).json({
            success: true,
            message: 'Producto creado exitosamente',
            data: newProduct
        });
    } catch (error) {
        next(error);
    }
};

// Actualizar producto
export const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const productData = req.body;
        const updatedProduct = await productService.updateProduct(id, productData);
        res.status(200).json({
            success: true,
            message: 'Producto actualizado exitosamente',
            data: updatedProduct
        });
    } catch (error) {
        next(error);
    }
};

// Eliminar producto
export const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedProduct = await productService.deleteProduct(id);
        res.status(200).json({
            success: true,
            message: 'Producto eliminado exitosamente',
            data: deletedProduct
        });
    } catch (error) {
        next(error);
    }
};