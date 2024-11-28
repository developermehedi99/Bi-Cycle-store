import { z } from 'zod';

export const orderValidationZodSehema = z.object({
  email: z.string().email({ message: 'Invalid email format' }),
  product: z
    .string()
    .regex(/^[a-fA-F0-9]{24}$/, { message: 'Invalid ObjectId for product' }),
  quantity: z
    .number()
    .int({ message: 'Quantity must be an integer' })
    .min(1, { message: 'Quantity must be at least 1' }),
  totalPrice: z
    .number()
    .positive({ message: 'Total price must be greater than 0' }),
});
