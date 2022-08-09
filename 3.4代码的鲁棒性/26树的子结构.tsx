/**
 * URL [https://leetcode.cn/problems/shu-de-zi-jie-gou-lcof/]
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 * 这题的思路是分两步走
 * 步骤 1.在a 中找到val 和 b 根节点val相同的节点
 * 步骤 2.若a中存在这样的节点，再去比较以该节点为根节点的子树是否与 b 相同
 * 
 * 做法
 * 1.找到 a 中每一个 val 和 b 根节点val 相同的节点，并对这个节点进行步骤2。
 * 因此，isSubStructure 就是递归寻找目标节点的函数，当传入的节点有null存在时
 * 递归结束
 * 
 * 2.找到目标节点后，使用 hasSubStructure 方法进行结构的判断
 * 如何判断两颗树的结构是否一样？那么就是对它的左子树和右子树进行递归的比较
 * 比较结束的标志是存在null的结点，换种说法就是，已经比到叶子节点了，
 * 到叶子节点为止，都相同，下一轮都是null节点或者只有A不是null的时候，
 * 说明结构一样。
 * 
 * 
 * 
 * 
 * 
 * 
 * @param A 
 * @param B 
 * @returns 
 */
function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  if (!A) {
    return false
  }
  if (!B) {
    return false
  }
  let result = false;
  if (A.val == B.val) {
    result = hasSubStructure(A, B)
  }
  if (!result) {
    result = isSubStructure(A.left, B)
  }
  if (!result) {
    result = isSubStructure(A.right, B)
  }
  return result

};

const hasSubStructure = (A: TreeNode | null, B: TreeNode | null) => {
  if (!B) {
    return true
  }

  if (!A) {
    return false
  }
  if (A.val == B.val) {
    return hasSubStructure(A.left, B.left) && hasSubStructure(A.right, B.right)
  }
  return false
}