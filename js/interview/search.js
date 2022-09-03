/*
  Write a function which takes a document and a set of search terms. The function should return the shortest contiguous sequence of words from the document containing ALL of the given search terms in any order (ignoring case), or null, if no such string exists. The document can contain only alphanumeric characters and spaces. 



  ["whale", "not" "a"]

   "not being a whale"

*/

/**
 *
 * @params {string} document
 * @params {string []} set - k
 */
const search = (document, set) => {
  // map of words I want
  let words = document.split(" ");
  let left = 0;
  let right = 0;

  let want = new Map();
  let found = new Map();
  let possible = [];

  // populate what we want and how many we have
  for (const w of set) {
    want.set(w, 1);
    found.set(w, 0);
  }

  for (let right = 0; right < words.length; right++) {
    if (want.has(words[right])) {
      found.set(words[right], found.get(words[right]) + 1);
      //check to see if have found them all
      let foundString = true;
      for (const [key, val] of want) {
        if (!found.get(key) || found.get(key) < val) {
          foundString = false;
        }
      }

      while (foundString) {
        let key = words[left];
        if (possible.length < 1 || possible[1] - possible[0] > right - left) {
          possible = [left, right];
        }

        if (want.has(key)) {
          want.set(key, want.get(key) - 1);
          if (want.get(key) < found.get(key)) {
            foundString = false;
          }
        }
        left++;
      }
    }
  }

  return words.slice(possible[0], possible[1] + 1).join(" ");
};

// Tests]
//right -5
//left - 1
// found b - 1 ; c - 1
// want  b - 1 ; c - 1
//result = " c b

// possible = c b

const set1 = ["b", "c"];
const test1 = "a b e f r c b";

let result = search(test1, set1);

console.log(`Test 1: "c b" - ${result}`);

const document =
  "Another thing that got forgotten was the fact that against all probability " +
  "a sperm whale had suddenly been called into existence several miles above " +
  "the surface of an alien planet And since this is not a naturally tenable " +
  "position for a whale this poor innocent creature had very little " +
  "time to come to terms with its identity as a whale before it then " +
  "had to come to terms with not being a whale any more This is a complete " +
  "record of its thoughts from the moment it began its life till the " +
  "moment it ended it";
/* 

   "not being a whale" */

console.log(
  `Test 2: "not being a whale"" - ${search(document, ["whale", "not", "a"])}`
);
