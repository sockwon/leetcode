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
 * @return {boolean}
 */
const calcBal = function(node){
    if(node === null) return 0;
    
    let left = calcBal(node.left);
    let right = calcBal(node.right);

    if(left === -1 || right === -1) return -1;

    let diff = Math.abs(left-right);

    if(diff > 1) return -1

    let height = Math.max(left, right) +1;

    return height;
}

var isBalanced = function(root) {
    //트리의 바닥은 null 이므로 숫자로 전환할 수 있다. 즉 null =0 과 같기 때문에.
    //바닥을 찍으면 높이 1로 본다. 그 다음 1씩 높인다. 이진트리이기 때문에 가능
    //left 와 right 의 높이가 1 초과하여 차이가 난다면 false 를 리턴해야 한다.
    //빈배열은 발란스다.
    //원소가 하나인 경우 false 다

    if(!root) return true;

    const result = calcBal(root);

    if(result === -1) return false;

    return true;
};

