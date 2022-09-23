import { UnitTests, Test } from "../Utils/Test.js";

/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * A subarray is a contiguous part of an array.
 * https://leetcode.com/problems/maximum-subarray/
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];
  let [left, right] = [0, 1];
  let max = nums[left];
  let sum = nums[left];
  while (right < nums.length) {
    if (sum < 0) {
      left = right;
      sum = nums[left];
      if (sum > max) {
        max = sum;
      }
    } else {
      sum += nums[right];
      if (sum > max) {
        max = sum;
      }
    }

    right++;
  }
  return max;
};

let testsToRun = [
  new Test({
    expected: 6,
    args: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]],
  }),
  new Test({
    expected: 1,
    args: [[1]],
  }),
  new Test({
    expected: 23,
    args: [[5, 4, -1, 7, 8]],
  }),
];
const test = new UnitTests(maxSubArray, testsToRun);
test.run();
