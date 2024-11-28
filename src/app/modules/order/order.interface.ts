import { ObjectId } from 'mongoose';

export type BicycleOrder = {
  email: string;
  product: ObjectId;
  quantity: number;
  totalPrice: number;
};
