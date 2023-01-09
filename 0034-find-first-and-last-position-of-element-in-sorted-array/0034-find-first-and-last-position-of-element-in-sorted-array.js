/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    //tc logn 필수. 이진검색 필요
    //target 과 같은 nums 를 찾는다. 이때 index 가 가장 작은 값을 찾는다.
    //만약 있다면 target +1 을 찾는다. 가장 가까운 값을 찾아준다. 인덱스에 -1을 한다. 
    //만약 없다면 [-1,-1]을 리턴한다.

    const helper = function(target, nums, left, right=nums.length-1){
        let mid;
        while(left<=right){
            mid = left+right >>> 1;
            if(nums[mid] < target) left = mid+1
            else right = mid-1
        }
        return left
    }

    const first = helper(target, nums, 0);
    if(nums[first] !== target) return [-1,-1];

    return [first ,helper(target+1, nums, first)-1]

    
};