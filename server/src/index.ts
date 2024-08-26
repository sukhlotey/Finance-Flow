import express, { Express } from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

// Define allowed origins for CORS
const allowedOrigins = [
  'https://personal-financeflow.netlify.app', // Your Netlify frontend URL
  'http://localhost:5173'                    // Local development URL
];

const corsOptions = {
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // Allow cookies/auth headers
};

// Use CORS with the configured options
app.use(cors(corsOptions));

// MongoDB connection
const mongoURI = process.env.MONGODB_URI;
if (!mongoURI) {
  throw new Error('MONGODB_URI is not defined in .env');
}

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.error("Failed to connect to Database:", err));

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/financial-records", financialRecordRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
