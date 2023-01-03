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
var sumOfLeftLeaves = function(root) {
    let result = 0;
    const travel = function(node,isLeft){
        if(!node){return;}
        if(node.left === null && node.right === null && isLeft){
            result += node.val
        }
        travel(node.left,1)
        travel(node.right,0)
    }
    travel(root,0)
    return result
};