// Given a sorted array of integers and a target value,
// return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const searchInsert = function (nums, target) {
  let start = 0
  let end = nums.length
  console.log('iteration', { start, end })
  while (start <= end) {
    let mid = Math.ceil((start + end) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      start = mid + 1
      console.log('iteration <', { start, end })
    } else {
      end = mid - 1
      console.log('iteration >', { start, end })
    }
  }
  return end + 1
}

const arr = [-5, 3, 5, 6]
const result = searchInsert(arr, -4)
console.log(result)
