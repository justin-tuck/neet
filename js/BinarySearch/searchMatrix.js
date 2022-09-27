import { UnitTests, Test } from "../Utils/Test.js";

var searchMatrix = function (matrix, target) {
  let [ROWS, COLS] = [matrix.length - 1, matrix[0].length - 1];
  //Binary search columns to see which row to search
  let l = 0;
  let r = ROWS;
  while (l <= r) {
    let mid = ~~((l + r) / 2);
    let lower = matrix[mid][0];
    let upper = matrix[mid][COLS];
    if (lower === target || upper === target) return true;
    if (lower < target && target < upper) return searchRow(matrix[mid]);
    //keep searching
    if (target < lower) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  function searchRow(row) {
    let l = 0;
    let r = COLS;

    while (l <= r) {
      let mid = ~~((l + r) / 2);
      let val = row[mid];
      if (val === target) return true;

      if (target < val) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    return false;
  }

  return false;
};

let testsToRun = [
  new Test({
    expected: true,
    args: [
      [
        [1, 2, 3, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ],
      3,
    ],
  }),
  new Test({
    expected: false,
    args: [
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ],
      13,
    ],
  }),
  new Test({
    expected: true,
    args: [
      [
        [-8, -7, -5, -3, -3, -1, 1],
        [2, 2, 2, 3, 3, 5, 7],
        [8, 9, 11, 11, 13, 15, 17],
        [18, 18, 18, 20, 20, 20, 21],
        [23, 24, 26, 26, 26, 27, 27],
        [28, 29, 29, 30, 32, 32, 34],
      ],
      -5,
    ],
  }),
];
const test = new UnitTests(searchMatrix, testsToRun);
test.run();
