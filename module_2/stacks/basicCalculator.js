// Order of Operation
// 1. Convert consecutive digits into a single number
// 2. Handle +/- operators
// 3. Handle "("
// 4. Handle ")"


const calculator = (expression) => {
  // expression is a string
  let stack = [];
  let number = 0;
  let signValue = 1;
  let result = 0;

  for (let i = 0; i < expression.length; i++) {
    // Identify Number

    // Identify +/- operator

    // Identify bracket operator

  }
}


let testcase = '13 + (1 + 2) - 3'
// let testcase = '13'
console.log(calculator(testcase));