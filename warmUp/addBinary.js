const addBinary = (str1, str2) => {

  let result = []; // [0, 0, 0]
  let carry = 0; // 1 -> 1 -> 1

  let pointerOne = str1.length - 1; // 2 -> 1 -> 0
  let pointerTwo = str2.length - 1; // 1 -> 0 -> undefined?

  while (pointerOne >= 0 || pointerTwo >= 0) {

    let digitOne = 0;
    let digitTwo = 0;

    if (pointerOne >= 0) {
      digitOne = parseInt(str1[pointerOne]); // 1 -> 0 -> 1
    } else {
      digitOne = 0;
    }

    if (pointerTwo >= 0) {
      digitTwo = parseInt(str2[pointerTwo]); // 1 -> 1 -> 0
    } else {
      digitTwo = 0;
    }


    let totalSum = digitOne + digitTwo + carry
    // 1 + 1 + 0 = 2
    // 0 + 1 + 1 = 2
    // 1 + 0 + 1 = 2
    let currentDigit = totalSum % 2
    // 2 % 2 = 0
    // 2 % 2 = 0
    // 2 % 2 = 0
    carry = Math.floor(totalSum / 2)
    // 2 / 2 = 1
    // 2 / 2 = 1
    // 2 / 2 = 1

    result.push(currentDigit)


    pointerOne = pointerOne - 1;
    pointerTwo = pointerTwo - 1;
  }

  if (carry) result.push(carry)

  result.reverse()
  return result.join('')

}

console.log(addBinary('101', '11'))

