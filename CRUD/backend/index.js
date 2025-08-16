import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors'
const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect('mongodb://localhost:27017/mvcapp')
 .then(() => console.log('MongoDB connected'))
 .catch(err => console.log(err));
app.use('/api/users', userRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));