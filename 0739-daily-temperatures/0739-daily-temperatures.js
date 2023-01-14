/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    const len = T.length;
    const result = [];
    for(let i=0; i<len; i++){

        let count=1;

        for(let j=i+1; j<len; j++){
            if(T[i] < T[j]){
                result.push(count);
                break;
            }
            
            count++   
        }
        
        if(count >= len-i) result.push(0)
    }
    return result;
};