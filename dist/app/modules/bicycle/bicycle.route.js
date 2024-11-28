"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BicycleRouters = void 0;
const express_1 = __importDefault(require("express"));
const bicycle_controler_1 = require("./bicycle.controler");
const router = express_1.default.Router();
router.post('/', bicycle_controler_1.bicycleController.createBiCycle);
router.get('/', bicycle_controler_1.bicycleController.getAllBiCycle);
router.get('/:bicycleId', bicycle_controler_1.bicycleController.getSingleBicycle);
router.put('/:bicycleId', bicycle_controler_1.bicycleController.updateBicycle);
router.delete('/:bicycleId', bicycle_controler_1.bicycleController.deleteBicycle);
exports.BicycleRouters = router;
