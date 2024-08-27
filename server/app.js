import 'dotenv/config';
import express from "express";
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import errorMiddleware from './middlewares/errorMiddleware.js';

// Connect to the database
connectDB();

// Create express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Error handling middleware should be the last one
app.use(errorMiddleware);

export default app;