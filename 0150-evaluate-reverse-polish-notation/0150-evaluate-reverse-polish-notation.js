/**
 * @param {string[]} tokens
 * @return {number}
 */
function evalRPN(tokens) {
  const stack = [];
  const operand = {
      "+" : (a,b)=>a+b,
      "-" : (a,b)=>a-b,
      "*" : (a,b)=>a*b,
      "/" : (a,b)=> a/b>0 ? Math.floor(a/b) : Math.ceil(a/b),
  }
    let value, a,b, result;
  while(tokens.length !== 0){
      value = tokens.shift()
      if(operand[value]){
        b= stack.pop()
        a= stack.pop()
        result = operand[value](a,b)
        stack.push(result);
      }else{
        stack.push(Number(value));
      }
  }

  return stack[0];
};