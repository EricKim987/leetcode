export function findDiagonalOrder(mat: number[][]): number[] {
  const result: number[] = [];
  const rows = mat.length;
  const cols = mat[0].length;
  const total = rows * cols;
  let i = 0, j = 0, dx = -1, dy = 1;
  for (let _ in [...Array(total).keys()]) {
    result.push(mat[i][j]);
    if (i + dx < 0 || j + dy === cols) {
      if (j + dy < cols) {
        j += dy;
      } else {
        i += 1;
      }
      dx = -dx;
      dy = -dy;
    } else if (j + dy < 0 || i + dx === rows) {
      if (i + dx < rows) {
        i += dx;
      } else {
        j += 1;
      }
      dx = -dx;
      dy = -dy;
    } else {
      i += dx;
      j += dy;
    }
  }

  return result;
}