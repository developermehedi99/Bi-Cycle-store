"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bicycleOrderControlars = void 0;
const order_servic_1 = require("./order.servic");
const createBicycleOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, product: productId, quantity } = req.body;
        yield order_servic_1.bicycleOrderServices.calculateNewInfo(productId, quantity);
        const result = yield order_servic_1.bicycleOrderServices.bicycleOreateOderForcDB(email, productId, quantity);
        res.status(200).json({
            message: 'Order created successfully',
            status: true,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            status: false,
            message: error === null || error === void 0 ? void 0 : error.message,
            data: error,
        });
    }
});
const calculateTotalPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_servic_1.bicycleOrderServices.calculateTotalPriFormDB();
        res.status(200).json({
            message: 'Revenue calculated successfully',
            status: true,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            status: false,
            message: error === null || error === void 0 ? void 0 : error.message,
            data: error,
        });
    }
});
exports.bicycleOrderControlars = {
    createBicycleOrder,
    calculateTotalPrice,
};
