"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const mathUtils_1 = require("../utils/mathUtils");
(0, vitest_1.describe)("Math Utilities Tests", () => {
    // Prime Number Tests
    (0, vitest_1.test)("isPrime should return true for prime numbers", () => {
        (0, vitest_1.expect)((0, mathUtils_1.isPrime)(2)).toBe(true);
        (0, vitest_1.expect)((0, mathUtils_1.isPrime)(3)).toBe(true);
        (0, vitest_1.expect)((0, mathUtils_1.isPrime)(5)).toBe(true);
        (0, vitest_1.expect)((0, mathUtils_1.isPrime)(11)).toBe(true);
    });
    (0, vitest_1.test)("isPrime should return false for non-prime numbers", () => {
        (0, vitest_1.expect)((0, mathUtils_1.isPrime)(1)).toBe(false);
        (0, vitest_1.expect)((0, mathUtils_1.isPrime)(4)).toBe(false);
        (0, vitest_1.expect)((0, mathUtils_1.isPrime)(9)).toBe(false);
        (0, vitest_1.expect)((0, mathUtils_1.isPrime)(-7)).toBe(false);
    });
    // Perfect Number Tests
    (0, vitest_1.test)("isPerfect should return true for perfect numbers", () => {
        (0, vitest_1.expect)((0, mathUtils_1.isPerfect)(6)).toBe(true);
        (0, vitest_1.expect)((0, mathUtils_1.isPerfect)(28)).toBe(true);
    });
    (0, vitest_1.test)("isPerfect should return false for non-perfect numbers", () => {
        (0, vitest_1.expect)((0, mathUtils_1.isPerfect)(5)).toBe(false);
        (0, vitest_1.expect)((0, mathUtils_1.isPerfect)(10)).toBe(false);
        (0, vitest_1.expect)((0, mathUtils_1.isPerfect)(-6)).toBe(false);
    });
    // Armstrong Number Tests
    (0, vitest_1.test)("isArmstrong should return true for Armstrong numbers", () => {
        (0, vitest_1.expect)((0, mathUtils_1.isArmstrong)(153)).toBe(true);
        (0, vitest_1.expect)((0, mathUtils_1.isArmstrong)(9474)).toBe(true);
    });
    (0, vitest_1.test)("isArmstrong should return false for non-Armstrong numbers", () => {
        (0, vitest_1.expect)((0, mathUtils_1.isArmstrong)(123)).toBe(false);
        (0, vitest_1.expect)((0, mathUtils_1.isArmstrong)(10)).toBe(false);
    });
    // Digit Sum Calculation Tests
    (0, vitest_1.test)("calculateDigitSum should return correct sum for positive numbers", () => {
        (0, vitest_1.expect)((0, mathUtils_1.calculateDigitSum)(123)).toBe(6); // 1 + 2 + 3 = 6
        (0, vitest_1.expect)((0, mathUtils_1.calculateDigitSum)(456)).toBe(15); // 4 + 5 + 6 = 15
    });
    (0, vitest_1.test)("calculateDigitSum should return correct sum for negative numbers", () => {
        (0, vitest_1.expect)((0, mathUtils_1.calculateDigitSum)(-123)).toBe(-6); // - (1 + 2 + 3) = -6
        (0, vitest_1.expect)((0, mathUtils_1.calculateDigitSum)(-456)).toBe(-15); // - (4 + 5 + 6) = -15
    });
    (0, vitest_1.test)("calculateDigitSum should return 0 for invalid input", () => {
        (0, vitest_1.expect)((0, mathUtils_1.calculateDigitSum)(NaN)).toBe(0);
        (0, vitest_1.expect)((0, mathUtils_1.calculateDigitSum)(Infinity)).toBe(0);
    });
});
