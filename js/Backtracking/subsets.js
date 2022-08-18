import { UnitTests, Test } from "../Utils/Test.js";

/**
 * Given an integer array nums of unique elements, return all possible subsets (the power set).
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 *
 * Need to brute force this since we need all the results
 * Using backtracking by depth first search. walking through n with 2 options of each value so O(n * 2^n )
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = [];

  let subset = [];
  let dfs = (i) => {
    if (i >= nums.length) {
      result.push(subset.slice());
      return;
    }
    // decision to include nums[i]
    subset.push(nums[i]);
    dfs(i + 1);

    // decision to not include nums[i]
    subset.pop();
    dfs(i + 1);
  };

  dfs(0);
  return result;
};

let testsToRun = [
  new Test({
    expected: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]],
    args: [[1, 2, 3]],
  }),
  new Test({ expected: [[], [0]], args: [[0]] }),
];
const test = new UnitTests(subsets, testsToRun);
test.run();
