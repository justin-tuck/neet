import { UnitTests, Test } from "../Utils/Test.js";

class SudokuSquares {
  constructor() {
    this.squares = [
      [new Set(), new Set(), new Set()],
      [new Set(), new Set(), new Set()],
      [new Set(), new Set(), new Set()],
    ];
  }

  /*
          0       1       2
        0 1 2 | 3 4 5 | 6 7 8 
      0
    0 1   0   |   1   |   2
      2
      - ----------------------
      3
    1 4   3   |   4   |   5
      5
      - ---------------------
      6
    2 7   6   |   7   |   8
      8
  */
  insert(x, y, val) {
    // looks weird but just turning string to int
    //  then using int division to get proper square since its 3x3
    const spot = [~~(~~x / 3), ~~(~~y / 3)];
    const square = this.squares[spot[0]][spot[1]];
    if (square.has(val)) return false;
    square.add(val);
    return true;
  }
}
/**
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 * Note:
 * A Sudoku board (partially filled) could be valid but is not necessarily solvable.
 * Only the filled cells need to be validated according to the mentioned rules.
 *
 * @param {character[][]} board
 * board.length == 9
 * board[i].length == 9
 * board[i][j] is a digit 1-9 or '.'.
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  //Create Sets to contain Rows Columns and Squares
  let rows = [
    new Set(),
    new Set(),
    new Set(),
    new Set(),
    new Set(),
    new Set(),
    new Set(),
    new Set(),
    new Set(),
  ];
  let columns = [
    new Set(),
    new Set(),
    new Set(),
    new Set(),
    new Set(),
    new Set(),
    new Set(),
    new Set(),
    new Set(),
  ];
  let squares = new SudokuSquares();

  //walk through sudoku checking if sudoku is valid
  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      let val = board[x][y];
      if (val === ".") continue;

      //check row
      let row = rows[x];
      if (row.has(val)) return false;
      row.add(val);

      //check column
      let col = columns[y];
      if (col.has(val)) return false;
      col.add(val);

      //check square
      if (!squares.insert(x, y, val)) return false;
    }
  }

  return true;
};

let testsToRun = [
  new Test({
    expected: true,
    args: [
      [
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"],
      ],
    ],
  }),
  new Test({
    expected: false,
    args: [
      [
        ["8", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"],
      ],
    ],
  }),
  new Test({
    expected: false,
    args: [
      [
        [".", ".", "4", ".", ".", ".", "6", "3", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        ["5", ".", ".", ".", ".", ".", ".", "9", "."],
        [".", ".", ".", "5", "6", ".", ".", ".", "."],
        ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
        [".", ".", ".", "7", ".", ".", ".", ".", "."],
        [".", ".", ".", "5", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
      ],
    ],
  }),
];
const test = new UnitTests(isValidSudoku, testsToRun);
test.run();
