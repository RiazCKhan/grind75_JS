// Iterate input string
// If bracket is 'open', push to stack
// If current bracket is closing and matches top then pop()
// If stack is empty return true else false


const validParentheses = (string) => {
  let stack = [];

  for (const bracket of string) {
    if (bracket === '{' || bracket === '(' || bracket === '[') {
      stack.push(bracket);
    } else if (stack[stack.length - 1] === '{' && bracket === '}') {
      stack.pop();
    } else if (bracket === '}') {
      stack.push(bracket)
    } else if (stack[stack.length - 1] === '(' && bracket === ')') {
      stack.pop();
    } else if (bracket === ')') {
      stack.push(bracket)
    } else if (stack[stack.length - 1] === '[' && bracket === ']') {
      stack.pop();
    } else if (bracket === ']') {
      stack.push(bracket)
    }
  }
  if (stack.length >= 1) return false
  return true
}

let testcase = "{}[]{}[{}]"
let testcase1 = '{}}'
console.log(validParentheses(testcase))
