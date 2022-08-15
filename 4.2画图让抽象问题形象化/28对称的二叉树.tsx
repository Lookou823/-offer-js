/**
 * URL [https://leetcode.cn/problems/dui-cheng-de-er-cha-shu-lcof/]
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

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return true
  }
  let list: (number | string)[] = []
  let list2: (number | string)[] = [];
  pre(root, list)
  preRight(root, list2)
  // console.log(list)
  // console.log(list2)
  return list.join('') === list2.join('')
};

const pre = (root: TreeNode | null, list: (number | string)[]) => {
  if (!root) {
    list.push('null')

    return
  }
  list.push(root.val)
  pre(root.left, list)
  pre(root.right, list)
}


const preRight = (root: TreeNode | null, list: (number | string)[]) => {
  if (!root) {
    list.push('null')
    return
  }
  list.push(root.val)
  preRight(root.right, list)

  preRight(root.left, list)
}