import mongoose from "mongoose";

const collection = "brands";

const brandSchema = new mongoose.Schema({
    marca: {
        type: String,
        required: [true, 'El nombre de la marca es obligatorio'],
        unique: true,
        trim: true
    },
    description: {
        type: String,
        trim: true,
        default: ''
    },
    logo: {
        type: String,
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

// Índice para búsquedas por marca
brandSchema.index({ marca: 'text' });

// Índice para marcas activas
brandSchema.index({ isActive: 1 });

const Brand = mongoose.model(collection, brandSchema);

export default Brand;