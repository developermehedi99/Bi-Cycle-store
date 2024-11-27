import express from 'express';
import { bicycleController } from './bicycle.controler';

const router = express.Router();

router.post('/create-bicycle', bicycleController.createBiCycle);
router.get('/', bicycleController.getAllBiCycle);
router.get('/:bicycleId', bicycleController.getSingleBicycle);
router.put('/:bicycleId', bicycleController.updateBicycle);
router.delete('/:bicycleId', bicycleController.deleteBicycle);

export const BicycleRouters = router;
