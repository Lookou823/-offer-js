// 题目链接 [https://leetcode.cn/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/]

// 方法一，超级垃圾的解法
function myPow(x: number, n: number): number {
  if (x === 0) {
    return 0;
  }
  if (x === 1 || x === -1) {
    if (n < 0) {
      n = -n;
    }
    if (n % 2 === 0 && x === -1) { return 1; }
    return x;
  }
  if (n === 0) {
    return 1
  }
  if (n > 0) {
    let result = 1;
    while (n > 0) {
      result = result * x;
      n--;
    }
    return result;
  }
  if (n < 0) {
    let m = -n
    let result = 1;
    while (m > 0) {
      result = result * x;
      m--;
    }
    return 1 / result;
  }
  return 0;
}

//方法2，超牛的公式运用，p112
//快是很快，但是n特别大的会爆栈
function myPow2(x: number, n: number): number {


  if (n > 0) {
    return minePow(x, n)
  }

  else {
    return 1 / minePow(x, -n)
  }


};

const minePow = (x: number, n: number) => {
  if (n === 0) {
    return 1;
  }
  if (x === 1 || x === -1) {
    if (n < 0) {
      n = -n;
    }
    if (n % 2 === 0 && x === -1) { return 1; }
    return x;
  }
  if (n === 1) {
    return x;
  }

  let result = minePow(x, n >> 1)
  result *= result;
  if ((n & 1) === 1) {
    result *= x;
  }

  return result
}