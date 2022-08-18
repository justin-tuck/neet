import { UnitTests, Test } from "../Utils/Test.js";

/**
 * Given an array of distinct integers candidates and a target integer target,
 *  return a list of all unique combinations of candidates where the chosen numbers sum to target.
 * You may return the combinations in any order.
 * The same number may be chosen from candidates an unlimited number of times.
 * Two combinations are unique if the frequency of at least one of the chosen numbers is different.
 * It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
 *
 *  2 decisions each time O(2^t) hight of the tree at most target
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = [];

  let dfs = (i, current, total) => {
    if (total === target) {
      result.push(current.slice());
      return;
    }

    if (i >= candidates.length || total > target) {
      return;
    }

    current.push(candidates[i]);
    dfs(i, current, total + candidates[i]);

    current.pop();
    dfs(i + 1, current, total);
  };

  dfs(0, [], 0);
  return result;
};

let testsToRun = [
  new Test({ expected: [[2, 2, 3], [7]], args: [[2, 3, 6, 7], 7] }),
  new Test({
    expected: [
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ],
    args: [[2, 3, 5], 8],
  }),
  new Test({ expected: [], args: [[2], 1] }),
];
const test = new UnitTests(combinationSum, testsToRun);
test.run();
