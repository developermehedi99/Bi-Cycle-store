import { z } from 'zod';

export const BicycleValidationZodSehema = z.object({
  name: z.string().nonempty('Name is required.'),
  brand: z.string().nonempty('Brand is required.'),
  price: z.number().positive('Price must be a positive number.'),
  type: z.enum(['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'], {
    required_error: 'Type is required.',
  }),
  description: z.string().nonempty('Description is required.'),
  quantity: z
    .number()
    .int()
    .nonnegative('Quantity must be a non-negative integer.'),
  inStock: z.boolean(),
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
