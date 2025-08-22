export function minimumArea(grid: number[][]): number {
    let result = 0;
    const rows = grid.length
    const cols = grid[0].length
    let top = -1, left = -1, right= -1, bottom=-1
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (grid[i][j] === 1) {
          top = top===-1 ? i : Math.min(top, i)
          left = left===-1 ? j : Math.min(left,j)
          bottom = bottom===-1 ? i : Math.max(bottom,i)
          right = right===-1 ? j : Math.max(right, j)
        }
      }
    }
    result = (bottom-top+1)*(right-left+1)
    return result
};