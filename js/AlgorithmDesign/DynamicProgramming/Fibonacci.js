/**
 * Using caching by creating a table
 * O(n) time
 * O(n) space
 * @param {number} num
 * @returns
 */
const fib_driver = (num) => {
  let f = [0, 0, 1]; // needed to pad first value with 0
  const fib = (n) => {
    if (!f[n] && f[n] !== 0) {
      f[n] = fib(n - 1) + fib(n - 2);
    }
    return f[n];
  };
  return fib(num);
};

console.log(`${fib_driver(1000)}`);

/**
 * O(n) time
 * O(1) space
 * @param {number} num
 * @returns
 */
const fib_ultimate = (num) => {
  let [back1, back2] = [0, 1];

  if (num === 0) return 0;
  for (let i = 2; i < num; i++) {
    let next = back1 + back2;
    back2 = back1;
    back1 = next;
  }
  return back1 + back2;
};

console.log(`${fib_ultimate(1000)}`);
