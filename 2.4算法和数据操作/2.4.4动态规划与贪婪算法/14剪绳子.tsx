// 题目 [https://leetcode.cn/problems/jian-sheng-zi-lcof/]

/** 
 * 1.方法一，动态规划，子问题在分解大问题的过程中重复出现，为了避免重复求解子问题，我们可以用从下往上的顺序
 * 先计算小问题的最优解并存储下来，再以此为基础求取大问题的最优解
 * 
 * 
 * 
 *  */
function cuttingRope(n: number): number {
  if (n === 2) {
    return 1
  }
  if (n === 3) {
    return 2;
  }
  let product: number[] = Array(n + 1).fill(0)
  product[0] = 0;
  product[1] = 1;
  product[2] = 2;
  product[3] = 3;
  for (let i = 4; i <= n; i++) {
    let max = 0;
    for (let j = 1; j <= Math.trunc(i / 2); j++) {
      let result = product[j] * product[i - j];
      if (result > max) {
        max = result
      }
      product[i] = max
    }

  }
  return product[n]
};


/**
 * 2.方法二，贪婪
 * 尽可能多的用最优解去呈现大问题，至于为什么这是最优解，可以用数学归纳法证明
 * 
 * 
 */
function cuttingRope2(n: number): number {
  if (n === 2) {
    return 1
  }
  if (n === 3) {
    return 2;
  }
  if (n === 4) {
    return 4;
  }
  let timesOfThree = 0
  let timesOfTwo = 0;
  timesOfThree = Math.trunc(n / 3);

  if ((n - 3 * timesOfThree) == 1) {
    timesOfThree -= 1;



  }
  timesOfTwo = Math.trunc((n - 3 * timesOfThree) / 2);

  return Math.pow(3, timesOfThree) * Math.pow(2, timesOfTwo)


};