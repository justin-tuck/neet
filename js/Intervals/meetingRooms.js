import { UnitTests, Test } from "../Utils/Test.js";

/**
 * Given an array of meeting time intervals consisting of start and end times [s1, e1], [s2, e2]... (si < ei) determine if a person could attend all meetings
 * @param {number[]} height
 * @return {number}
 */
var meetingRooms = function (meetings) {
  //first sort meetings on start value
  meetings.sort((a, b) => {
    return a[0] - b[0];
  });

  let high = meetings[0][1]; // set high to first value
  for (let i = 1; i < meetings.length; i++) {
    const [si, ei] = meetings[i];
    if (si < high) {
      return false;
    }
    high = ei;
  }

  return true;
};

/* 0 5 10 15 20 25 30 
   ------------------
     ----
           ----

*/
let testsToRun = [
  new Test({
    expected: false,
    args: [
      [
        [15, 20],
        [0, 30],
        [5, 10],
      ],
    ],
  }), // 0 30 conflicts with all others
  new Test({
    expected: true,
    args: [
      [
        [15, 20],
        [5, 10],
      ],
    ],
  }),
  new Test({
    expected: false,
    args: [
      [
        [7, 20],
        [5, 10],
      ],
    ],
  }),
];
const test = new UnitTests(meetingRooms, testsToRun);
test.run();
