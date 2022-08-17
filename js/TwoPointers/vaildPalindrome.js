import { UnitTests, Test } from "../Utils/Test.js";

/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
 *  it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 *  Given a string s, return true if it is a palindrome, or false otherwise.
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase();
  s = s.replace(/[^a-z0-9]/g, "");
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s.charAt(l) !== s.charAt(r)) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};

let testsToRun = [
  new Test({ result: true, args: ["A man, a plan, a canal: Panama"] }),
  new Test({ result: false, args: ["race a car"] }),
  new Test({ result: true, args: [" "] }),
  new Test({ result: false, args: ["0P"] }),
];
const test = new UnitTests(isPalindrome, testsToRun);
test.run();
