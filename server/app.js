import 'dotenv/config';
import express from "express";
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';

// Connect to the database
connectDB();

// Create express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

export default app;