// 题目 [https://leetcode.cn/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/]

// 方法一，用位运算中的与运算，去和n碰，然后flag左移
/**
 * 什么意思呢，比如，n是1001，flag是1
 * 
 * 第一次碰完，flag是和n的最后一位1进行与运算，然后flag左移，变成了10
 * 第二次，flag就是和n的倒数第二位0进行与运算，然后flag左移，变成了100
 * .。。
 * 最后，flag左移，变成了0000，while循环结束
 *  
 *  
 */
//方法一的局限，就是不管n有多少个1，都得循环32次，（因为n是32位）

var hammingWeight = function (n) {
  let count = 0;
  let flag = 1
  while (flag) {
    if (n & flag) {
      count++;
    }
    flag = flag << 1;
  }
  return count
};




// 方法二
/**
 * 把一个整数减去1，在和它本身做一个与运算，则会把这个整数最右边的1变成0
 * 因此就可以实现，n里有几个1就循环几次，大大减少了时间
 * 
 *  
 */
var hammingWeight = function (n) {
  let count = 0;
  while (n) {
    count++;
    n = (n - 1) & n
  }
  return count
};