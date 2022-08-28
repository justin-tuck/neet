/**
 * Fisher-Yates randomize an array
 * @param {Array} array
 */
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    swap(array, i, j);
  }
};

/**
 * Swaps two values at a given index in an array
 * @param {Array} array
 * @param {number} a
 * @param {number} b
 */
const swap = (array, a, b) => {
  let holder = array[a];
  array[a] = array[b];
  array[b] = holder;
};

/**
 * Finds the median
 * @param {number[]} array
 * @returns
 */
const findMedian = (array) => {
  if (array.length % 2 != 0) return array[Math.floor(array.length / 2)];
  //Take the average of the two middle spots
  let middle = Math.floor(array.length / 2);
  return (array[middle] + array[middle + 1]) / 2;
};

export { swap, shuffleArray, findMedian };
