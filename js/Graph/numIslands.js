import { UnitTests, Test } from "../Utils/Test.js";
import { Queue } from "../AlgorithmDesign/DataStructures/Queue.js";
/**
 * @param {character[][]} grid
 * @return {number}
//  */
// var numIslands = function (grid) {
//   if (!grid) return 0;
//   let [rows, cols] = [grid.length, grid[0].length];
//   let visit = new Set();
//   let islands = 0;

//   let bfs = (r, c) => {
//     let q = new Queue();
//     visit.add(r + "" + c);
//     q.enqueue([r, c]);
//     while (q.size > 0) {
//       let [row, col] = q.dequeue();
//       let directions = [
//         [1, 0],
//         [-1, 0],
//         [0, 1],
//         [0, -1],
//       ];
//       for (const [dr, dc] of directions) {
//         let x = row + dr;
//         let y = col + dc;
//         if (
//           x < rows &&
//           x >= 0 &&
//           y < cols &&
//           y >= 0 &&
//           grid[x][y] == "1" &&
//           !visit.has(x + "" + y)
//         ) {
//           q.enqueue([x, y]);
//           visit.add(x + "" + y);
//         }
//       }
//     }
//   };

//   for (let r = 0; r < rows; r++) {
//     for (let c = 0; c < cols; c++) {
//       if (grid[r][c] === "1" && !visit.has(r + "" + c)) {
//         bfs(r, c);
//         islands++;
//       }
//     }
//   }
//   return islands;
// };

//* WORKING
function dfs(grid, i, j) {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[0].length ||
    grid[i][j] === "0"
  ) {
    return;
  }

  grid[i][j] = "0";
  dfs(grid, i + 1, j);
  dfs(grid, i - 1, j);
  dfs(grid, i, j + 1);
  dfs(grid, i, j - 1);
}

var numIslands = function (grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        count += 1;
        dfs(grid, i, j);
      }
    }
  }
  return count;
};

let testsToRun = [
  new Test({
    expected: 1,
    args: [
      [
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"],
      ],
    ],
  }),
  new Test({
    expected: 4,
    args: [
      [
        ["1", "0", "0", "0", "1"],
        ["0", "0", "0", "0", "0"],
        ["1", "1", "1", "0", "0"],
        ["1", "0", "0", "1", "1"],
      ],
    ],
  }),
];
const test = new UnitTests(numIslands, testsToRun);
test.run();
