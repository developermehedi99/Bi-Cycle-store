import { model, Schema } from 'mongoose';
import { Bicycle } from './bicycle.interface';

const biCycleSchema = new Schema<Bicycle>({
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
});

const BicycleModel = model<Bicycle>('Cycle', biCycleSchema);
