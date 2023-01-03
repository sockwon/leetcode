/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slow=head, fast=head;
    let result;
    const helper = function(slow, fast){
        if(slow.next === null || fast === null || fast.next===null){
            result = slow
            return;
        };
        slow = slow.next
        fast = fast.next.next
        helper(slow, fast)
    }
    helper(slow, fast)
    return result;
};