// 977. Squares of a Sorted Array
// Given an integer array nums sorted in non - decreasing order,
// return an array of the squares of each number sorted in non - decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

// Follow up: Squaring each element and sorting the new array is very trivial,
// could you find an O(n) solution using a different approach?

/**
 * @param {number[]} nums
 * @return {number[]}
 */

const sortedSquares = function (nums) {
  const squaredNums = []
  const square = function (number) {
    return number * number
  }
  const searchInsert = function (nums, target) {
    let start = 0
    let end = nums.length
    while (start <= end) {
      let mid = Math.ceil((start + end) / 2)
      if (nums[mid] === target) {
        return mid
      } else if (nums[mid] < target) {
        start = mid + 1
      } else {
        end = mid - 1
      }
    }
    return end + 1
  }
  const fillArray = nums.map((el, index) => {
    let elSquared = square(el)
    if (!index) {
      squaredNums.push(elSquared)
    } else if (elSquared > squaredNums[squaredNums.length - 1]) {
      squaredNums.push(elSquared)
    } else {
      squaredNums.splice(searchInsert(squaredNums, elSquared), 0, elSquared)
    }
  })

  return squaredNums
}

const nums = [-4, -1, 0, 3, 10]
console.log(nums)
console.log(sortedSquares(nums))
