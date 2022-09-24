import { UnitTests, Test } from "../Utils/Test.js";

/**
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  //array to contain previous solutions
  let dp = [];

  let dfs = (i) => {
    if (dp[i]) return dp[i];
    if (i === n) return 1;
    if (i > n) return 0;

    let one = dfs(i + 1);
    let two = dfs(i + 2);
    //add to our dp
    dp[i] = one + two;

    return one + two;
  };

  return dfs(0);
};

/* bottom up DP 
  0 1 2 3 4 5 
  8 5 3 2 1 1 
*/
var climbStairsFib = function (n) {
  let [one, two] = [1, 1];

  for (let i = 2; i <= n; i++) {
    let temp = one;
    one = one + two;
    two = temp;
  }

  return one;
};

let testsToRun = [
  new Test({
    expected: 2,
    args: [2],
  }), // 0 30 conflicts with all others
  new Test({
    expected: 3,
    args: [3],
  }),
  new Test({
    expected: 5,
    args: [4],
  }),
];
const test = new UnitTests(climbStairs, testsToRun);
test.run();
