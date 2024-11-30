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
