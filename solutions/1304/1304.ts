function sumZero(n: number): number[] {
  const result = [];
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    result.push(i);
    result.push(-i);
  }
  if (n % 2 === 0) {
    return result;
  } else {
    result.push(0);
    return result;
  }
}
