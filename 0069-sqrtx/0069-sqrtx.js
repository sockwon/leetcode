/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    //이진검색을 응용하여 만든다.
    let result;
    const helper=function(lo,hi,x){
        if(lo > hi) {result = hi; return;}
       
        const mid = (lo+hi) >>> 1;
        
        if(mid**2 === x){result=mid; return;}
        else if(mid**2 > x) helper(lo, mid-1, x);
        else helper(mid+1,hi,x)
    }
    helper(0, x, x);
    return result
};