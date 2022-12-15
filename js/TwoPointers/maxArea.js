import { UnitTests, Test } from "../Utils/Test.js";

/**
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 * Return the maximum amount of water a container can store.
 * Notice that you may not slant the container.
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
