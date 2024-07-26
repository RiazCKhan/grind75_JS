// Order of Operation
// 1. Convert consecutive digits into a single number
// 2. Handle +/- operators
// 3. Handle "("
// 4. Handle ")"


const calculator = (expression) => {
  // expression is a string
  let stack = [];
  let number = 0;
  let signValue = 0;
  let result = 0;

  for (let i = 0; i < expression.length; i++) {
    // Identify Number
    if (expression[i] >= '0' && expression[i] <= '9') {
      number = number * 10 + parseInt(expression[i]);
      stack.push(number);
    }

    // Identify +/- operator
    if (expression[i] === '+') {
      signValue = 1;
      let num1 = stack.pop()
      let num2 = stack.pop()
      result += num1 + (num2 * signValue)
      number = 0
    } else if (expression[i] === '-') {
      signValue = -1;
      let num1 = stack.pop()
      let num2 = stack.pop()
      result += num1 + (num2 * signValue)
      number = 0
    }

    // Identify bracket operator

  }
  return result
}


// let testcase = '13 + (1 + 2) - 3'
let testcase = '13 - 1'
console.log(calculator(testcase));