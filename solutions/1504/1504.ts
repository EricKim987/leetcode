export function numSubmat(mat: number[][]): number {
  let result = 0
  const row = mat.length
  const col = mat[0].length

  const dp:number[][] = new Array(row).fill(0).map(() => new Array(col).fill(0))
  for (let i = 0; i < row; i++ ) {
    for (let j = 0; j < col; j++) {
      if (mat[i][j] === 1) {
        dp[i][j] = j === 0 ? 1 : dp[i][j-1]+1
      }
    }
  }
  
  for (let i = 0; i < row; i++ ) {
    for (let j = 0; j < col; j++) {
      let minOnes = Number.MAX_SAFE_INTEGER

      for (let k = i; k >=0; k--) {
        minOnes = Math.min(minOnes, dp[k][j])
        result += minOnes
      }
    }
  }

  return result  
};