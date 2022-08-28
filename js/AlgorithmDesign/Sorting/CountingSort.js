/**
 *
 * good for sorting when the range between numbers isn't very large
 * Great because it is linear time.
 * O( 4n + 3k ) = O(n + k)
 * @param {number[]} array
 */
let counting_sort = (array) => {
  let output = new Array(array.length);
  let max = Math.max(...array); // O(n) time to find max
  let count = new Array(max + 1);
  for (let i = 0; i < count.length; ++i) count[i] = 0; // O(k) for size of max
  //now count! O(n)
  for (let i = 0; i < array.length; i++) {
    count[array[i]] += 1;
  }
  // O(k) - now add the counts up 0 -> (0 + 1 )-> ((0 + 1 ) + 2) ... k
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  //Now Shift! O (k)
  for (let i = count.length - 1; i > 0; i--) {
    count[i] = count[i - 1];
  }

  // O(n) now iterate over the array placing each counted spot in the correct spot
  for (let i = 0; i < array.length; i++) {
    output[count[array[i]]] = array[i];
    count[array[i]] += 1;
  }
  //now overwrite array O(n)
  for (let i = 0; i < array.length; i++) {
    array[i] = output[i];
  }
};

let sample = () => {
  let array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
  console.log(array);
  counting_sort(array);
  console.log(array);
};
// sample();

export { counting_sort };
