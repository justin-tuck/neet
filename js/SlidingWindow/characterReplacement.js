import { UnitTests, Test } from "../Utils/Test.js";

/**
 * You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
 * Return the length of the longest substring containing the same letter you can get after performing the above operations.
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let charMap = new Map([
    ["A", 0],
    ["B", 0],
    ["C", 0],
    ["D", 0],
    ["E", 0],
    ["F", 0],
    ["G", 0],
    ["H", 0],
    ["I", 0],
    ["J", 0],
    ["K", 0],
    ["L", 0],
    ["M", 0],
    ["N", 0],
    ["O", 0],
    ["P", 0],
    ["Q", 0],
    ["R", 0],
    ["S", 0],
    ["T", 0],
    ["U", 0],
    ["V", 0],
    ["W", 0],
    ["X", 0],
    ["Y", 0],
    ["Z", 0],
  ]);
  let [l, r] = [0, 0];
  let str = [...s];
  let result = 0;
  let max = 0; //keep track of max value
  let length = 1;
  increaseCharSetMax(str[r]); // set the first val
  while (r < str.length) {
    //check if valid (length -max >= k
    if (length - max <= k) {
      //check if result is larger
      if (length > result) {
        result = length;
      }

      moveRight();
    } else {
      //if not valid move left pointer
      moveLeft();
    }
  }

  function moveRight() {
    r++;
    increaseCharSetMax(str[r]); // set new val
    length++;
  }

  function moveLeft() {
    decreaseChar(str[l]);
    l++;
    length--;
  }

  function increaseCharSetMax(char) {
    let amount = charMap.get(char) + 1;
    charMap.set(char, amount);
    if (amount > max) max = amount;
  }

  function decreaseChar(char) {
    let amount = charMap.get(char) - 1;
    charMap.set(char, amount);
  }

  return result;
};

let testsToRun = [
  new Test({ expected: 4, args: ["ABAB", 2] }),
  new Test({ expected: 4, args: ["AABABBA", 1] }),
];
const test = new UnitTests(characterReplacement, testsToRun);
test.run();
