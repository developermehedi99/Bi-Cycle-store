import express from 'express';
import { bicycleController } from './bicycle.controler';

const router = express.Router();

router.post('/create-bicycle', bicycleController.createBiCycle);

export const BicycleRouters = router;
