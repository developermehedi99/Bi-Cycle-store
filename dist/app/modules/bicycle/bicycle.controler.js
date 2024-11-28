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
exports.bicycleController = void 0;
const bicycle_services_1 = require("./bicycle.services");
const bicycle_validationSehema_1 = require("./bicycle.validationSehema");
const createBiCycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bicycleData = req.body;
        // zod validation
        const zodValidation = bicycle_validationSehema_1.BicycleValidationZodSehema.parse(bicycleData);
        const result = yield bicycle_services_1.bicycleServices.createBiCycleIntoDB(zodValidation);
        res.status(200).json({
            message: 'Bicycle created successfully',
            status: true,
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            status: false,
            message: error.issues[0].message,
            data: error,
        });
    }
});
const getAllBiCycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bicycle_services_1.bicycleServices.getAllBiCycleFormDB();
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
    }
    catch (error) {
        res.status(500).json({
            status: false,
            message: error.message,
            data: error,
        });
    }
});
const getSingleBicycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.bicycleId;
        const result = yield bicycle_services_1.bicycleServices.getSingleBicycleFormDB(id);
        res.status(200).json({
            message: 'Bicycle retrieved successfully',
            status: true,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            status: false,
            message: error.message,
            data: error,
        });
    }
});
const updateBicycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.bicycleId;
        const updateDoc = req.body;
        const result = yield bicycle_services_1.bicycleServices.updateBicycleFormDB(id, updateDoc);
        res.status(200).json({
            status: true,
            message: 'Bicycle updated successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            status: false,
            message: 'error.message',
            data: error,
        });
    }
});
const deleteBicycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.bicycleId;
        const result = yield bicycle_services_1.bicycleServices.deleteBicycleFormDB(id);
        res.status(200).json({
            status: true,
            message: 'Bicycle deleted successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            status: false,
            message: error.message,
            data: error,
        });
    }
});
exports.bicycleController = {
    createBiCycle,
    getAllBiCycle,
    getSingleBicycle,
    updateBicycle,
    deleteBicycle,
};
