export function sortMatrix(grid: number[][]): number[][] {
  const dir = [1, 1];
  const rows = grid.length;
  const cols = grid[0].length;
  const result = Array(rows).fill(0).map((_) => Array(cols).fill(0));
  for (let i = 0; i < rows; i++) {
    let x = i, y = 0;
    const temp: number[]= [];
    while (x < rows && y < cols) {
      temp.push(grid[x][y]);
      x += dir[0];
      y += dir[1];
    }
    temp.sort((a,b) => b-a);
    for (const [index, value] of temp.entries()) {
      result[i + index][index] = value;
    }
  }

  for (let j = 1; j < cols; j++) {
    let x = 0, y = j;
    const temp: number[]= [];
    while (x < rows && y < cols) {
      temp.push(grid[x][y]);
      x += dir[0];
      y += dir[1];
    }
    temp.sort((a,b) => a-b);
    for (const [index, value] of temp.entries()) {
      result[index][j +index] = value;
    }
  }
  return result;
}
