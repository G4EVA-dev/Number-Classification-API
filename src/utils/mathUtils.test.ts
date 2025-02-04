import { describe, expect, test } from "vitest";
import {
  isPrime,
  isPerfect,
  isArmstrong,
  calculateDigitSum,
} from "../utils/mathUtils";

describe("Math Utilities Tests", () => {
  // Prime Number Tests
  test("isPrime should return true for prime numbers", () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
    expect(isPrime(5)).toBe(true);
    expect(isPrime(11)).toBe(true);
  });

  test("isPrime should return false for non-prime numbers", () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(-7)).toBe(false);
  });

  // Perfect Number Tests
  test("isPerfect should return true for perfect numbers", () => {
    expect(isPerfect(6)).toBe(true);
    expect(isPerfect(28)).toBe(true);
  });

  test("isPerfect should return false for non-perfect numbers", () => {
    expect(isPerfect(5)).toBe(false);
    expect(isPerfect(10)).toBe(false);
    expect(isPerfect(-6)).toBe(false);
  });

  // Armstrong Number Tests
  test("isArmstrong should return true for Armstrong numbers", () => {
    expect(isArmstrong(153)).toBe(true);
    expect(isArmstrong(9474)).toBe(true);
  });

  test("isArmstrong should return false for non-Armstrong numbers", () => {
    expect(isArmstrong(123)).toBe(false);
    expect(isArmstrong(10)).toBe(false);
  });

  // Digit Sum Calculation Tests
  test("calculateDigitSum should return correct sum for positive numbers", () => {
    expect(calculateDigitSum(123)).toBe(6); // 1 + 2 + 3 = 6
    expect(calculateDigitSum(456)).toBe(15); // 4 + 5 + 6 = 15
  });

  test("calculateDigitSum should return correct sum for negative numbers", () => {
    expect(calculateDigitSum(-123)).toBe(-6); // - (1 + 2 + 3) = -6
    expect(calculateDigitSum(-456)).toBe(-15); // - (4 + 5 + 6) = -15
  });

  test("calculateDigitSum should return 0 for invalid input", () => {
    expect(calculateDigitSum(NaN)).toBe(0);
    expect(calculateDigitSum(Infinity)).toBe(0);
  });
});
