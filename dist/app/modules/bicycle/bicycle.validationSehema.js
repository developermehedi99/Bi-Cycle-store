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
// const BicycleValidationZodSehema = z.object({
//   name: z.string({ message: 'Not valid input' }),
//   brand: z.string({ message: 'Not valid input' }),
//   price: z.number().positive({ message: 'Price must be a positive number' }),
//   category: z.enum(['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'], {
//     message: 'Not valid input',
//   }),
//   description: z.string({ message: 'Not valid input' }), // description is required and must be a string
//   quantity: z
//     .number()
//     .int({ message: 'Quantity must be an integer' })
//     .min(1, { message: 'Quantity must be at least 1' }),
//   inStock: z.boolean(),
// });
// export default BicycleValidationZodSehema;
