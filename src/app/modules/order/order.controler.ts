import { Request, Response } from 'express';
import { bicycleOrderServices } from './order.servic';

const createBicycleOrder = async (req: Request, res: Response) => {
  try {
    const { email, product: productId, quantity } = req.body;
    await bicycleOrderServices.calculateNewInfo(productId, quantity);
    const result = await bicycleOrderServices.bicycleOreateOderForcDB(
      email,
      productId,
      quantity,
    );
    res.status(200).json({
      message: 'Order created successfully',
      status: true,
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
    const result = await bicycleOrderServices.calculateTotalPriFormDB();
    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
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
