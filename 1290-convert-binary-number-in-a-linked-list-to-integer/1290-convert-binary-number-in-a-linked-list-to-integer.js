/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    const helper = function(param){
        if(!param) return ""
        return String(param.val) + helper(param.next)
    }
    const binary = helper(head)
    
    return parseInt(binary, 2)
};