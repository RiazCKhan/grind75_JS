// Using two pointers
/* 
- width = Get the distance between the two values in the array
- Multiply the lesser of the two numbers by the distance (width), save result (value)
KEY NOTE:
- Move the pointer pointing to the shorter vertical line inward by one step. 
    This is because if we try to move the pointer at the longer vertical line, 
    we won’t gain any increase in area, since the shorter line limits it.
- If result (value) is larger than previous overwrite result with new max
- return max

*/

const containerWithMostWater = (height) => {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    let width = right - left;
    let value = 0;

    if (height[left] > height[right]) {
      value = height[right] * width;
      right--;
    } else {
      value = height[left] * width;
      left++;
    }

    if (value > max) max = value
  }

  return max;
}


let testcase = [1, 8, 6, 2, 5, 4, 8, 3, 7]


console.log(containerWithMostWater(testcase));

// [1, 8, 6, 2, 5, 4, 8, 3, 7]
// [2,8,6,3,5,4,7]
// [1,5]