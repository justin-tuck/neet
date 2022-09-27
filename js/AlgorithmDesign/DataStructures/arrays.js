// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//TODO organize all this mess
// 'fruits' array created using array literal notation.
const fruits = ["Apple", "Banana"];
console.log(fruits.length);
// 2

// 'fruits2' array created using the Array() constructor.
const fruits2 = new Array("Apple", "Banana");
console.log(fruits2.length);
// 2

// 'fruits3' array created using String.prototype.split().
const fruits3 = "Apple, Banana".split(", ");
console.log(fruits3.length);

// Create a String from an array
const fruitsString = fruits.join(", ");
console.log(fruitsString);
// "Apple, Banana"

// The index of an array's first element is always 0.
fruits[0]; // Apple

// The index of an array's second element is always 1.
fruits[1]; // Banana

// The index of an array's last element is always one
// less than the length of the array.
fruits[fruits.length - 1]; // Banana

// Using a index number larger than the array's length
// returns 'undefined'.
fruits[99]; // undefined

console.log(fruits.indexOf("Banana"));
// 1

// Check if an array contains an Item
fruits.includes("Banana"); // true
fruits.includes("Cherry"); // false

// If indexOf() doesn't return -1, the array contains the given item.
fruits.indexOf("Banana") !== -1; // true
fruits.indexOf("Cherry") !== -1; // false

// Append to an array
const newLength = fruits.push("Orange");
console.log(fruits);
// ["Apple", "Banana", "Orange"]
console.log(newLength);
// 3

//Remove last item from an array
const removedItem = fruits.pop();
console.log(fruits);
// ["Apple", "Banana"]
console.log(removedItem);
// Orange

//Remove multiple itesm from end of an array
const removeMultipleFromEnd = () => {
  const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
  const start = -3;
  const removedItems = fruits.splice(start);
  console.log(fruits);
  // ["Apple", "Banana"]
  console.log(removedItems);
  // ["Strawberry", "Mango", "Cherry"]
};

const truncateToFirstN = () => {
  const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
  const start = 2;
  const removedItems = fruits.splice(start);
  console.log(fruits);
  // ["Apple", "Banana"]
  console.log(removedItems);
  // ["Strawberry", "Mango", "Cherry"]
};

const removeTheFirstItem = () => {
  const fruits = ["Apple", "Banana"];
  const removedItem = fruits.shift();
  console.log(fruits);
  // ["Banana"]
  console.log(removedItem);
  // Apple
};

const removeMultipleItemsFromBeginning = () => {
  const fruits = ["Apple", "Strawberry", "Cherry", "Banana", "Mango"];
  const start = 0;
  const deleteCount = 3;
  const removedItems = fruits.splice(start, deleteCount);
  console.log(fruits);
  // ["Banana", "Mango"]
  console.log(removedItems);
  // ["Apple", "Strawberry", "Cherry"]
};

const addNewItemToFrontOfArray = () => {
  const fruits = ["Banana", "Mango"];
  const newLength = fruits.unshift("Strawberry");
  console.log(fruits);
  // ["Strawberry", "Banana", "Mango"]
  console.log(newLength);
  // 3
};

const removeSingleItemByIndex = () => {
  const fruits = ["Strawberry", "Banana", "Mango"];
  const start = fruits.indexOf("Banana");
  const deleteCount = 1;
  const removedItems = fruits.splice(start, deleteCount);
  console.log(fruits);
  // ["Strawberry", "Mango"]
  console.log(removedItems);
  // ["Banana"]
};

const removeMultipleItemsByIndex = () => {
  const fruits = ["Apple", "Banana", "Strawberry", "Mango"];
  const start = 1;
  const deleteCount = 2;
  const removedItems = fruits.splice(start, deleteCount);
  console.log(fruits);
  // ["Apple", "Mango"]
  console.log(removedItems);
  // ["Banana", "Strawberry"]
};

const replaceMultipleItemsInAnArray = () => {
  const fruits = ["Apple", "Banana", "Strawberry"];
  const start = -2;
  const deleteCount = 2;
  const removedItems = fruits.splice(start, deleteCount, "Mango", "Cherry");
  console.log(fruits);
  // ["Apple", "Mango", "Cherry"]
  console.log(removedItems);
  // ["Banana", "Strawberry"]
};

const iterateOverAnArray = () => {
  const fruits = ["Apple", "Mango", "Cherry"];
  for (const fruit of fruits) {
    console.log(fruit);
  }
  // Apple
  // Mango
  // Cherry
};

const mergeMultipleArraysTogether = () => {
  const fruits = ["Apple", "Banana", "Strawberry"];
  const moreFruits = ["Mango", "Cherry"];
  const combinedFruits = fruits.concat(moreFruits);
  console.log(combinedFruits);
  // ["Apple", "Banana", "Strawberry", "Mango", "Cherry"]

  // The 'fruits' array remains unchanged.
  console.log(fruits);
  // ["Apple", "Banana", "Strawberry"]

  // The 'moreFruits' array also remains unchanged.
  console.log(moreFruits);
  // ["Mango", "Cherry"]
};

const copyAnArray = () => {
  const fruits = ["Strawberry", "Mango"];

  // Create a copy using spread syntax.
  const fruitsCopy = [...fruits];
  // ["Strawberry", "Mango"]

  // Create a copy using the from() method.
  const fruitsCopy2 = Array.from(fruits);
  // ["Strawberry", "Mango"]

  // Create a copy using the slice() method.
  const fruitsCopy3 = fruits.slice();
  // ["Strawberry", "Mango"]

  //Deep copy
  const fruitsDeepCopy = JSON.parse(JSON.stringify(fruits));
};

const sortAnArray = () => {
  const fruits = ["Strawberry", "Mango"];

  // Functionless
  fruits.sort();

  // Arrow function
  // fruits.sort((a, b) => {
  //   /* … */
  // });

  // Compare function
  // fruits.sort(compareFn);

  // Inline compare function
  //   fruits.sort(function compareFn(a, b) {
  //     /* … */
  //   });
};
