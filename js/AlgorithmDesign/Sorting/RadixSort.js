/**
 * Radix sort is great for sorting numbers
 *  O(d(n + b)) where d is the number of digits and b is the base
 *  using Counting sort with base 10
 * O(d(n + 10)) approximately O(n) depending how large your numbers are
 * @param {number[]} array
 */
const radix_sort = (array) => {
  let max = Math.max(...array);
  let place = 1;
  while (Math.floor(max / place) > 0) {
    radix_count(array, place);
    place *= 10;
  }
};

const radix_count = (array, place) => {
  //assuming base 10
  let output = new Array(array.length);
  let count = new Array(10); // 0 - 9
  for (let i = 0; i < 10; i++) count[i] = 0;

  //first count the occurrences in the specific place
  for (let i = 0; i < array.length; i++) {
    let number = Math.floor((array[i] / place) % 10);
    count[number] += 1;
  }

  // Add them
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }
  // shift them
  for (let i = count.length - 1; i > 0; i--) {
    count[i] = count[i - 1];
  }
  count[0] = 0; //Make sure this is 0!!

  // insert into output while increasing count of each in count
  for (let i = 0; i < array.length; i++) {
    let number = Math.floor((array[i] / place) % 10);
    let spot = count[number];
    output[spot] = array[i];
    count[number] = spot + 1; //add one for each spot for duplicates
  }

  //insert back into array
  for (let i = 0; i < array.length; i++) {
    array[i] = output[i];
  }
};

let sample = () => {
  let array = Array.from({ length: 100 }, () =>
    Math.floor(Math.random() * 999)
  );
  console.log(array);
  radix_sort(array);
  console.log(array);
};

sample();

export { radix_sort };
