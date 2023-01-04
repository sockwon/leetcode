function sortByBits(arr: number[]): number[] {
    //주어진 배열의 원소들을 하나씩 꺼낸다
    //각 원소들을 2진법으로 변환한다.
    //2진법에서 1이 사용된 개수에 따라서 정렬한다.
    //배열의 각 원소를 다시 십집수로 바꾼다. 반환한다.

    //주어진 배열의 원소들을 하나씩 꺼낸다
    //각 원소들을 2진법으로 변환한다.
    const newArr = arr.map((val)=>{
       return val.toString(2)
    })
    function countOne(x:string){
        return x.match(/1/g)?.filter(item=>item!=="").length
    }

    //2진법에서 1이 사용된 개수에 따라서 정렬한다.
    let A,B;
    newArr.sort(function(a,b){
        A = countOne(a) ?? 0
        B = countOne(b) ?? 0
        if(A < B) return -1
        else if(A === B) return parseInt(a,2) > parseInt(b,2)? 1 : -1
        else return 1
        })

    //배열의 각 원소를 다시 십진수로 바꾼다. 반환한다.
    const result = newArr.map((val)=>parseInt(val,2))
    return result
};
//tc: n+n+2*n*m+정렬함수(nlogn)
//sc: n+2+n