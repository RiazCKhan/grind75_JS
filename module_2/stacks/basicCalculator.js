// Order of Operation
// 1. Convert consecutive digits into a single number
// 2. Handle +/- operators
// 3. Handle "("
// 4. Handle ")"


function calculator(expression) {
  // expression is a string
  let stack = [];
  let number = 0;
  let signValue = 1;
  let result = 0;

  for (let i = 0; i < expression.length; i++) {
    // Identify Number
    if (expression[i] >= '0' && expression[i] <= '9') {
      number = number * 10 + parseInt(expression[i]);
    }

    // Identify +/- operator
    else if (expression[i] === '+') {
      // result += number * signVal is the evaluation of the 'left' expression
      // The 'left' expression is only evaluated when a new operator is found
      result += number * signValue;
      signValue = 1
      number = 0;
    } else if (expression[i] === '-') {
      // result += number * signVal is the evaluation of the 'left' expression
      // The 'left' expression is only evaluated when a new operator is found
      result += number * signValue
      signValue = -1
      number = 0
    }

    // Identify bracket operator

  }
  return result + number * signValue;
}


// let testcase = '13 + (1 + 2) - 3'
// let testcase = '(1 + 2)'
let testcase = '13 + 1 - 3 - 1'
calculator(testcase);
// console.log(calculator(testcase));