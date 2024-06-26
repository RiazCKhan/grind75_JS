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

  if (result.length === 1 && result[0] === '-') return 0
  if (result.length === 0) return 0
  return parseInt(result.join(''))
}

let testCase = "king 25"
console.log(typeof (myAtoi(testCase)))