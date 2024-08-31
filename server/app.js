import 'dotenv/config';
import express from "express";
import connectDB from './config/db.js';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import errorMiddleware from './middlewares/errorMiddleware.js';
import todoRoutes from './routes/todoRoutes.js';
import successMiddleware from './middlewares/successMiddleWare.js';
import userRoutes from './routes/userRoutes.js';

// Connect to the database
connectDB();

// Create express app
const app = express();

// Use CORS middleware
app.use(cors({
    origin: 'http://localhost:5173', // Replace with the origin of your frontend
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], // Allowed HTTP methods
   allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
}));

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