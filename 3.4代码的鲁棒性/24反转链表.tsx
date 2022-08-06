/**
 * URL [https://leetcode.cn/problems/fan-zhuan-lian-biao-lcof/]
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

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) {
    return null
  }
  if (!head.next) {
    return head
  }

  let pre: ListNode | null | undefined = null;
  let next: ListNode | null | undefined = null;
  let cur: ListNode | null | undefined = null;

  pre = head;
  while (null !== pre) {
    next = cur;
    cur = pre;
    pre = pre.next;
    cur.next = next;
  }

  return cur



};