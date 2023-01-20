/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    //부분 배열의 곱이 k 보다 작은 경우 조건을 통과. 통과 개수를 리턴.
    //divide conquer
    //부분배열을 만든다. 부분배열은 겹치지 않는다.
    let count = 0
    for(let i=0; i<nums.length; i++){
        let temp = 1;
        for(let j=i; j<nums.length; j++){
            temp *= nums[j]
            if(temp < k) count++;
        }
    }

    return count;

};