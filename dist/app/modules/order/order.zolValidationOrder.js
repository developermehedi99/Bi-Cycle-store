"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidationZodSehema = void 0;
const zod_1 = require("zod");
exports.orderValidationZodSehema = zod_1.z.object({
    email: zod_1.z.string().email({ message: 'Invalid email format' }),
    product: zod_1.z
        .string()
        .regex(/^[a-fA-F0-9]{24}$/, { message: 'Invalid ObjectId for product' }),
    quantity: zod_1.z
        .number()
        .int({ message: 'Quantity must be an integer' })
        .min(1, { message: 'Quantity must be at least 1' }),
    totalPrice: zod_1.z
        .number()
        .positive({ message: 'Total price must be greater than 0' }),
});
