const addBinary = (str1, str2) => {
  let result = [];
  let carry = 0;

  let pointerOne = str1.length - 1;
  let pointerTwo = str2.length - 1;

  while (pointerOne >= 0 || pointerTwo >= 0) {

    let digitOne = pointerOne >= 0 ? parseInt(str1[pointerOne]) : 0
    let digitTwo = pointerTwo >= 0 ? parseInt(str2[pointerTwo]) : 0

    let totalSum = digitOne + digitTwo + carry
    let currentDigit = totalSum % 2

    carry = Math.floor(totalSum / 2)
    result.push(currentDigit)

    pointerOne = pointerOne - 1;
    pointerTwo = pointerTwo - 1;
  }

  if (carry) result.push(carry)

  return result.reverse().join('')

}

addBinary('101', '11')

