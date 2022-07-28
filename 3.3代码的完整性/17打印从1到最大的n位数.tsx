// 题目链接 [https://leetcode.cn/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/]
// 1.经典思维，大数问题，值得再品，用数组模拟加的过程挺有意思的
function printNumbers(n: number): number[] {

  const bigNumber = Array(n + 1).fill(0)
  const result = []
  if (n < 0) {
    return [];
  }
  while (!increment(bigNumber, n)) {
    saveNumber(bigNumber, result)
  }

  return result

};

const increment = (bigNumber: number[], n: number) => {
  // 判断是否溢出，即3位数999 ，+1后变成了1000
  let isOverflow = false
  let takeOver = 0;
  for (let i = n - 1; i >= 0; i--) {
    let indexSum = bigNumber[i] + takeOver
    // 永远都是最后一位先往上加
    if (i === n - 1) {
      indexSum++;
    }

    if (indexSum >= 10) {
      if (i === 0) {
        isOverflow = true;
      }
      else {
        indexSum -= 10;
        takeOver = 1;
        bigNumber[i] = indexSum
      }
    }
    else {
      bigNumber[i] = indexSum
      break;
    }
  }

  return isOverflow;
}

const saveNumber = (bigNumber: number[], result: number[]) => {
  for (let i = 0; i < bigNumber.length; i++) {
    if (bigNumber[i] !== 0) {
      const numberlist = bigNumber.slice(i, bigNumber.length - 1).join('')
      result.push(parseInt(numberlist))
      break;
    }
  }

}

//方法2，全排列，也挺有意思的，关键是理解
// 空想想不出来可以草稿纸上理一下过程，就明白了
// 先传第一位是0，然后看次一位，假设只有两位，那就是00，01，02，03.......09,然后return，10,11,12,13,...19,再return
function printNumbers2(n: number): number[] {

  const bigNumber = Array(n).fill(0)
  const result = []
  if (n < 0) {
    return [];
  }


  for (let i = 0; i < 10; i++) {
    bigNumber[0] = i
    recursive(1, bigNumber, result)
  }

  return result

}
const recursive = (index: number, bigNumber: number[], result: number[]) => {
  if (index === bigNumber.length) {
    const num = parseInt(bigNumber.join(''))
    if (num) {
      result.push(num)
    }
    return
  }
  for (let i = 0; i < 10; i++) {
    bigNumber[index] = i
    recursive(index + 1, bigNumber, result)

  }
}
