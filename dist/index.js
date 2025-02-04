"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const apiUtils_1 = require("./utils/apiUtils");
const mathUtils_1 = require("./utils/mathUtils");
const dotenv_1 = __importDefault(require("dotenv"));
const config_1 = require("./config");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || config_1.CONFIG.DEFAULT_PORT;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/api/classify-number", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const numberParam = req.query.number;
        // Validate if the parameter exists
        if (!numberParam) {
            return res.status(400).json({
                error: true,
                message: "Missing 'number' query parameter.",
            });
        }
        const number = Number(numberParam);
        // Ensure it's a valid integer
        if (!Number.isInteger(number)) {
            return res.status(400).json({
                error: true,
                message: `'${numberParam}' is not a valid integer.`,
            });
        }
        // Compute properties
        const isPrimeResult = (0, mathUtils_1.isPrime)(number);
        const isPerfectResult = (0, mathUtils_1.isPerfect)(number);
        const isArmstrongResult = (0, mathUtils_1.isArmstrong)(number);
        const isOdd = number % 2 !== 0;
        const digitSum = (0, mathUtils_1.calculateDigitSum)(number);
        const funFact = yield (0, apiUtils_1.fetchFunFact)(number);
        const properties = [];
        if (isArmstrongResult)
            properties.push("armstrong");
        if (isOdd)
            properties.push("odd");
        else
            properties.push("even");
        res.status(200).json({
            number,
            is_prime: isPrimeResult,
            is_perfect: isPerfectResult,
            is_armstrong: isArmstrongResult,
            properties,
            digit_sum: digitSum,
            fun_fact: funFact,
        });
    }
    catch (error) {
        console.error("Error in /api/classify-number:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
