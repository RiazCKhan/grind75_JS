// Using Two Pointers + Index Pointer
// Multiply all elements EXCEPT arr[i]
// Start out of bounds


const productExceptSelf = (arr) => {

  let left = 0;
  let right = arr.length - 1

  let leftProduct = 1;
  let rightProduct = 1;

  let result = new Array(arr.length).fill(1)

  // This Loop condition is incorrect
  while (left < right) {

    // Need to better understand WHY the result * product occurs before the product * arr val
    result[left] *= leftProduct
    result[right] *= rightProduct

    leftProduct *= arr[left]
    rightProduct *= arr[right]


    left++
    right--
  }

  return result
}

let testcase = [2, 4, 3, -1, -2]; // Output -> [24, 12, 16, -48, -24]

console.log(productExceptSelf(testcase));