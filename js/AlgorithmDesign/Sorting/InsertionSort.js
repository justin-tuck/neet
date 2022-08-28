/**
 * Insertion sort compares each value with the previously sorted list
 * worst case O(n^2) but can surprisingly run faster
 * @param {Array} items
 * @param {function} comparator
 */
let insertion_sort = (
  items,
  comparator = (a, b) => {
    return a < b;
  }
) => {
  //loop through the none sorted items
  for (let i = 1; i < items.length; i++) {
    let j = i;
    //Find the correct spot for it
    while (j > 0 && comparator(items[j], items[j - 1])) {
      let holder = items[j];
      items[j] = items[j - 1];
      items[j - 1] = holder;
      j--;
    }
  }
};

let sample = () => {
  let array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
  console.log(array);
  insertion_sort(array);
  console.log(array);
};
// sample();

export { insertion_sort };
