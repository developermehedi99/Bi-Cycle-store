"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BicycleValidationZodSehema = void 0;
const zod_1 = require("zod");
exports.BicycleValidationZodSehema = zod_1.z.object({
    name: zod_1.z.string().nonempty('Name is required.'),
    brand: zod_1.z.string().nonempty('Brand is required.'),
    price: zod_1.z.number().positive('Price must be a positive number.'),
    type: zod_1.z.enum(['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'], {
        required_error: 'Type is required.',
    }),
    description: zod_1.z.string().nonempty('Description is required.'),
    quantity: zod_1.z
        .number()
        .int()
        .nonnegative('Quantity must be a non-negative integer.'),
    inStock: zod_1.z.boolean(),
});
