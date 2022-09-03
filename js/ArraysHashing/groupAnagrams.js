import { UnitTests, Test } from "../Utils/Test.js";

/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let resultMap = new Map();
  let result = [];
  for (let i = 0; i < strs.length; i++) {
    //first sort the string
    let sorted = strs[i].split("").sort().join("");
    // then place in map
    if (!resultMap.has(sorted)) {
      //set index in array
      let spot = result.length;
      resultMap.set(sorted, spot);
      result[spot] = [strs[i]];
    } else {
      result[resultMap.get(sorted)].push(strs[i]);
    }
  }

  return result;
};

let testsToRun = [
  new Test({
    expected: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
    args: [["eat", "tea", "tan", "ate", "nat", "bat"]],
  }),
  new Test({ expected: [[""]], args: [[""]] }),
  new Test({ expected: [["a"]], args: ["a"] }),
];
const test = new UnitTests(groupAnagrams, testsToRun);
test.run();
