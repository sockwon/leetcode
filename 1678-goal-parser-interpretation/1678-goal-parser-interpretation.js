/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let resultArr = []
    const len = command.length
    for(let i=0; i<len; i++){
       if(command[i]==="(" && command[i+1] === ")"){
           resultArr.push("o")
        }else if(command[i] === "(" || command[i] === ")"){
            continue;
        }else {
            resultArr.push(command[i])
        }
    }
    const result = resultArr.join("")
    resultArr = null;
    return result
        // return command.split("()").join("o").split("(al)").join("al");

};