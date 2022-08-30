import { UnitTests, Test } from "../Utils/Test.js";

/**
 * Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window.
 * If there is no such substring, return the empty string "".
 * The testcases will be generated such that the answer is unique.
 * A substring is a contiguous sequence of characters within the string.
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  //populate hash tables
  let need = new Map();
  let want = new Map();
  let totalWindow = 0;
  let totalNeeded = [...new Set(t)].length;
  for (let i = 0; i < t.length; i++) {
    need.set(t[i], need.has(t[i]) ? need.get(t[i]) + 1 : 1);
    want.set(t[i], 0);
  }

  let l = 0;
  let r = 0;
  let result = "";

  while (r < s.length) {
    let char = s.charAt(r);
    if (need.has(char)) {
      want.set(char, want.get(char) + 1);
      if (need.get(char) === want.get(char)) {
        totalWindow++;
      }
    }
    r++;

    while (totalNeeded === totalWindow) {
      // then pop from the back
      let substring = s.slice(l, r);
      if (result.length === 0) {
        result = substring;
      } else {
        result = substring.length < result.length ? substring : result;
      }

      let remove = s.charAt(l);
      if (want.has(remove)) {
        want.set(remove, want.get(remove) - 1);
        if (want.get(remove) < need.get(remove)) {
          totalWindow--;
        }
      }
      l++;
    }
  }
  return result;
};

let testsToRun = [
  new Test({ expected: "BANC", args: ["ADOBECODEBANC", "ABC"] }),
  new Test({ expected: "a", args: ["a", "a"] }),
  new Test({ expected: "", args: ["a", "aa"] }),
  new Test({ expected: "aa", args: ["aa", "aa"] }),
];
const test = new UnitTests(minWindow, testsToRun);
test.run();
