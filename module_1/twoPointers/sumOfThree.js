// Using Two Pointer + Current Pointer
// Use Sort built-in Array method to sort array in ascending order
// Create 2 variables, Low, High
// -- *Low must be offset from Current
// Current is Represented by the Outer Nested Loop Idex
// IF 3 Values are > target, decrement High
// IF 3 Values are < target, increment Low
// Check if Target Found Return True
// ELSE Increment Current
// Return False


const sumOfThree = (nums, target) => {

  nums.sort((a, b) => {
    return a - b;
  })

  for (let i = 0; i < nums.length; i++) {
    let low = i + 1;
    let high = nums.length - 1;

    while (low < high) {
      let sum = nums[i] + nums[low] + nums[high];

      if (sum === target) {
        return true;
      } else if (sum < target) {
        low++;
      } else {
        high--;
      }
    }
  }
  return false
}


let testcase = []

console.log(sumOfThree(testcase));