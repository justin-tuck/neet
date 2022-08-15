import { UnitTests, Test } from "../Utils/Test.js";

/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// O(n^2)
// should re-write this to run in n time using hashmap and subtracting to look for expected value
var twoSumBrute = function (nums, target) {
  // need to clone first
  let numsClone = nums.slice();
  //First sort
  nums.sort((a, b) => a - b);

  //Then binary search  by starting the middle and seeing which is larger
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let first = nums[i];
      let second = nums[j];
      if (first + second === target) {
        let fromIndex = 0;
        let firstIndex = numsClone.indexOf(first);
        if (first === second) {
          fromIndex = firstIndex + 1;
        }
        return [firstIndex, numsClone.indexOf(second, fromIndex)];
      }
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i])) {
      let val = map.get(nums[i]);
      map.set(nums[i], val + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  let first;
  let second;
  for (let i = 0; i < nums.length; i++) {
    first = nums[i];
    let diff = target - first;
    if (diff !== first) {
      if (map.get(diff)) {
        second = diff;
        break;
      }
    } else {
      if (map.get(diff) > 1) {
        second = diff;
        break;
      }
    }
  }

  let fromIndex = 0;
  let firstIndex = nums.indexOf(first);
  if (first === second) {
    fromIndex = firstIndex + 1;
  }
  return [firstIndex, nums.indexOf(second, fromIndex)];
};

let testsToRun = [
  new Test({ result: [0, 1], args: [[2, 7, 11, 15], 9] }),
  new Test({ result: [1, 2], args: [[3, 2, 4], 6] }),
  new Test({ result: [0, 1], args: [[3, 3], 6] }),
  new Test({ result: [2, 4], args: [[-1, -2, -3, -4, -5], -8] }),
  new Test({ result: [0, 2], args: [[-10, 7, 19, 15], 9] }),
  new Test({ result: [3, 4], args: [[2, 1, 9, 4, 4, 56, 90, 3], 8] }),
];
const test = new UnitTests(twoSum, testsToRun);
test.run();
