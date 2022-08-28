import { Heap } from "../DataStructures/Heap.js";

/**
 * Heap sort is the same as selection sort but using a min/max Heap as a data structure
 *  Inserting into heap O(n log n) + looping through items O(n)
 *  O(n log n)
 * @param {Array} items
 * @param {string} type can be min or max
 */
let heap_sort = (items, type = "min") => {
  let heap = new Heap(type, items);
  for (let i = 0; i < items.length; i++) {
    items[i] = heap.extract();
  }
};

let sample = () => {
  let array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
  console.log(array);
  heap_sort(array);
  console.log(array);
};
sample();

export { heap_sort };
