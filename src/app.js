import express from 'express';
import authRoutes from './routes/auth.js';
import carRoutes from './routes/cars.js';

const app = express();

app.use(express.json());
app.use('/api', authRoutes);
app.use('/api', carRoutes);

export default app;
