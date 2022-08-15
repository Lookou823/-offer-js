/**
 * URL [https://leetcode.cn/problems/er-cha-shu-de-jing-xiang-lcof/]
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

function mirrorTree(root: TreeNode | null): TreeNode | null {
  mirrorTreeRecursion(root)

  return root

};
const mirrorTreeRecursion = (root: TreeNode | null) => {
  if (!root) {
    return
  }
  mirrorTreeRecursion(root.left)
  mirrorTreeRecursion(root.right)

  let temp: TreeNode | null = root.left;
  root.left = root.right
  root.right = temp
}