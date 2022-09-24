import { UnitTests, Test } from "../Utils/Test.js";

/**
 * You are given an integer array cost where cost[i] is the cost of ith step on a staircase.
 * Once you pay the cost, you can either climb one or two steps.
 * You can either start from the step with index 0, or the step with index 1.
 * Return the minimum cost to reach the top of the floor.
 *
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  cost.push(0);
  //set ending spot as 0
  // start at n-1 since n will be the same
  // [ . . . n - 1, n, 0]
  for (let i = cost.length - 3; i >= 0; i--) {
    let stepOne = cost[i] + cost[i + 1];
    let stepTwo = cost[i] + cost[i + 2];
    cost[i] = stepTwo <= stepOne ? stepTwo : stepOne;
  }

  return cost[0] < cost[1] ? cost[0] : cost[1];
};

let testsToRun = [
  new Test({
    expected: 15,
    args: [[10, 15, 20]],
  }), // 0 30 conflicts with all others
  new Test({
    expected: 6,
    args: [[1, 100, 1, 1, 1, 100, 1, 1, 100, 1]],
  }),
  new Test({
    expected: 2,
    args: [[0, 2, 2, 1]],
  }),
];
const test = new UnitTests(minCostClimbingStairs, testsToRun);
test.run();
