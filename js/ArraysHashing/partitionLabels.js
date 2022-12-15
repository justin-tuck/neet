import { UnitTests, Test } from "../Utils/Test.js";

var partitionLabels = function (s) {
  let letterMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (letterMap.has(s[i])) {
      let count = letterMap.get(s[i]);
      letterMap.set(s[i], count + 1);
    } else {
      letterMap.set(s[i], 1);
    }
  }

  let result = [];
  let currentSet = new Set();
  let count = 0;
  for (const l of s) {
    count++;
    currentSet.add(l);
    let val = letterMap.get(l);
    letterMap.set(l, val - 1);

    if (val - 1 === 0) {
      currentSet.delete(l);
    }
    if (currentSet.size === 0) {
      result.push(count);
      count = 0;
    }
  }
  return result;
};

let testsToRun = [
  new Test({ expected: [9, 7, 8], args: ["ababcbacadefegdehijhklij"] }),
  new Test({ expected: [4, 3], args: ["abcaefe"] }),
];
const test = new UnitTests(partitionLabels, testsToRun);
test.run();
