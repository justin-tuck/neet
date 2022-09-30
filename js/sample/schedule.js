import { UnitTests, Test } from "../Utils/Test.js";
import { Heap } from "../AlgorithmDesign/DataStructures/Heap.js";
/**
 * Problem:
 *  given times:
 *
 *  Name   | start | end
 * -----------------------
 * Celeste | 1     | 10
 * Justin  | 5     | 8
 * Mandy   | 7     | 12
 * Stormy  | 15    | 17
 *
 * Return
 *
 * start | end | Names
 *  1    | 5   | Celeste
 *  5    | 7   | Celeste, Justin
 *  7    | 8   | Celeste, Justin, Mandy
 *  8    | 10  | Celeste, Mandy
 *  10   | 12  | Mandy
 *  15   | 17  | Stormy
 * @params {users[]} users  [ {name: Celeste, start: 1, end: 10}]
 *
 *  |-------|---|-|----|----|        |-----|
 *  1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17
 *  | --Celeste ------|              |Stor-|
 *          |Just-|
 *              |-- Mandy --|
 *
 * users = Celeste, Justin, Mandy, Stormy
 *
 * start = 7
 * onCall Celeste(1,10) Justin(5, 8), Mandy(7, 12)
 * result [ {start: 1, end: 5, names [Celeste]},
 *          {start: 5, end: 7, names: [Celeste, Justin] }]
 *
 * user = Stormy(15, 17)
 * time = { start: 7, end: 15, names: }
 *
 * @return {TimeBlock[]}
 */
function scheduler(users) {
  //first sort the array by start date
  users.sort((a, b) => {
    return a.start - b.start;
  });
  let result = [];
  let onCall = [];
  let start = users[0].start;

  function addTimeBlock(tb) {
    if (tb.names.length !== 0 && tb.start !== tb.end) {
      result.push(tb);
    }
  }

  function handleRotation(user, end) {
    // create a new result
    let time = new TimeBlock(start, end);
    //add users
    let stillOnCall = [];
    //Need to sort onCall by end length;
    onCall.sort((a, b) => {
      return a.end - b.end;
    });
    for (const userOnCall of onCall) {
      //Check if user on call's end is before this users start
      if (userOnCall.end <= end) {
        time.end = userOnCall.end;
        //add all current on call
        time.names = onCall.map((a) => a.name);
        addTimeBlock(time);
        onCall = onCall.filter((a) => a.name != userOnCall.name);
        //Reset time

        time = new TimeBlock(userOnCall.end, end);
      } else {
        time.addName(userOnCall.name);
        stillOnCall.push(userOnCall);
      }
    }
    onCall = stillOnCall;

    addTimeBlock(time);
    onCall.push(user);
    start = end;
  }

  //loop through users
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    if (user.start === start) {
      onCall.push(user);
    } else {
      handleRotation(user, user.start);
    }
  }

  //Empty out oncall list
  for (const userOnCall of onCall) {
    handleRotation(userOnCall, userOnCall.end);
  }
  return result;
}

/**
 *
 * @param {*} users
 * @returns {TimeBlock[]}
 */
function fastScheduler(users) {
  const START = "start";
  const END = "end";
  let times = [];
  let result = [];

  //process times
  for (const user of users) {
    //Add time for start and end
    times.push(new Time(user.name, user.start, START));
    times.push(new Time(user.name, user.end, END));
  }
  //sort times by time
  times.sort((a, b) => a.time - b.time);

  // function setNewBlock(time,)

  function endBlock(currentTime, end) {
    currentTime.end = end;
    if (currentTime.names.length > 0) result.push(currentTime);
  }

  //walk through adding each user to time block till end time found
  let currentTime = undefined;
  for (const time of times) {
    if (time.type === START) {
      if (!currentTime) currentTime = new TimeBlock(time.time);

      if (currentTime.start === time.time) {
        currentTime.addName(time.name);
      } else {
        endBlock(currentTime, time.time);
        //set up next time block keep adding new name
        let onCall = [...currentTime.names, time.name];

        currentTime = new TimeBlock(time.time);
        currentTime.names = onCall;
      }
    } else {
      endBlock(currentTime, time.time);

      //set up next time block on call is all but the one leaving
      let onCall = currentTime.names.filter((a) => a != time.name);

      // setNewTimeBlock(currentTime, time, onCall);
      currentTime = new TimeBlock(time.time);
      currentTime.names = onCall;
    }
  }
  return result;
}

class Time {
  constructor(name, time, type) {
    this.name = name;
    this.time = time;
    this.type = type;
  }
}

class TimeBlock {
  constructor(start, end = null, names = []) {
    this.start = start;
    this.end = end;
    this.names = names;
  }

  addName(name) {
    this.names.push(name);
  }
  toString() {
    return `${this.start} - ${this.end}: [${this.names}]`;
  }
}

let testsToRun = [
  new Test({
    expected: [
      new TimeBlock(1, 5, ["Celeste"]),
      new TimeBlock(5, 7, ["Celeste", "Justin"]),
      new TimeBlock(7, 8, ["Celeste", "Justin", "Mandy"]),
      new TimeBlock(8, 10, ["Celeste", "Mandy"]),
      new TimeBlock(10, 12, ["Mandy"]),
      new TimeBlock(15, 17, ["Stormy"]),
    ],
    args: [
      [
        { name: "Celeste", start: 1, end: 10 },
        { name: "Justin", start: 5, end: 8 },
        { name: "Mandy", start: 7, end: 12 },
        { name: "Stormy", start: 15, end: 17 },
      ],
    ],
  }),
  new Test({
    expected: [
      new TimeBlock(1, 4, ["Celeste"]),
      new TimeBlock(5, 8, ["Justin"]),
      new TimeBlock(9, 12, ["Mandy"]),
      new TimeBlock(15, 17, ["Stormy"]),
    ],
    args: [
      [
        { name: "Celeste", start: 1, end: 4 },
        { name: "Justin", start: 5, end: 8 },
        { name: "Mandy", start: 9, end: 12 },
        { name: "Stormy", start: 15, end: 17 },
      ],
    ],
  }),
  new Test({
    expected: [
      new TimeBlock(1, 5, ["Celeste"]),
      new TimeBlock(5, 7, ["Celeste", "Justin"]),
      new TimeBlock(7, 8, ["Celeste", "Justin", "Mandy"]),
      new TimeBlock(8, 10, ["Celeste", "Mandy"]),
      new TimeBlock(10, 12, ["Mandy"]),
    ],
    args: [
      [
        { name: "Celeste", start: 1, end: 10 },
        { name: "Justin", start: 5, end: 8 },
        { name: "Mandy", start: 7, end: 12 },
      ],
    ],
  }),
];
const test = new UnitTests(fastScheduler, testsToRun);
test.run();
