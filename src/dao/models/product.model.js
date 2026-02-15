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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'brands',
        required: [true, 'La marca es obligatoria']
    },
    precioDesde: {
        type: Number,
        required: [true, 'El precio base es obligatorio'],
        min: [0, 'El precio no puede ser negativo']
    },
    presentaciones: [{
        peso: {
            type: String,
            required: [true, 'El peso es obligatorio'],
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
        }
    }],
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

// Índice para búsquedas más rápidas por marca
productSchema.index({ marca: 1 });

// Índice para búsquedas por nombre
productSchema.index({ name: 'text' });

// Índice compuesto para ordenar por precio
productSchema.index({ precio: 1 });

// Índice para productos activos
productSchema.index({ isActive: 1 });

const Product = mongoose.model(collection, productSchema);

export default Product;