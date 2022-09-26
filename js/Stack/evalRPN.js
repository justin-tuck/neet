import { UnitTests, Test } from "../Utils/Test.js";

/**
 * Evaluate the value of an arithmetic expression in Reverse Polish Notation.
 * Valid operators are +, -, *, and /. Each operand may be an integer or another expression.
 * Note that division between two integers should truncate toward zero.
 * It is guaranteed that the given RPN expression is always valid.
 * That means the expression would always evaluate to a result,
 *  and there will not be any division by zero operation.
 *
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];

  function doublePop() {
    let b = stack.pop();
    let a = stack.pop();
    return [a, b];
  }

  //loop through tokens
  for (const t of tokens) {
    switch (t) {
      case "+":
        let [a1, b1] = doublePop();
        stack.push(a1 + b1);
        break;
      case "-":
        let [a2, b2] = doublePop();
        stack.push(a2 - b2);
        break;
      case "*":
        let [a3, b3] = doublePop();
        stack.push(a3 * b3);
        break;
      case "/":
        let [a, b] = doublePop();
        stack.push(~~(a / b));
        break;
      default:
        stack.push(~~t);
    }
  }
  return stack.pop();
};

let testsToRun = [
  new Test({ expected: 9, args: [["2", "1", "+", "3", "*"]] }), //((2 + 1) * 3) = 9
  new Test({ expected: 6, args: [["4", "13", "5", "/", "+"]] }), // (4 + (13 / 5)) = 6
  new Test({
    expected: 22,
    args: [
      ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"],
    ],
  }), // ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
];
const test = new UnitTests(evalRPN, testsToRun);
test.run();
