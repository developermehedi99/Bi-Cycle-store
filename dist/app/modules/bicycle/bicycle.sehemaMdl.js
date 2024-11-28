"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BicycleModel = void 0;
const mongoose_1 = require("mongoose");
const biCycleSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    type: {
        type: String,
        required: true,
        enum: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
}, { timestamps: true });
exports.BicycleModel = (0, mongoose_1.model)('BiCycle', biCycleSchema);
