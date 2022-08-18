import { UnitTests, Test } from "../Utils/Test.js";

/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  //if string is odd it can not be valid
  if (s.length % 2 != 0) {
    return false;
  }

  let stack = [];

  for (const char of s) {
    switch (char) {
      case ")":
        if (stack.pop() !== "(") {
          return false;
        }
        break;
      case "}":
        if (stack.pop() !== "{") {
          return false;
        }
        break;
      case "]":
        if (stack.pop() !== "[") {
          return false;
        }
        break;
      default:
        stack.push(char);
    }
  }

  return stack.length === 0;
};

let testsToRun = [
  new Test({ result: true, args: ["()"] }),
  new Test({ result: true, args: ["()[]{}"] }),
  new Test({ result: false, args: ["(]"] }),
  new Test({ result: false, args: ["["] }),
];
const test = new UnitTests(isValid, testsToRun);
test.run();
