import { UnitTests, Test } from "../Utils/Test.js";

/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  //low value
  let low = prices[0];
  //current profit
  let profit = 0;
  //walk through array, looking for lowest and seeing if from the low you can get a higher profit O(n)
  //sliding window - range low - i
  for (let i = 1; i < prices.length; i++) {
    let currentPrice = prices[i];
    if (currentPrice < low) {
      low = currentPrice;
    } else {
      let diff = currentPrice - low;
      if (diff > profit) {
        profit = diff;
      }
    }
  }

  return profit;
};

let testsToRun = [
  new Test({ result: 5, args: [[7, 1, 5, 3, 6, 4]] }),
  new Test({ result: 0, args: [[7, 6, 4, 3, 1]] }),
];
const test = new UnitTests(maxProfit, testsToRun);
test.run();
