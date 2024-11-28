import express from 'express';
import { bicycleOrderControlars } from './order.controler';

const router = express.Router();

router.post('/', bicycleOrderControlars.createBicycleOrder);
router.get('/revenue', bicycleOrderControlars.calculateTotalPrice);

export const bicycleOrderRouters = router;
