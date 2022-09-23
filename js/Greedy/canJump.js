import { UnitTests, Test } from "../Utils/Test.js";

/**
 * You are given an integer array nums.
 * You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
 * Return true if you can reach the last index, or false otherwise.
 * https://leetcode.com/problems/jump-game/
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let goal = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= goal) {
      goal = i;
    }
  }

  return goal === 0 ? true : false;
};

let testsToRun = [
  new Test({
    expected: true,
    args: [[2, 3, 1, 1, 4]],
  }),
  new Test({
    expected: false,
    args: [[3, 2, 1, 0, 4]],
  }),
  new Test({
    expected: true,
    args: [[4, 2, 0, 0, 1, 1, 4, 4, 4, 0, 4, 0]],
  }),
];
const test = new UnitTests(canJump, testsToRun);
test.run();
