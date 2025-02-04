export function isPrime(n: number): boolean {
  const absN = Math.abs(n);
  if (absN <= 1) return false;
  for (let i = 2; i <= Math.sqrt(absN); i++) {
    if (absN % i === 0) return false;
  }
  return true;
}

export function isPerfect(n: number): boolean {
  const absN = Math.abs(n);
  if (absN <= 1) return false;
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(absN); i++) {
    if (absN % i === 0) {
      sum += i;
      if (i !== absN / i) sum += absN / i;
    }
  }
  return sum === absN;
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
  const sign = n < 0 ? -1 : 1;
  const digits = Math.abs(n).toString().split("");
  const sum = digits.reduce((acc, digit) => acc + Number(digit), 0);
  return sign * sum;
}
