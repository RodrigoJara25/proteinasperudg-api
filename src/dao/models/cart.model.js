import mongoose from "mongoose";

const collection = "carts";

const cartSchema = new mongoose.Schema({
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "products"
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ]
}, {
    timestamps: true,
    versionKey: false
});

const Cart = mongoose.model(collection, cartSchema);

export default Cart;