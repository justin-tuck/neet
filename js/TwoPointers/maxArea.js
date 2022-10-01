import { UnitTests, Test } from "../Utils/Test.js";

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // have a left and right pointer and distance
  let [l, r, d] = [0, height.length - 1, height.length - 1];
  //keeping track of the max
  let max = 0;

  function calcAreaSetMax(h) {
    let temp = h * d;
    if (temp > max) max = temp;
  }
  // walk through each giving up the lowest wall
  while (l < r) {
    if (height[l] < height[r]) {
      calcAreaSetMax(height[l]);
      l++;
    } else {
      calcAreaSetMax(height[r]);
      r--;
    }
    d--;
  }

  return max;
};

let testsToRun = [
  new Test({ expected: 49, args: [[1, 8, 6, 2, 5, 4, 8, 3, 7]] }),
  new Test({ expected: 1, args: [[1, 1]] }),
];
const test = new UnitTests(maxArea, testsToRun);
test.run();
