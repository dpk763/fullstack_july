import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGO_URI)
 .then(() => console.log('MongoDB connected'))
 .catch(err => console.log(err));
app.use('/api/users', userRoutes);
app.use('/api/product',productRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));