"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const bicycle_route_1 = require("./app/modules/bicycle/bicycle.route");
const order_router_1 = require("./app/modules/order/order.router");
const app = (0, express_1.default)();
//parser as middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application routers
app.use('/api/products', bicycle_route_1.BicycleRouters);
app.use('/api/orders', order_router_1.bicycleOrderRouters);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.default = app;
