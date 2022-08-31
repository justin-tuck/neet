import { UnitTests, Test } from "../Utils/Test.js";
import { Queue } from "../AlgorithmDesign/DataStructures/Queue.js";
/**
 * You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.
 * The area of an island is the number of cells with a value 1 in the island.
 * Return the maximum area of an island in grid. If there is no island, return 0.
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let visited = new Set();
  let maxArea = 0;
  const numOfRows = grid.length;
  const numOfCols = grid[0].length;
  let dfs = (row, col) => {
    if (
      row < 0 ||
      row >= numOfRows ||
      col < 0 ||
      col >= numOfCols ||
      visited.has(row + "" + col) ||
      grid[row][col] === 0
    ) {
      return 0;
    }
    visited.add(row + "" + col);
    let count = 1;
    count += dfs(row + 1, col);
    count += dfs(row, col + 1);
    count += dfs(row - 1, col);
    count += dfs(row, col - 1);

    return count;
  };

  for (let r = 0; r < numOfRows; r++)
    for (let c = 0; c < numOfCols; c++) {
      if (grid[r][c] === 1) {
        let landSize = dfs(r, c);
        maxArea = landSize > maxArea ? landSize : maxArea;
      }
    }
  return maxArea;
};

let testsToRun = [
  new Test({
    expected: 2,
    args: [[[0, 0, 1, 0, 1, 1]]],
  }),
  new Test({
    expected: 6,
    args: [
      [
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      ],
    ],
  }),
  new Test({
    expected: 0,
    args: [[[0, 0, 0, 0, 0, 0, 0, 0]]],
  }),
];
const test = new UnitTests(maxAreaOfIsland, testsToRun);
test.run();
