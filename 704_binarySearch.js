// Given an array of integers nums which is sorted in ascending order,
// and an integer target,
// write a function to search target in nums.
// If target exists, then return its index.
// Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

const nums = [-1, 0, 3, 5, 9, 12]
const target = 9

search(nums, target)

function search(nums, target) {
  let start = 0
  let end = nums.length - 1
  while (start <= end) {
    let mid = Math.floor((end + start) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return -1
}
