/** 
 *  URL [https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/]
 * 
 * 
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

// 方法一，最普通的O（n）

function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
  if (!head) return null
  if (k < 0) return null
  let nodeLength = 0;
  let measureLengthPointer: ListNode | null = head;
  while (measureLengthPointer) {
    nodeLength += 1;
    measureLengthPointer = measureLengthPointer.next
  }
  let visitFlag = nodeLength - k;
  while (visitFlag > 0) {
    head = head!.next
    visitFlag--;
  }

  return head

};


// 方法2，快慢指针，找倒数第k个节点，只要让快指针先走k-1步，然后在快慢指针一起走，等到快指针走到尾结点的时候，慢指针走到的节点就是我们要的目标节点
// 注意代码的鲁棒性
// 输入 k 的值 要考虑，小于 0， = 0，大于链表长度
// 输入的链表是个空链表怎么办
function getKthFromEnd2(head: ListNode | null, k: number): ListNode | null {
  if (!head) return null
  if (k <= 0) return null
  if (k === 1) {
    while (head.next) {
      head = head.next
    }
    return head;
  }
  let quickPointer: ListNode | null = head;
  let slowPointer: ListNode | null = head;
  let step = k - 1;
  while (step > 0) {
    //避免大于链表长度时的报错
    if (quickPointer.next) {
      quickPointer = quickPointer.next

    }
    else {
      return null
    }
    step--;
  }
  while (quickPointer.next) {


    quickPointer = quickPointer.next

    slowPointer = slowPointer!.next
    if (!quickPointer.next) {
      return slowPointer
    }
  }
  return slowPointer

};