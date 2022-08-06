/**
 * URL [https://leetcode.cn/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/]
 */

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

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {

  if (l1 === null) {
    return l2
  }

  if (l2 === null) {
    return l1
  }

  let l3: ListNode | null = null;
  if (l1.val <= l2.val) {
    l3 = l1;
    l3.next = mergeTwoLists(l1.next, l2)
  }

  else {
    l3 = l2;
    l3.next = mergeTwoLists(l1, l2.next)

  }


  return l3;



};