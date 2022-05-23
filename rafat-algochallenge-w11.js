/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if (!head) return head;

  var node = head;
  var pre;

  while (node) {
    if (node.val === val) {
      if (!pre) {
        head = head.next;
      } else {
        pre.next = node.next;
      }
    } else {
      pre = node;
    }
    node = node.next;
  }

  return head;
};

console.log(removeElements([1,2,6,3,4,5,6],6))