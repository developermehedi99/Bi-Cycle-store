import { Bicycle } from './bicycle.interface';
import { BicycleModel } from './bicycle.sehemaMdl';

const createBiCycleIntoDB = async (bicycle: Bicycle) => {
  const result = await BicycleModel.create(bicycle);
  return result;
};

const getAllBiCycleFormDB = async () => {
  const result = await BicycleModel.find();
  return result;
};

const getSingleBicycleFormDB = async (id: string) => {
  const result = await BicycleModel.findOne({ _id: id });
  return result;
};

const updateBicycleFormDB = async (
  id: string,
  updateDoc: { price: number; quantity: number },
) => {
  const bicycle = await BicycleModel.findOne({ _id: id });
  if (!bicycle) {
    throw new Error('Product Not Found');
  }
  const filter = { _id: id };
  const result = await BicycleModel.findOneAndUpdate(filter, updateDoc, {
    new: true,
  });
  return result;
};

const deleteBicycleFormDB = async (id: string) => {
  const bicycle = await BicycleModel.findOne({ _id: id });
  if (!bicycle) {
    throw new Error('Product Not Found');
  }
  const filter = { _id: id };
  const result = await BicycleModel.deleteOne(filter);
  return result;
};

export const bicycleServices = {
  createBiCycleIntoDB,
  getAllBiCycleFormDB,
  getSingleBicycleFormDB,
  updateBicycleFormDB,
  deleteBicycleFormDB,
};
