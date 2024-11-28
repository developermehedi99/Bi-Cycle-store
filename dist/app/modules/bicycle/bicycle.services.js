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
exports.bicycleServices = void 0;
const bicycle_sehemaMdl_1 = require("./bicycle.sehemaMdl");
const createBiCycleIntoDB = (bicycle) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bicycle_sehemaMdl_1.BicycleModel.create(bicycle);
    return result;
});
const getAllBiCycleFormDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bicycle_sehemaMdl_1.BicycleModel.find();
    return result;
});
const getSingleBicycleFormDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bicycle_sehemaMdl_1.BicycleModel.findOne({ _id: id });
    return result;
});
const updateBicycleFormDB = (id, updateDoc) => __awaiter(void 0, void 0, void 0, function* () {
    const bicycle = yield bicycle_sehemaMdl_1.BicycleModel.findOne({ _id: id });
    if (!bicycle) {
        throw new Error('Product Not Found');
    }
    const filter = { _id: id };
    const result = yield bicycle_sehemaMdl_1.BicycleModel.findOneAndUpdate(filter, updateDoc, {
        new: true,
    });
    return result;
});
const deleteBicycleFormDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const bicycle = yield bicycle_sehemaMdl_1.BicycleModel.findOne({ _id: id });
    if (!bicycle) {
        throw new Error('Product Not Found');
    }
    const filter = { _id: id };
    const result = yield bicycle_sehemaMdl_1.BicycleModel.deleteOne(filter);
    return result;
});
exports.bicycleServices = {
    createBiCycleIntoDB,
    getAllBiCycleFormDB,
    getSingleBicycleFormDB,
    updateBicycleFormDB,
    deleteBicycleFormDB,
};
