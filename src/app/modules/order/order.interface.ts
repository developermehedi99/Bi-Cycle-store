import { ObjectId } from 'mongoose';

export type bicycleOrder = {
  email: string;
  product: ObjectId;
  quantity: number;
  totalPrice: number;
};
