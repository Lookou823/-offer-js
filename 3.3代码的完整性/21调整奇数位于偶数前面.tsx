/**
 * URL [https://leetcode.cn/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/]
 */

function exchange(nums: number[]): number[] {

  if (!nums?.length) {
    return []
  }
  let leftIndex = 0;
  let rightIndex = nums.length - 1;
  while (leftIndex < rightIndex) {
    if (isOdd(nums[leftIndex])) {
      leftIndex++
    }
    else {
      if (isOdd(nums[rightIndex])) {
        let temp = nums[rightIndex]
        nums[rightIndex] = nums[leftIndex]
        nums[leftIndex] = temp
      }
      rightIndex--
    }
  }
  return nums
}
const isOdd = (num: number) => {
  return num % 2 === 0 ? false : true
}