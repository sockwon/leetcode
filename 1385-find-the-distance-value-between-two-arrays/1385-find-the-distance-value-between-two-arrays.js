/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    //가장 단순한 방법으로 계산 할 경우 최악의 경우 250000번 계산한다. 
    //O(m*n) 의 형태가 될것이다. 
    //전수 계산 외의 다른 방법이 가능할까? 
    //arr2 를 정렬한다. 오름차순
    //arr1 의 각 원소를 이진검색으로 arr2 에서 찾는다. 가장 가까운 값이면 충분
    //그 값과 arr1 의 차이가 d 보다 작다면 arr1 의 원소는 찾는 원소가 아니다.

    arr2.sort((a,b)=>a-b)
    
    let mid, dis;
    const helper = function(arr,val,lo, hi,d){
        while(lo<=hi){
            mid = (lo+hi) >>> 1;
            dis = Math.abs(arr[mid]-val)
            if(dis <= d) return false;
            else if(arr[mid]>val) hi = mid-1
            else lo = mid+1
        }
        return true;
    }

    return arr1.filter((val)=>helper(arr2,val,0,arr2.length-1,d)).length
};