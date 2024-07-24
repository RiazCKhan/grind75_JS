// Order of Operation
// 1. Convert consecutive digits into a single number
// 2. Handle +/- operators
// 3. Handle "("
// 4. Handle ")"


const calculator = (expression) => {
  // expression is a string

  let stack = [];
  let currentNum = 0;
  let sign = 0;
  let result = 0;

  for (let i = 0; i < expression.length; i++) {

    // Identify Number
    if (expression[i] >= '0' && expression[i] <= '9') {



      // currentNum += parseInt(expression[i])
    }

    //   if (expression[i] === '+') {
    //     sign = 1
    //     result += currentNum * sign
    //   } else if (expression[i] === '-') {
    //     sign = -1
    //     result += currentNum * sign
    //   }

    //   if (expression[i] === '(') {
    //     stack.push(result)
    //     stack.push(sign)
    //   } else if (expression[i] === ')') {
    //     result += stack.pop()
    //   }

  }
  // return result
}


let testcase = '13 + (1 + 2) - 3'
console.log(calculator(testcase));