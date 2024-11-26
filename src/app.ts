import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { BicycleRouters } from './app/modules/bicycle/bicycle.route';
const app: Application = express();

//parser as middleware
app.use(express.json());
app.use(cors());

// application routers
app.use('/api/v1/bicycles', BicycleRouters);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
