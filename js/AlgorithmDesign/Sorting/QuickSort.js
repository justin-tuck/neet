import { swap, shuffleArray, findMedian } from "../../Utils/Helper.js";
/**
 * Quick sort a divide and conquer sort that runs in O(nlogn) in most cases
 * it can run in O(n^2) but if you randomize the data and pick a smart partition it will run better
 * @param {Array} items
 * @param {number} low
 * @param {number} high
 */
let quick_sort = (
  items,
  low,
  high,
  comparator = (a, b) => {
    return a - b;
  }
) => {
  const partition = (items, low, high, comparator) => {
    let p = high; //Find a better pivot by taking the median of high, middle, low
    let x = low;
    for (let i = low; i < high; i++) {
      if (1 > comparator(items[i], items[p])) {
        swap(items, i, x);
        x++;
      }
    }
    swap(items, p, x);
    return x;
  };

  if (low < high) {
    const p = partition(items, low, high, comparator);
    quick_sort(items, low, p - 1, comparator);
    quick_sort(items, p + 1, high, comparator);
  }
};
let sample = () => {
  let array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
  console.log(array);
  shuffleArray(array); // shuffle array first for faster result
  console.log(array);
  quick_sort(array, 0, array.length - 1);
  console.log(array);
};
sample();

export { quick_sort };
