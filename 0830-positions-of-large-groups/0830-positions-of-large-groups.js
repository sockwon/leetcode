/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    const result= [];
    let i=0;
    let j=1;
    const len = s.length;
    
    while(j<len){
        
        if(s[i] === s[j]){
            while(s[i] === s[j]){
                j++;
            }
            j-i >= 3 ? result.push([i,j-1]):"";
        }else{
            i=j;
            j++;
        }
    }

    return result; 
};