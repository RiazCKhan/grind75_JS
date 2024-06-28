// Using Two Pointers + Index Pointer
// Multply all values except Index Pointer
// Add to result array



const productExceptSelf = (arr) => {

  let pointer = 0;
  let index = 0
  let result = [];
  let value = 1;

  while (index <= arr.length - 1) {

    let temp = arr[index];
    arr[index] = 1;

    value = value * arr[pointer];

    if (pointer === arr.length - 1) {
      result.push(value)
      pointer = 0;
      arr[index] = temp;
      index++;
    }
    pointer++
  }
  return result;
}

let testcase = [2, 4, 3, -1, -2];

productExceptSelf(testcase);