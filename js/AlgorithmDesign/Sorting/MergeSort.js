import { Queue } from "../DataStructures/Queue.js";

/**
 *
 * @param {numbers[]} items
 * @param {*} comparator
 * @returns
 */
const merge_sort = (
  items,
  low,
  high,
  comparator = (a, b) => {
    return a - b;
  }
) => {
  if (low < high) {
    let middle = Math.floor((low + high) / 2);
    merge_sort(items, low, middle, comparator);
    merge_sort(items, middle + 1, high, comparator);
    merge(items, low, middle, high, comparator);
  }
};

const merge = (items, low, middle, high, comparator) => {
  let leftBuffer = new Queue();
  let rightBuffer = new Queue();

  //First populate our queues
  //Using queues for its first in first out so we can keep the sorted order
  for (let i = low; i <= middle; i++) leftBuffer.enqueue(items[i]);
  for (let i = middle + 1; i <= high; i++) rightBuffer.enqueue(items[i]);

  let i = low;
  while (!(leftBuffer.size === 0 || rightBuffer.size === 0)) {
    if (1 > comparator(leftBuffer.peek(), rightBuffer.peek())) {
      items[i++] = leftBuffer.dequeue();
    } else {
      items[i++] = rightBuffer.dequeue();
    }
  }

  //Empty out the queues
  while (leftBuffer.size !== 0) items[i++] = leftBuffer.dequeue();
  while (rightBuffer.size !== 0) items[i++] = rightBuffer.dequeue();
};

let sample = () => {
  let array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
  console.log(array);
  merge_sort(array, 0, array.length - 1);
  console.log(array);
};
sample();

export { merge_sort };
