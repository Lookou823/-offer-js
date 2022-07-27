// 题目链接 [https://leetcode.cn/problems/zhong-jian-er-cha-shu-lcof/]
// slice 很消耗性能哦
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

  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
    }

 function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if(!preorder?.length || !inorder?.length){
        return null
    }
    
    return buildCore(preorder,inorder)
    
    };
    
    const buildCore = (preorder: number[],inorder: number[])=>{
        let rootValue = preorder[0];
        let root = new TreeNode()
        root.val = rootValue;
        root.left = root.right = null;
        if(preorder?.length === 1){
            if(inorder?.length === 1&&preorder[0] == inorder[0]){
                return root
            }
            
        }
      
    
       let index = inorder.indexOf(root.val)
       console.log('index',index)
       if(index>=0){
      if(index>0){
           root.left = buildCore(preorder.slice(1,index+1),inorder.slice(0,index))
    
      }
       }
       if(index+1<preorder.length&&index!=-1){
           
    
           root.right =  buildCore(preorder.slice(index+1,preorder.length+index),inorder.slice(index+1,inorder.length+index))
       }
       return root
    }