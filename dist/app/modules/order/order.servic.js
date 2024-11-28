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
exports.bicycleOrderServices = void 0;
const bicycle_sehemaMdl_1 = require("../bicycle/bicycle.sehemaMdl");
const order_schemaModel_1 = require("./order.schemaModel");
const order_zolValidationOrder_1 = require("./order.zolValidationOrder");
const calculateNewInfo = (productId, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield bicycle_sehemaMdl_1.BicycleModel.findById(productId);
    if (!product) {
        throw new Error('Product Not Found');
    }
    if ((product === null || product === void 0 ? void 0 : product.quantity) < quantity) {
        throw new Error('Product Not Available');
    }
    product.quantity -= quantity;
    if (product.quantity === 0) {
        product.inStock = false;
    }
    yield product.save();
    return product;
});
const bicycleOreateOderForcDB = (email, productId, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield bicycle_sehemaMdl_1.BicycleModel.findById(productId);
    const totalPrice = Number(product === null || product === void 0 ? void 0 : product.price) * quantity;
    const order = {
        email,
        product: productId,
        quantity,
        totalPrice,
    };
    const validOrder = order_zolValidationOrder_1.orderValidationZodSehema.parse(order);
    const result = yield order_schemaModel_1.bicycleOrderModel.create(validOrder);
    return result;
});
const calculateTotalPriFormDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const total = yield order_schemaModel_1.bicycleOrderModel.aggregate([
        // {$group:{_id:null,perTotalRevenue:{$sum:"$totalPrice"}}},
        { $project: { perDocTotal: { $multiply: ['$totalPrice', '$quantity'] } } },
        { $group: { _id: null, totalRevenue: { $sum: '$perDocTotal' } } },
        { $project: { _id: 0, totalRevenue: 1 } },
    ]);
    // const result =total[0]
    return total[0];
});
exports.bicycleOrderServices = {
    calculateNewInfo,
    bicycleOreateOderForcDB,
    calculateTotalPriFormDB,
};
//handleTotalPriceIntoDB = calculateTotalPriFormDB
// handleUpdateInventory = calculateNewInfo
// createOderIntoDB=bicycleOreateOderForcDB
