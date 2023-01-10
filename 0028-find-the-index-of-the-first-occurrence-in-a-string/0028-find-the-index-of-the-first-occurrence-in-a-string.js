/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    //needle 의 첫글자와 일치하는 stack 을 찾는다.
    //일치한다면 needle 의 나머지 글자와 일치하는지 검사한다.
    //first 충분. 첫글자와 일치하는 인덱스를 반환

    const regex = new RegExp(`${needle}`)
    const result = haystack.search(regex);

    return result;
};