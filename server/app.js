import 'dotenv/config';
import express from "express";
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import errorMiddleware from './middlewares/errorMiddleware.js';
import todoRoutes from './routes/todoRoutes.js';
import successMiddleware from './middlewares/successMiddleWare.js';
import userRoutes from './routes/userRoutes.js';

// Connect to the database
connectDB();

// Create express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Success handling middleware should be before routes
app.use(successMiddleware);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);
app.use('/api', userRoutes);

// Error handling middleware should be the last one
app.use(errorMiddleware);

export default app;