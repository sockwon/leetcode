/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    //전수조사 해야 한다.
    //트리순회를 응용한다.
    const travel = function(node){
        if(node){
            return 1+Math.max(travel(node.left), travel(node.right));
        } else {
            return 0
        }
    }
    const result = travel(root)
    return result
};