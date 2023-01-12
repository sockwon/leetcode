/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    let row = 0
    let col = matrix.length-1;

    while(col>=0 && matrix[col].length-1 >=row){
        if(matrix[col][row] === target) return true;
        else if(matrix[col][row] > target) col--
        else if(matrix[col][row] < target) row++
    }

    return false;
};