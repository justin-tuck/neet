import { UnitTests, Test } from "../Utils/Test.js";

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  //check if pivoted
  let left = 0;
  let right = nums.length - 1;
  let start = nums[0];
  if (start === target) return 0;
  let end = nums[right];
  if (end === target) return right;
  if (start > end) {
    while (left < right) {
      //find pivot
      let mid = ~~((left + right) / 2);
      if (nums[mid] === target) return mid;
      if (nums[mid] > end) {
        //shift left
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    //once left and right are equal we found it
    //now set new left and right
    if (target < end) {
      right = nums.length - 1;
    } else {
      left = 0;
    }
  }
  //binary search
  while (left <= right) {
    let mid = ~~((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      //shift left
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

let testsToRun = [
  new Test({ expected: 4, args: [[4, 5, 6, 7, 0, 1, 2], 0] }),
  new Test({ expected: -1, args: [[4, 5, 6, 7, 0, 1, 2], 3] }),
  new Test({ expected: -1, args: [[1], 0] }),
  new Test({ expected: 1, args: [[1, 3], 3] }),
];
const test = new UnitTests(search, testsToRun);
test.run();
