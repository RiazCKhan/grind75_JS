// Using two pointers
/* 
Width = Get the distance between the two values in the array
Multiply the lesser of the two numbers by the distance, save result
If result is larger than previous overwrite result with new max
return max
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

    }
    else {

      value = height[left] * width;

    }

    if (value > max) {
      max = value;
    }

    left++;
    right--;
  }

  return max;
}


let testcase = [1, 8, 6, 2, 5, 4, 8, 3, 7]


console.log(containerWithMostWater(testcase));

// [1, 8, 6, 2, 5, 4, 8, 3, 7]
// [2,8,6,3,5,4,7]
// [1,5]