import { UnitTests, Test } from "../Utils/Test.js";

/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function (strs) {
  let result = "";
  for (let i = 0; i < strs.length; i++)
    result += `${strs[i]}${i !== strs.length - 1 ? "{-item-}" : ""}`;

  return result;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function (s) {
  return s.split("{-item-}");
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

let testsToRun = [
  new Test({
    expected: ["Hello", "World"],
    args: [["Hello", "World"]],
  }),
  new Test({ expected: [[""]], args: [[""]] }),
  new Test({ expected: [["a"]], args: ["a"] }),
];
const test = new UnitTests((args) => {
  return decode(encode(args));
}, testsToRun);
test.run();
