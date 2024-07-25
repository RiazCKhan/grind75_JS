// Utilize a stack to keep track of values
// 1. init Stack
// 2. iterate through tokens
// 3. if an operator is found
// 3a. pop() last 2 items from the stack
// 3b. perform operation as former (operator) latter, e.g. num2 - num1
// 4. else push token to the stack
// 5. return the final item on the stack


const rpn = (tokens) => {
  let stack = [];
  let signVal = 0
  let result = 0


}

let testcase = ['8', '2', '/', '3', '+'];
console.log(rpn(testcase))
