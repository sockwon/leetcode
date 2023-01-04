/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    //s 문자열의 문자를 t 에서 찾는다
    //만약 없다면 false 를 리턴한다.
    //만약 있다면 그 문자를 t 에서 제거한다.
    //반복한다. 만약 t 가 빈 문자열이 된다면 true 리턴한다.

    //두 문자열을 Map 으로 만든다. 
    //두 Map 을 비교한다.
    //같다면 true, 다르면 false 를 리턴한다.

    const helper = function(string){
        const tempMap = new Map()
        for(let val of string){
            if(tempMap.has(val)){
                tempMap.set(val, 1+tempMap.get(val))
            }else {
                tempMap.set(val, 1)
            }
        }
        return tempMap
    }
    
    //문자열 및 정수 비교가능
    const compareTwoMap = function(Map1, Map2){
        let result = true
        if(Map1.size !== Map2.size) return false;
        Map1.forEach((val, key)=>{
            if(!Map2.has(key)) result = false
            else if(Map2.get(key) !== val) result = false
        })
        return result;
    }

    return compareTwoMap(helper(s), helper(t))
};