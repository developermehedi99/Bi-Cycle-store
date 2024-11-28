import { BicycleModel } from '../bicycle/bicycle.sehemaMdl';
import { bicycleOrderModel } from './order.schemaModel';
import { orderValidationZodSehema } from './order.zolValidationOrder';

const calculateNewInfo = async (productId: string, quantity: number) => {
  const product = await BicycleModel.findById(productId);
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
const bicycleOreateOderForcDB = async (
  email: string,
  productId: string,
  quantity: number,
) => {
  const product = await BicycleModel.findById(productId);
  const totalPrice = Number(product?.price) * quantity;
  const order = {
    email,
    product: productId,
    quantity,
    totalPrice,
  };
  const validOrder = orderValidationZodSehema.parse(order);
  const result = await bicycleOrderModel.create(validOrder);
  return result;
};
const calculateTotalPriFormDB = async () => {
  const total = await bicycleOrderModel.aggregate([
    // {$group:{_id:null,perTotalRevenue:{$sum:"$totalPrice"}}},
    { $project: { perDocTotal: { $multiply: ['$totalPrice', '$quantity'] } } },

    { $group: { _id: null, totalRevenue: { $sum: '$perDocTotal' } } },
    { $project: { _id: 0, totalRevenue: 1 } },
  ]);
  // const result =total[0]
  return total[0];
};
export const bicycleOrderServices = {
  calculateNewInfo,
  bicycleOreateOderForcDB,
  calculateTotalPriFormDB,
};

//handleTotalPriceIntoDB = calculateTotalPriFormDB
// handleUpdateInventory = calculateNewInfo
// createOderIntoDB=bicycleOreateOderForcDB
