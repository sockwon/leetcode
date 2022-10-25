/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    const rule = [2,4,8,6]
    const result = nums.reduce((acc, cur, index,arr)=>{
        let sum=0;
        
            for(let i=index, j=0; i>=0, j<=index; i--, j++){
                if(i >= 5){
                    sum = sum + rule[(i-1)%4]*arr[j]
                }else{
                    sum = sum + (2**i)*arr[j]
                }

        }
        console.log(sum)
        return acc.concat([sum%5 === 0])
    }, [])
    return result
};