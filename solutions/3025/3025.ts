export function numberOfPairs(points: number[][]): number {
  points.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);
  const n = points.length;
  let result = 0;
  for (let i = 0; i < n; i++) {
    const top = points[i][1];
    let bot = -Infinity;
    for (let j = i + 1; j < n; j++) {
      const y = points[j][1];
      if (bot < y && y <= top) {
        result += 1;
        bot = y;
        if (bot === top) {
          break;
        }
      }
    }
  }
  return result;
}
