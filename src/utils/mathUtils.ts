export function isPrime(n: number): boolean {
  if (n <= 1) return false; // Ensure only numbers greater than 1 are considered

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false; // If divisible, not prime
    }
  }

  return true;
}

export function isPerfect(n: number): boolean {
  if (n <= 0) return false; // Ensure only positive numbers are checked

  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }

  return sum === n;
}

export function isArmstrong(n: number): boolean {
  const absN = Math.abs(n);
  const digits = String(absN).split("");
  const length = digits.length;
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(Number(digit), length),
    0
  );
  return sum === absN;
}

export function calculateDigitSum(n: number): number {
  if (!Number.isInteger(n)) return 0; // Ensure n is an integer

  const sign = n < 0 ? -1 : 1; // Preserve the sign for negative numbers
  const digits = Math.abs(n).toString().split(""); // Convert to absolute value
  const sum = digits.reduce((acc, digit) => acc + Number(digit), 0); // Sum up the digits

  return sign * sum; // Multiply by sign to keep the correct negative sum
}
