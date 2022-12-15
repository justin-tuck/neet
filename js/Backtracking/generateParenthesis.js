import { UnitTests, Test } from "../Utils/Test.js";

/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 https://leetcode.com/problems/generate-parentheses/
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let result = [];
  function buildString(sArray) {
    let str = "";
    for (let i = 0; i < sArray.length; i++) {
      str += sArray[i];
    }
    return str;
  }

  function backtrack(s = [], left = 0, right = 0) {
    if (s.length === 2 * n) {
      result.push(buildString(s));
      return;
    }
    if (left < n) {
      s.push("(");
      backtrack(s, left + 1, right);
      s.pop();
    }
    if (right < left) {
      s.push(")");
      backtrack(s, left, right + 1);
      s.pop();
    }
  }
  backtrack();
  return result;
};

let testsToRun = [
  new Test({
    expected: ["((()))", "(()())", "(())()", "()(())", "()()()"],
    args: [3],
  }),
  new Test({ expected: ["()"], args: [1] }),
  new Test({ expected: ["(())", "()()"], args: [2] }),
];
const test = new UnitTests(generateParenthesis, testsToRun);
test.run();
