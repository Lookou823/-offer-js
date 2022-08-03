/**
 * URL [https://leetcode.cn/problems/c32eOV/]
 */
// 先快慢指针判断是否有环
// 有环之后，确定环内节点的个数n
// 然后快指针先走n步，然后快慢指针一起走，等慢指针走到了环入口节点，快指针也同时走到了环入口节点，return即可
function detectCycle(head: ListNode | null): ListNode | null {

  if (!head) return null
  if (!head.next) return null
  let count = hasCircle(head)
  if (!count) return null;
  let q: ListNode | null = head;
  let s: ListNode | null = head;
  while (count) {
    q = q!.next
    count--;
  }
  while (1) {
    if (s == q) {
      return s
    }
    q = q!.next
    s = s!.next

  }
  return null

};

const hasCircle = (head: ListNode | null) => {
  let q: ListNode | null | undefined = head;
  let s: ListNode | null | undefined = head;
  while (q) {
    q = q?.next;
    q = q?.next;
    s = s?.next
    if (s == q) {
      let t = s;
      let count = 0;
      while (1) {
        s = s?.next
        count++;
        if (s == t) {
          return count
        }
      }
    }
  }

  return false
}
