import { UnitTests, Test } from "../Utils/Test.js";

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let total = 0;
  if (height.length < 3) return total; // can't trap water
  let [l, r] = [0, height.length - 1];
  let [leftMax, rightMax] = [height[l], height[r]];
  // walk through both ends of the array meeting at the middle
  while (l < r) {
    if (leftMax < rightMax) {
      l++;
      leftMax = Math.max(leftMax, height[l]);
      total += leftMax - height[l];
    } else {
      r--;
      rightMax = Math.max(rightMax, height[r]);
      total += rightMax - height[r];
    }
  }

  return total;
};

let testsToRun = [
  new Test({ expected: 0, args: [[0, 1]] }),
  new Test({ expected: 1, args: [[1, 0, 1]] }),
  new Test({ expected: 1, args: [[1, 0, 2, 1]] }),
  new Test({ expected: 1, args: [[3, 2, 1, 2, 1]] }),
  new Test({ expected: 6, args: [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]] }),
];
const test = new UnitTests(trap, testsToRun);
test.run();
