/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const input = s.toLowerCase();
    const leng = s.length;
    const a = input.slice(0,leng/2)
    const b = input.slice(leng/2, leng)
    const vowel = ["a", "e", "i", "o", "u"];
    
   return a.split("").filter((val)=>{return vowel.includes(val)}).length === b.split("").filter((val)=>{ return vowel.includes(val)}).length
    
};