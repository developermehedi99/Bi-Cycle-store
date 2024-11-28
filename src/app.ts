import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { BicycleRouters } from './app/modules/bicycle/bicycle.route';
import { bicycleOrderRouters } from './app/modules/order/order.router';
const app: Application = express();

//parser as middleware
app.use(express.json());
app.use(cors());

// application routers
app.use('/api/products', BicycleRouters);
app.use('/api/orders', bicycleOrderRouters);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
