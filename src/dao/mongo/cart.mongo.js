import CartModel from "../models/cart.model.js";

export default class CartMongo {
    constructor() { }

    // Crear un nuevo carrito
    create = async () => {
        try {
            // creamos un carrito vacio
            return await CartModel.create({ products: [] });
        } catch (error) {
            throw new Error(`Error al crear carrito: ${error.message}`);
        }
    }

    // Obtener carrito por ID (con populate manual)
    getById = async (id) => {
        try {
            // Aquí usamos populate para entrar al array products del carrito y entrar a cada uno de sus elementos (product) para sustuir el ID por el objeto real
            return await CartModel.findById(id).populate('products.product').lean();
        } catch (error) {
            throw new Error(`Error al obtener carrito: ${error.message}`);
        }
    }

    // Obtener carrito por ID (SIN populate, solo IDs, útil para operaciones internas)
    getByIdRaw = async (id) => {
        try {
            return await CartModel.findById(id);
        } catch (error) {
            throw new Error(`Error al obtener carrito raw: ${error.message}`);
        }
    }

    // Guardar cambios en un carrito existente (para cuando modificamos products array)
    save = async (cart) => {
        try {
            return await cart.save();
        } catch (error) {
            throw new Error(`Error al guardar carrito: ${error.message}`);
        }
    }

    // Vaciar carrito
    clearCart = async (cartId) => {
        try {
            return await CartModel.findByIdAndUpdate(cartId, { products: [] }, { new: true });
        } catch (error) {
            throw new Error(`Error al vaciar carrito: ${error.message}`);
        }
    }

    // Agregar producto al carrito (o incrementar cantidad si ya existe)
    addProduct = async (cartId, productId) => {
        try {
            const cart = await CartModel.findById(cartId);
            if (!cart) {
                throw new Error('Carrito no encontrado')
            }

            // Buscar si el producto ya existe en el carrito
            const productIndex = cart.products.findIndex(
                p => p.product.toString() === productId.toString()
            );

            if (productIndex !== -1) {
                // Si el producto ya existe en el carrito, incrementar la cantidad
                cart.products[productIndex].quantity += 1;
            } else {
                // Si el producto no existe, agregar el producto con cantidad 1
                cart.products.push({ product: productId, quantity: 1 });
            }

            return await cart.save();
        } catch (error) {
            throw new Error(`Error al agregar producto: ${error.message}`);
        }
    }
}