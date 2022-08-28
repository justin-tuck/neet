/**
 * Bubble sort steps through an array n*n times
 * O(n^2)
 * @param {Array} items
 * @param {function} comparator
 */
let bubble_sort = (
  items,
  comparator = (a, b) => {
    return a > b;
  }
) => {
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      if (comparator(items[i], items[j])) {
        let holder = items[i];
        items[i] = items[j];
        items[j] = holder;
      }
    }
  }
};

let sample = () => {
  let array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
  console.log(array);
  bubble_sort(array);
  console.log(array);
};

export { bubble_sort };
