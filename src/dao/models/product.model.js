import mongoose from "mongoose";

const collection = "products";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre del producto es obligatorio'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'La descripción es obligatoria'],
        trim: true
    },
    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories',
        required: [true, 'La categoría es obligatoria']
    },
    marca: {
        type: String,
        required: [true, 'La marca es obligatoria'],
        trim: true
    },
    precio: {
        type: Number,
        required: [true, 'El precio es obligatorio'],
        min: [0, 'El precio no puede ser negativo']
    },
    precioOferta: {
        type: Number,
        default: null,
        min: [0, 'El precio de oferta no puede ser negativo']
    },
    images: {
        type: [String],
        default: [],
        validate: {
            validator: function (arr) {
                return arr.length > 0;
            },
            message: 'Debe tener al menos una imagen'
        }
    },
    presentaciones: {
        type: [String],
        default: [],
        // Ejemplos: ["1kg", "2kg", "5lb", "2.5lb"]
    },
    sabores: {
        type: [String],
        default: [],
        // Ejemplos: ["Chocolate", "Fresa", "Vainilla", "Cookies & Cream"]
    },
    usoIdeal: {
        type: String,
        trim: true,
        default: null
    },
    ingredientes: {
        type: String,
        trim: true,
        default: null
    },
    idealPara: {
        type: String,
        trim: true,
        default: null
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true,
    versionKey: false
});

// Índice para búsquedas más rápidas por categoría
productSchema.index({ categoria: 1 });

// Índice para búsquedas por nombre
productSchema.index({ name: 'text' });

const Product = mongoose.model(collection, productSchema);

export default Product;