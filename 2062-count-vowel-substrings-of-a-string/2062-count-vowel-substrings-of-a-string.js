/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(word) {
    
    let s = 0;
    let e = 5;
    const result = [];
    const regex = /[aeiou]/g
    const a = /a/
    const ee = /e/
    const i = /i/
    const o = /o/
    const u = /u/
    
    while(s+4 <= word.length){
       const newStr = word.substring(s,e) 
       const temp = newStr.match(regex)?.join("")

       if(newStr.length === temp?.length && a.test(newStr) && ee.test(newStr) && i.test(newStr) && o.test(newStr) && u.test(newStr)){
            result.push(newStr);
            e++;
        }else{
            e++;
        }
        if(e > word.length){
            s++; e = s+5;
        }
        // console.log(newStr)
    }
    return result.length
};