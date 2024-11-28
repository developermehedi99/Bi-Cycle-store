import { BicycleModel } from '../bicycle/bicycle.sehemaMdl';
import { BicycleValidationZodSehema } from '../bicycle/bicycle.validationSehema';
import { BicycleOrderModel } from './order.schemaMod';

const calculateNewInfo = async (bicycleId: string, quantity: number) => {
  const product = await BicycleModel.findById(bicycleId);
  if (!product) {
    throw new Error('Product Not Found');
  }
  if (product?.quantity < quantity) {
    throw new Error('Product Not Available');
  }
  product.quantity -= quantity;
  if (product.quantity === 0) {
    product.inStock = false;
  }

  await product.save();
  return product;
};

const bicycleOrderCreateFormDB = async (
  email: string,
  bicycleId: string,
  quantity: number,
) => {
  const product = await BicycleModel.findById(bicycleId);
  const totalPrice = Number(product?.price) * quantity;
  const order = {
    email,
    product: bicycleId,
    quantity,
    totalPrice,
  };
  const validOrder = BicycleValidationZodSehema.parse(order);
  const result = await BicycleOrderModel.create(validOrder);
  return result;
};
const calculateTotalPriceFormDB = async () => {
  const total = await BicycleOrderModel.aggregate([
    { $project: { perDocTotal: { $multiply: ['$totalPrice', '$quantity'] } } },

    { $group: { _id: null, totalRevenue: { $sum: '$perDocTotal' } } },
    { $project: { _id: 0, totalRevenue: 1 } },
  ]);
  return total[0];
};

export const bicycleOrderServices = {
  calculateNewInfo,
  bicycleOrderCreateFormDB,
  calculateTotalPriceFormDB,
};
