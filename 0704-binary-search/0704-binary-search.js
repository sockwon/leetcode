/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 //이진검색은 정렬된 상태에서 실행한다. 
var search = function(nums, target) {
    let lowInx = 0;
    let highInx = nums.length-1;
    let middleInx = Math.floor(highInx/2)

    while(lowInx <=highInx){
        if(nums[middleInx]<target){
            lowInx = middleInx+1;
        }else if(nums[middleInx]>target){
            highInx = middleInx-1;
        }else {
            return middleInx;
        }
        middleInx = Math.floor((lowInx+highInx)/2)
    }

    return -1
};