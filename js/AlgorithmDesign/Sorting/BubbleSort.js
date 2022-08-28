/**
 * Bubble sort steps through an array starting at the front and checking each against it bubbling the weakest up
 * O(n^2)
 * @param {Array} items
 * @param {function} comparator
 */
let bubble_sort = (
  items,
  comparator = (a, b) => {
    return a - b;
  }
) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 1; i < items.length; i++) {
      if (1 <= comparator(items[i - 1], items[i])) {
        let holder = items[i - 1];
        items[i - 1] = items[i];
        items[i] = holder;
        swapped = true;
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
sample();
export { bubble_sort };
