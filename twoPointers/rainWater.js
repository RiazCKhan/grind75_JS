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



}

let testcase = [0, 1, 3, 1, 0, 1, 4, 0, 2]
console.log(rainWater(testcase))