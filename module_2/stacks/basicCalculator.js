// Order of Operation
// 1. Convert consecutive digits into a single number
// 2. Handle +/- operators
// 3. Handle "("
// 4. Handle ")"

// Identify consecutive Numbers 



const calculator = (expression) => {
  // expression is a string

  let stack = [];
  let number = 0;
  let sign = 0;
  let result = 0;

  for (let i = 0; i < expression.length; i++) {

    // Identify Number
    if (expression[i] >= '0' && expression[i] <= '9') {
      number = number * 10 + parseInt(expression[i])
    }

    // Identify +/- operator
    if (expression[i] === '+') {
      sign = 1
    } else if (expression[i] === '-') {
      sign = -1
    }

    // Identify bracket operator
    if (expression[i] === '(') {
    } else if (expression[i] === ')') {
    }

  }
  return number
}


let testcase = '13 + (1 + 2) - 3'
// let testcase = '13'
console.log(calculator(testcase));