/*
The below solution fails the current testcase
*/
const myAtoi = (str) => {
  let result = [];
  let trimStr = str.trimStart()

  for (let i = 0; i < trimStr.length; i++) {

    if (trimStr[i] === '-') {
      result.push(trimStr[i])
      continue;
    } else if (trimStr[i] === '+') {
      continue
    } else if (isNaN(parseInt(trimStr[i]))) {
      break;
    } else {
      result.push(trimStr[i])
    }
  }

  let final = parseInt(result.join(''))

  if (final < -(2 ** 31)) {
    return -(2 ** 31)
  } else if (final > (2 ** 31) - 1) {
    return (2 ** 31) - 1
  }

  if (result.length === 1 && result[0] === '-') return 0
  if (result.length === 0) return 0
  return final
}

let testCase = "+-12"
// output -12
// expected 0
console.log(typeof (myAtoi(testCase)))