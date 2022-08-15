import { UnitTests, Test } from "../Utils/Test.js";

/**
 * Given an integer array nums,
 * return true if any value appears at least twice in the array,
 *  and return false if every element is distinct.
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return true;
    }
    map.set(nums[i], 1);
  }
  return false;
};

let testsToRun = [
  new Test({ result: true, args: [[1, 2, 3, 1]] }),
  new Test({ result: false, args: [[1, 2, 3, 4]] }),
];
const test = new UnitTests(containsDuplicate, testsToRun);
test.run();
