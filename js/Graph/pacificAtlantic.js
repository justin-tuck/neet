import { UnitTests, Test } from "../Utils/Test.js";

//Brute force O((n*m)^2)
// check each cell and see if it can reach the pacific and atlantic
/**
 * There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.
 * The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).
 * The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.
 * Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.
 * @param {number[][]} heights
 * @return {number[][]}
 */
//dfs through sells of equal or increasing hight
function pacificAtlantic(heights) {
  const [ROWS, COLS] = [heights.length, heights[0].length];
  let [pac, atl] = [new Map(), new Map()];

  function dfs(r, c, visit, prevHeight) {
    let key = r + "," + c;
    if (
      visit.has(key) ||
      r < 0 ||
      c < 0 ||
      r === ROWS ||
      c === COLS ||
      heights[r][c] < prevHeight
    )
      return;

    visit.set(key, [r, c]);
    //dfs each direction
    dfs(r + 1, c, visit, heights[r][c]);
    dfs(r - 1, c, visit, heights[r][c]);
    dfs(r, c + 1, visit, heights[r][c]);
    dfs(r, c - 1, visit, heights[r][c]);
  }

  for (let c = 0; c < COLS; c++) {
    //walk through pacific
    dfs(0, c, pac, heights[0][c]);
    //walk through atlantic
    dfs(ROWS - 1, c, atl, heights[ROWS - 1][c]);
  }

  for (let r = 0; r < ROWS; r++) {
    //walk through pacific
    dfs(r, 0, pac, heights[r][0]);
    //walk through atlantic
    dfs(r, COLS - 1, atl, heights[r][COLS - 1]);
  }

  let result = [];
  //loop through each value and see if it is in both
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      let key = r + "," + c;
      if (atl.has(key) && pac.has(key)) result.push([r, c]);
    }
  }
  return result;
}

let testsToRun = [
  new Test({
    expected: [
      [0, 4],
      [1, 3],
      [1, 4],
      [2, 2],
      [3, 0],
      [3, 1],
      [4, 0],
    ],
    args: [
      [
        [1, 2, 2, 3, 5],
        [3, 2, 3, 4, 4],
        [2, 4, 5, 3, 1],
        [6, 7, 1, 4, 5],
        [5, 1, 1, 2, 4],
      ],
    ],
  }),
];
const test = new UnitTests(pacificAtlantic, testsToRun);
test.run();
