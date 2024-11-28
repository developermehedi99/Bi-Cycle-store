import { Request, Response } from 'express';
import { bicycleServices } from './bicycle.services';
import { BicycleValidationZodSehema } from './bicycle.validationSehema';

const createBiCycle = async (req: Request, res: Response) => {
  try {
    const bicycleData = req.body;
    // zod validation
    const zodValidation = BicycleValidationZodSehema.parse(bicycleData);
    const result = await bicycleServices.createBiCycleIntoDB(zodValidation);
    res.status(200).json({
      message: 'Bicycle created successfully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      status: false,
      message: error.issues[0].message,
      data: error,
    });
  }
};

const getAllBiCycle = async (req: Request, res: Response) => {
  try {
    const result = await bicycleServices.getAllBiCycleFormDB();
    if (result.length <= 0) {
      res.status(404).json({
        status: false,
        message: 'Bicycle is not fount',
        data: result,
      });
    }
    res.status(200).json({
      message: 'Bicycles retrieved successfully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      status: false,
      message: error.message,
      data: error,
    });
  }
};

const getSingleBicycle = async (req: Request, res: Response) => {
  try {
    const id = req.params.bicycleId;
    const result = await bicycleServices.getSingleBicycleFormDB(id);
    res.status(200).json({
      message: 'Bicycle retrieved successfully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      status: false,
      message: error.message,
      data: error,
    });
  }
};

const updateBicycle = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.bicycleId;
    const updateDoc = req.body;
    const result = await bicycleServices.updateBicycleFormDB(id, updateDoc);
    res.status(200).json({
      status: true,
      message: 'Bicycle updated successfully',
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
    const id: string = req.params.bicycleId;
    const result = await bicycleServices.deleteBicycleFormDB(id);
    res.status(200).json({
      status: true,
      message: 'Bicycle deleted successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      status: false,
      message: error.message,
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
