/**
 * selection sort is you find the strongest in the array for that spot and place it there
 *  O(n^2)
 * @param {Array} items
 * @param {function} comparator
 */
let selection_sort = (
  items,
  comparator = (a, b) => {
    return a < b;
  }
) => {
  for (let i = 0; i < items.length; i++) {
    let min = i;
    for (let j = i + 1; j < items.length; j++) {
      if (comparator(items[j], items[min])) min = j;
    }
    let holder = items[i];
    items[i] = items[min];
    items[min] = holder;
  }
};

let sample = () => {
  let array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
  console.log(array);
  selection_sort(array);
  console.log(array);
};
// sample();

export { selection_sort };
