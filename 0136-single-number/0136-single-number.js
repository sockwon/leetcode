/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    let num = nums.pop();
    let inx = nums.indexOf(num);
    
    while(inx !== -1){
        nums.splice(inx, 1);
        num = nums.pop();
        inx = nums.indexOf(num)
    }

    return num;
};