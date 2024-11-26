import { Request, Response } from 'express';
import { bicycleServices } from './bicycle.services';

const createBiCycle = async (req: Request, res: Response) => {
  try {
    const { bicycle: bicycleData } = req.body;
    const result = await bicycleServices.createBiCycleIntoDB(bicycleData);
    res.status(200).json({
      message: 'Bicycle created successfully',
      success: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const bicycleController = {
  createBiCycle,
};
