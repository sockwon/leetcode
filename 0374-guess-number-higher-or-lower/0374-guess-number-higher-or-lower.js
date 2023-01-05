/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let lo=1
    let hi=n
    let mid;
    let isRight;

    while(lo<=hi){
        mid = (lo+hi) >>> 1
        isRight = guess(mid)
        if(isRight === 0) return mid;
        else if(isRight === 1) lo = mid+1
        else hi = mid-1
    }
    
};