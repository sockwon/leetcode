/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {

    const res = []
    let arr;
    let diff;
    

    for(let i=0; i<l.length; i++){

        arr = nums.slice(l[i],r[i]+1).sort((a,b)=>a-b)

        diff = arr[0]-arr[1]

        let bool = true

        for(let j=1; j<arr.length-1; j++){
            diff === arr[j]-arr[j+1] ? true : bool=false;
        }

        res.push(bool);

    }

    return res;
};