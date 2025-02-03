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
import { CONFIG } from "./config";

dotenv.config();

const app = express();
const PORT = process.env.PORT || CONFIG.DEFAULT_PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send(CONFIG.ROOT_ROUTE_MESSAGE);
});

app.get("/api/classify-number", async (req: Request, res: Response) => {
  try {
    const numberParam = req.query.number as string;
    const number = parseInt(numberParam);

    if (isNaN(number)) {
      return res.status(400).json({
        number: numberParam,
        error: true,
      });
    }

    const isPrimeResult = isPrime(number);
    const isPerfectResult = isPerfect(number);
    const isArmstrongResult = isArmstrong(number);
    const isOdd = number % 2 !== 0;
    const digitSum = calculateDigitSum(number);

    const funFact = await fetchFunFact(number);

    const properties: string[] = [];
    if (isArmstrongResult) properties.push("armstrong");
    if (isOdd) properties.push("odd");
    else properties.push("even");

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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
