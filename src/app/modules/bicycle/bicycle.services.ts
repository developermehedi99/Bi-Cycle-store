import { Bicycle } from './bicycle.interface';
import { BicycleModel } from './bicycle.sehemaMdl';

const createBiCycleIntoDB = async (bicycle: Bicycle) => {
  const result = await BicycleModel.create(bicycle);
  return result;
};

export const bicycleServices = {
  createBiCycleIntoDB,
};
