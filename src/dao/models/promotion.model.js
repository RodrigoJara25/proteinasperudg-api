import mongoose from "mongoose";

const collection = "promotions";

const promotionSchema = new mongoose.Schema({
    imagen: {
        type: String,
        required: [true, 'La imagen de la promoción es obligatoria'],
        trim: true
    },
    destacado: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    versionKey: false
});

// Índice para filtrar promociones destacadas
promotionSchema.index({ destacado: 1 });

const Promotion = mongoose.model(collection, promotionSchema);

export default Promotion;
