import { model, Schema } from 'mongoose';
import { bicycleOrder } from './order.interface';

const BicycleorderSchema = new Schema<bicycleOrder>(
  {
    email: { type: String, required: true },
    product: { type: Schema.Types.ObjectId, ref: 'products' },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true },
);

export const bicycleOrderModel = model<bicycleOrder>(
  'OrderCycle',
  BicycleorderSchema,
);
