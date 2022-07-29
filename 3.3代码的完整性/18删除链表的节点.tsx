/**
 * URL [https://leetcode.cn/problems/shan-chu-lian-biao-de-jie-dian-lcof/]
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

function deleteNode(head: ListNode | null, val: number): ListNode | null {
  if (!head) {
    return null
  }
  if (head.val === val) {
    head = head.next
    return head
  }
  let preNode: null | ListNode | undefined = null
  let node: null | ListNode | undefined = head
  while (node?.val !== val) {
    preNode = node;
    node = node?.next
  }
  if (preNode?.next === null) {
    return null
  }
  else {

    preNode!.next = preNode!.next.next
  }
  return head
};