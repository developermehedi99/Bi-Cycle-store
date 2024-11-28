import { model, Schema } from 'mongoose';
import { BicycleOrder } from './order.interface';

const BicycleorderSchema = new Schema<BicycleOrder>(
  {
    email: { type: String, required: true },
    product: { type: Schema.Types.ObjectId, ref: 'products' },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true },
);

export const BicycleOrderModel = model<BicycleOrder>(
  'OrderCycle',
  BicycleorderSchema,
);
