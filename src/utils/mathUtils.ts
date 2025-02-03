import { CONFIG } from "../config";

export function isPrime(n: number): boolean {
  if (n <= CONFIG.MIN_NUMBER || n > Number.MAX_SAFE_INTEGER) return false;
  for (let i = CONFIG.MIN_DIVISOR; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

export function isPerfect(n: number): boolean {
  if (n <= CONFIG.MIN_NUMBER) return false;
  let sum = CONFIG.MIN_NUMBER;
  for (let i = CONFIG.MIN_DIVISOR; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      sum += i;
      if (i !== n / i) sum += n / i;
    }
  }
  return sum === n;
}

export function isArmstrong(n: number): boolean {
  const digits = String(n).split("");
  const length = digits.length;
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(Number(digit), length),
    0
  );
  return sum === n;
}

export function calculateDigitSum(n: number): number {
  return String(n)
    .split("")
    .reduce((acc, digit) => acc + Number(digit), 0);
}
