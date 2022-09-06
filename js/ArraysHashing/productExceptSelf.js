import { UnitTests, Test } from "../Utils/Test.js";

/**
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 * @param {number[]} nums
 */
var productExceptSelf = function (nums) {
  //Prefix and Postfix
  // store all the prefix values in array
  // then store all the postfix values in the array to get the result
  //Prefix pass
  let output = new Array(nums.length).fill(1);
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    output[i] = prefix;
    prefix *= nums[i];
  }

  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= postfix;
    postfix *= nums[i];
  }
  return output;
};

let testsToRun = [
  new Test({ expected: [24, 12, 8, 6], args: [[1, 2, 3, 4]] }),
  new Test({ expected: [0, 0, 9, 0, 0], args: [[-1, 1, 0, -3, 3]] }),
];
const test = new UnitTests(productExceptSelf, testsToRun);
test.run();
