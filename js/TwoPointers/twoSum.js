import { UnitTests, Test } from "../Utils/Test.js";

/**
 *
 * @param {number[]} numbers
 * @param {number} target
 */
var twoSum = function (numbers, target) {
  let [l, r] = [0, numbers.length - 1];

  //find good r starting spot

  while (l < r) {
    let summation = numbers[l] + numbers[r];
    if (summation === target) return [l + 1, r + 1];
    if (summation > target) r--;
    else l++;
  }
};

let testsToRun = [
  new Test({ expected: [1, 2], args: [[2, 7, 11, 15], 9] }),
  new Test({ expected: [1, 3], args: [[2, 3, 4], 6] }),
  new Test({ expected: [1, 2], args: [[-1, 0], -1] }),
  new Test({ expected: [3, 4], args: [[-1000, -1, 0, 1], 1] }),
];
const test = new UnitTests(twoSum, testsToRun);
test.run();
