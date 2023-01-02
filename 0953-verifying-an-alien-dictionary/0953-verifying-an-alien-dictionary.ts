function isAlienSorted(words: string[], order: string): boolean {
    //order 순서대로 사전적인 배열이 이루어졌다면 true 아니라면 false 반환
    //order 객체를 숫자부여 -> 객체의 value
    //words 배열의 각 원소가 order 객체의 value 에 따라서 index 가 정해졌는지 확인
        //words 배열의 단어를 value 값으로 바꾸기
        //사전순서로 배열됐는지 확인

    let orderObj = new Map();
    
    for(let i=1; i<=order.length; i++){
        orderObj.set(order[i-1], i)
    }

    let cur = 0;
    let pre = 0;
    let minLengthOfString = 0;

    for(let i=1; i<words.length; i++){
        minLengthOfString = Math.min(words[i].length, words[i-1].length)
        for(let j=0; j<minLengthOfString+1; j++){
            cur = Number(orderObj.get(words[i][j])?? 0)
            pre = Number(orderObj.get(words[i-1][j])?? 0)
            if(cur > pre) {break}
            else if(cur === pre) {continue}
            else {return false};
        }
    }
    
    return true;
    //tc: O(n*m)
    //sc: O(n)
};