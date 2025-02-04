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
exports.fetchFunFact = fetchFunFact;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../config");
function fetchFunFact(n) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`${config_1.CONFIG.NUMBERS_API_BASE_URL}/${n}${config_1.CONFIG.MATH_ENDPOINT}`);
            return response.data;
        }
        catch (error) {
            if (error === null || error === void 0 ? void 0 : error.isAxiosError) {
                console.error("Axios error fetching fun fact:", error.message);
                return "No fun fact available.";
            }
            else if (error instanceof Error) {
                console.error("Unexpected error:", error.message);
                return "No fun fact available.";
            }
            else {
                console.error("Unknown error:", error);
                return "No fun fact available.";
            }
        }
    });
}
