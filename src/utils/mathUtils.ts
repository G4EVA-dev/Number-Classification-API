// Check if a number is prime
export function isPrime(n: number): boolean {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Check if a number is perfect
export function isPerfect(n: number): boolean {
  if (n <= 1) return false;
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      sum += i;
      if (i !== n / i) sum += n / i;
    }
  }
  return sum === n;
}

// Check if a number is an Armstrong number
export function isArmstrong(n: number): boolean {
  const digits = String(n).split("");
  const length = digits.length;
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(Number(digit), length),
    0
  );
  return sum === n;
}

// Calculate the sum of digits
export function calculateDigitSum(n: number): number {
  return String(n)
    .split("")
    .reduce((acc, digit) => acc + Number(digit), 0);
}
