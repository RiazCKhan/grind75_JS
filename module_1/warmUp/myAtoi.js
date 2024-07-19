// Also know as 'String to Integar'
// Use built-in method trimStart() to remove leading whitespace
// Create variable Sign = 1
// Check for +/-
// assigned -1 if '-' is found
// Create variable Result
// Iterate over array
// Store the numerical value of array[i] in Result
// Check for 32-bit overflow
// Return the result * sign (accounting for -/+)


function myAtoi(s) {

  let string = s.trimStart();

  let sign = 1;
  let result = 0;

  for (let i = 0; i < string.length; i++) {

    if (string[i] === '-') {

      sign = -1;

    } else if (string[i] >= '0' && string[i] <= '9') {

      const digit = string[i].charCodeAt(0) - '0'.charCodeAt(0);

      result = result * 10 + digit

    }
    // else if (result > (2 ** 31) || result < -(2 ** 31)) {

    // return sign === 1 ? (2 ** 31) - 1 : -(2 ** 31)

    // } 
    else if (isNaN(parseInt(string[i]))) {
      break;

    }
  }
  return result * sign;
}

let testcase = '0-1';

console.log(myAtoi(testcase))