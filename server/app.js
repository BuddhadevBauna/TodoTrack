import 'dotenv/config';
import express from "express";
import connectDB from './config/db.js';

// Connect to the database
connectDB();

const app = express();

export default app;