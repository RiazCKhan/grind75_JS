// Write basic binary search -> modify based on rotate condition
// Check if the first half of the array is sorted
// Check if the target is within the first half of the sorted array
// If both conditions are true, increment and decrement start/end until target is found
// ELSE perform the same steps for the second hald of the array


// To be solved -- must understand conditional operators
const binarySearchRotated = (nums, target) => {

  let start = 0
  let end = nums.length - 1

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)

    if (nums[mid] === target) {
      return mid
    }

    // The first half of the array is sorted
    if (nums[mid] >= nums[start]) {
      // If the target falls within the range of the first sorted half of the array
      if (nums[start] <= target && target <= nums[mid]) {

        // Note: what decides the start++ and the end-- ???
        start = mid + 1
      } else {
        end = mid - 1
      }
    }
    // The second half of the array is sorted
    else if (nums[mid] <= nums[end]) {
      // if the target falls within the range of the second sorted half of the array
      if (nums[mid] <= target && target <= nums[end]) {

        // Note: what decides the start++ and the end-- ???
        start = mid + 1
      } else {
        end = mid - 1
      }
    }
  }
  return -1
}


console.log(binarySearchRotated([4, 5, 6, 1, 2, 3], 3))