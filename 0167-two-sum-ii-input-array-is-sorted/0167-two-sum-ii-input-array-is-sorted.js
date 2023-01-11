/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    //이진검색을 응용
    //target - numbers[i]를 numbers[i+1] 부터 검색함

    const binarySearch = function(arr, num){
        let left=0, right = arr.length-1, mid;
        while(left<=right){
            mid = Math.floor((left+right)/2);
            if(arr[mid]=== num) {return mid}
            else if (arr[mid]>num) right = mid-1
            else left = mid+1
        }
    }

    let diff = 0, result;
    for(let i=0; i<numbers.length; i++){
        if(i !==0 && numbers[i] === numbers[i-1]) continue;
        diff = target - numbers[i]
        
        result = binarySearch(numbers.slice(i+1), diff)+1+i+1
        if(result) {return [i+1,result]}
    }
 
};