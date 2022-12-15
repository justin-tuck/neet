import { UnitTests, Test } from "../Utils/Test.js";

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  function swap(a, b) {
    let temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
  }

  function backtrack(first = 0) {
    // if all ints used up
    if (first === nums.length) {
      result.push([...nums]); //need a new array
    }

    for (let i = first; i < nums.length; i++) {
      // place the i-th int first
      // in the current permutation
      swap(first, i);

      //use next ints to complete the permutation
      backtrack(first + 1);

      //backtrack
      swap(first, i);
    }
  }

  let result = [];
  backtrack();

  return result;
};

let testsToRun = [
  new Test({
    expected: [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ],
    args: [[1, 2, 3]],
  }), // 0 30 conflicts with all others
  new Test({
    expected: [
      [0, 1],
      [1, 0],
    ],
    args: [[0, 1]],
  }),
  new Test({
    expected: [[1]],
    args: [[1]],
  }),
];
const test = new UnitTests(permute, testsToRun);
test.run();
