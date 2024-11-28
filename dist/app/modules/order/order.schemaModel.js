"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bicycleOrderModel = void 0;
const mongoose_1 = require("mongoose");
const BicycleorderSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    product: { type: mongoose_1.Schema.Types.ObjectId, ref: 'products' },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
}, { timestamps: true });
exports.bicycleOrderModel = (0, mongoose_1.model)('OrderCycle', BicycleorderSchema);
