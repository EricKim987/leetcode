export function areaOfMaxDiagonal(dimensions: number[][]): number {
  let max = 0, maxArea = 0;
  dimensions.forEach(([x, y]) => {
    const d = x * x + y * y;
    const area = x * y;
    if (d > max || (d === max && area > maxArea)) {
      max = d;
      maxArea = area;
    }
  });
  return maxArea;
}
