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
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'error.message',
      data: error,
    });
  }
};

const getAllBiCycle = async (req: Request, res: Response) => {
  try {
    const result = await bicycleServices.getAllBiCycleFormDB();
    res.status(200).json({
      message: 'all bicycle finding done',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'error.message',
      data: error,
    });
  }
};

const getSingleBicycle = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await bicycleServices.getSingleBicycleFormDB(id);
    res.status(200).json({
      message: 'single bicycle done',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'error.message',
      data: error,
    });
  }
};

const updateBicycle = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.productId;
    const updateDoc = req.body;
    const result = await bicycleServices.updateBicycleFormDB(id, updateDoc);
    res.status(200).json({
      status: true,
      message: 'Product updated successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'error.message',
      data: error,
    });
  }
};
const deleteBicycle = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.productId;
    const result = await bicycleServices.deleteBicycleFormDB(id);
    res.status(200).json({
      status: true,
      message: 'Product deleted successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'error.message',
      data: error,
    });
  }
};

export const bicycleController = {
  createBiCycle,
  getAllBiCycle,
  getSingleBicycle,
  updateBicycle,
  deleteBicycle,
};
