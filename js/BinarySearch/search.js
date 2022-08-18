import { UnitTests, Test } from "../Utils/Test.js";

/**
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.
 *  If target exists, then return its index. Otherwise, return -1.
 *  You must write an algorithm with O(log n) runtime complexity.
 *  @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (left === right && target === nums[left]) {
      return left;
    }
    let mid = Math.floor((right + left) / 2);
    let val = nums[mid];
    if (target === val) {
      return mid;
    } else if (target > val) {
      left = ++mid;
    } else {
      right = --mid;
    }
  }
  return -1;
};
let testsToRun = [
  new Test({ expected: 4, args: [[-1, 0, 3, 5, 9, 12], 9] }),
  new Test({ expected: -1, args: [[-1, 0, 3, 5, 9, 12], 2] }),
  new Test({ expected: 0, args: [[5], 5] }),
  new Test({ expected: 1, args: [[2, 5], 5] }),
];
const test = new UnitTests(search, testsToRun);
test.run();
