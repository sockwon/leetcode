
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    //이진검색을 사용한다.
    //만약 target 이 mid 보다 크다면 mid+1 을 반환
		//만약 target 이 mid 보다 작거나 같다면 mid 반환
    let lo= 0
    let hi= nums.length-1
    let mid;
    if(nums[nums.length-1]<target) return nums.length;
    else if(nums[0]>target) return 0;

    while(lo<=hi){
        mid=Math.floor((hi+lo)/2)
        if(nums[mid]==target) return mid;
        else if(nums[mid]>target) hi=mid-1
        else lo = mid+1
    }

   return lo
};