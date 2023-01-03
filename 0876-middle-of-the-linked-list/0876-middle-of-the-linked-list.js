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
    //길이를 먼저센다.
    //가운데 인덱스를 찾는다
    //찾은 인덱스에서 시작해 끝까지 리턴한다.
    
    //길이를 먼저센다.
    let count = 0;
    const helper = function(node){
        count += 1
        if(node.next === null) return;
        helper(node.next)
    }
    helper(head)
    
    if(count === 1) return head;
    
    //가운데 인덱스를 찾는다
    let middleIndex = count%2===0? count/2+1 :Math.ceil(count/2);
    //찾은 인덱스에서 시작해 끝까지 리턴한다.
    let result;
    const resultFn = function(node, inx){
        if(inx===2) {
            result = node.next; 
            return;
        }else{
            resultFn(node.next, inx -=1)
        }
    }
    resultFn(head, middleIndex)
    
    return result;
};