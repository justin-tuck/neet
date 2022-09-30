import { UnitTests, Test } from "../Utils/Test.js";

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {};

let testsToRun = [
  new Test({ expected: 0, args: [[0, 1]] }),
  new Test({ expected: 1, args: [[1, 0, 1]] }),
  new Test({ expected: 1, args: [[1, 0, 2, 1]] }),
  new Test({ expected: 1, args: [[3, 2, 1, 2, 1]] }),
  new Test({ expected: 6, args: [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]] }),
];
const test = new UnitTests(trap, testsToRun);
test.run();
