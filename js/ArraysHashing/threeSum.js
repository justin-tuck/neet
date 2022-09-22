import { UnitTests, Test } from "../Utils/Test.js";

/**
 * Given an integer array nums, return all the triplets
 *  [nums[i], nums[j], nums[k]] 
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);

  for (const [i, a] of nums.entries()) {
    if (i > 0 && a === nums[i - 1]) continue;

    let [l, r] = [i + 1, nums.length - 1];
    while (l < r) {
      let sum = a + nums[l] + nums[r];
      if (sum > 0) {
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        res.push([a, nums[l], nums[r]]);
        l++;
        while (nums[l] === nums[l - 1] && l < r) l++;
      }
    }
  }
  return res;
};

var threeSumOG = function (nums) {
  let result = [];
  let mapChecker = new Map();
  //first sort - O (nlogn)
  nums.sort((a, b) => a - b);

  //then walk through each element and compare O(n ^2)
  let a = 0;

  while (a < nums.length - 1 && nums[a] < 1) {
    let left = a + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[a] + nums[left] + nums[right];
      if (sum === 0) {
        if (!mapChecker.has(`${nums[a]}, ${nums[left]}, ${nums[right]}`)) {
          result.push([nums[a], nums[left], nums[right]]);
          mapChecker.set(`${nums[a]}, ${nums[left]}, ${nums[right]}`, true);
        }
      }

      if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }

    //Increase a till we get a new number
    a++;
    while (a < nums.length - 1 && nums[a - 1] === nums[a]) {
      a++;
    }
  }
  return result;
};

let testsToRun = [
  new Test({
    expected: [
      [-1, -1, 2],
      [-1, 0, 1],
    ],
    args: [[-1, 0, 1, 2, -1, -4]],
  }),
  new Test({ expected: [], args: [[0, 1, 1]] }),
  new Test({ expected: [[0, 0, 0]], args: [[0, 0, 0]] }),
  new Test({ expected: [[0, 0, 0]], args: [[0, 0, 0, 0]] }),
];
const test = new UnitTests(threeSum, testsToRun);
test.run();
