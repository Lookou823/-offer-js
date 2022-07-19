
// 题目 [https://leetcode.cn/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/submissions/]
// 时间复杂度 O(n)
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
  }
 function reversePrint(head: ListNode | null): number[] {
    if(!head){
        return [];
    }
    let stack:number[] = [];
    while(head){
        stack.push(head.val)
        head = head.next
    }
 let array:(number)[] = []
 while(stack.length){
     array.push(stack.pop()??-1)
 }
return array
};