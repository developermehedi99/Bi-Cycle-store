import { Request, Response } from 'express';
import { bicycleOrderServices } from './order.servic';

const createBicycleOrder = async (req: Request, res: Response) => {
  try {
    const { email, product: bicycleId, quantity } = req.body;
    await bicycleOrderServices.calculateNewInfo(bicycleId, quantity);
    const result = await bicycleOrderServices.bicycleOrderCreateFormDB(
      email,
      bicycleId,
      quantity,
    );
    res.status(200).json({
      status: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      status: false,
      message: error?.message,
      data: error,
    });
  }
};

const calculateTotalPrice = async (req: Request, res: Response) => {
  try {
    const result = await bicycleOrderServices.calculateTotalPriceFormDB();
    res.status(200).json({
      status: true,
      message: 'Revenue calculated successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      status: false,
      message: error?.message,
      data: error,
    });
  }
};
export const bicycleOrderControlars = {
  createBicycleOrder,
  calculateTotalPrice,
};
