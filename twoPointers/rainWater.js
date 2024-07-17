// Initialize two pointers, left and right to iterate the given array

// Iterate the array and at each iteration based on the lower maximum height
// among the two sides, start computing the amount of rain water that can be trapped

// For each bar in the heights array, find the difference between the maximum height 
// of that side and the current bar's height

// Add this amount o the stored Water variable and update the maximum of the respective side to 
// ensure the correct calculation for the subsequent iterations

// Repeat this process until left becomes greater than right
// Return the cumulative sum stored in the stored water variable

const rainWater = (heights) => {

  let left = 0
  let right = heights.length - 1

  let leftMax = 0;
  let rightMax = 0;
  let trappedWater = 0;

  while (left <= right) {
    if (leftMax >= rightMax) {
      rightMax = Math.max(rightMax, heights[right])
      trappedWater += Math.max(0, (rightMax - heights[right]))
      right--
    } else {
      leftMax = Math.max(leftMax, heights[left])
      trappedWater += Math.max(0, (leftMax - heights[left]))
      left++
    }
  }

  return trappedWater
}

let testcase = [4, 2, 1, 3, 1]
rainWater(testcase)