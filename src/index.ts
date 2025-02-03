import express, { Request, Response } from "express";
import cors from "cors";
import { fetchFunFact } from "./utils/apiUtils";
import {
  isPrime,
  isPerfect,
  isArmstrong,
  calculateDigitSum,
} from "./utils/mathUtils";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Root route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World! The server is running.");
});

// API Endpoint
app.get("/api/classify-number", async (req: Request, res: Response) => {
  try {
    const number = parseInt(req.query.number as string);

    // Input validation
    if (isNaN(number)) {
      return res.status(400).json({ number: req.query.number, error: true });
    }

    // Mathematical properties
    const isPrimeResult = isPrime(number);
    const isPerfectResult = isPerfect(number);
    const isArmstrongResult = isArmstrong(number);
    const isOdd = number % 2 !== 0;
    const digitSum = calculateDigitSum(number);

    // Fetch fun fact
    const funFact = await fetchFunFact(number);

    // Construct properties array
    const properties: string[] = [];
    if (isArmstrongResult) properties.push("armstrong");
    if (isOdd) properties.push("odd");
    else properties.push("even");

    // Send response
    res.json({
      number,
      is_prime: isPrimeResult,
      is_perfect: isPerfectResult,
      properties,
      digit_sum: digitSum,
      fun_fact: funFact,
    });
  } catch (error) {
    console.error("Error in /api/classify-number:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
