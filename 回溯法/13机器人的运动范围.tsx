// 题目 [https://leetcode.cn/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/]
// JS的除法一定要小心四舍五入，它不会自动舍去小数的，所以要带上Math.trunc
function movingCount(m: number, n: number, k: number): number {
  let count = 0;
  if (m === 0 || n === 0 || k < 0) {
    return 0
  }
  const visited: boolean[][] = Array.from({ length: m }, () => Array(n).fill(false));

  count = movingCountCore(m, n, k, 0, 0, visited)


  return count
};

const movingCountCore = (rowLength: number, columnLength: number, limit: number, row: number, column: number, visited: boolean[][]) => {
  let count = 0;
  if (check(row, rowLength, column, columnLength, limit, visited)) {
    visited[row][column] = true;
    count = 1 + movingCountCore(rowLength, columnLength, limit, row + 1, column, visited) + movingCountCore(rowLength, columnLength, limit, row - 1, column, visited) + movingCountCore(rowLength, columnLength, limit, row, column + 1, visited) + movingCountCore(rowLength, columnLength, limit, row, column - 1, visited)

  }

  return count;
}

const check = (row: number, rowLength: number, column: number, columnLength: number, limit: number, visited: boolean[][]): boolean => {

  if (row >= 0 && row < rowLength && column >= 0 && column < columnLength && (getDigitSum(row) + getDigitSum(column)) <= limit && !visited[row][column]) {
    return true;
  }

  return false;
}

const getDigitSum = (number: number) => {
  let sum = 0;
  while (number > 0) {
    sum += number % 10;
    number = Math.trunc(number / 10)
  }

  return Math.trunc(sum);
}