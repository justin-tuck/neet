import { UnitTests, Test } from "../Utils/Test.js";

/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length != t.length) {
    return false;
  }

  let sMap = new Map();
  let tMap = new Map();
  for (let i = 0; i < s.length; i++) {
    let sLetter = s.charAt(i);
    let tLetter = t.charAt(i);
    addLetterToMap(sLetter, sMap);
    addLetterToMap(tLetter, tMap);
  }
  if (sMap.size != tMap.size) {
    return false;
  }

  for (const [key, sValue] of sMap) {
    let tValue = tMap.get(key);
    if (sValue != tValue) {
      return false;
    }
  }

  return true;
};

/**
 *
 * @param {char} letter
 * @param {Map} map
 */
let addLetterToMap = function (letter, map) {
  let value = 1;
  if (map.has(letter)) {
    value = map.get(letter);
    value++;
  }
  map.set(letter, value);
};

let testsToRun = [
  new Test({ result: true, args: ["anagram", "nagaram"] }),
  new Test({ result: false, args: ["rat", "car"] }),
];
const test = new UnitTests(isAnagram, testsToRun);
test.run();
