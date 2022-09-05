import { UnitTests, Test } from "../Utils/Test.js";

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  //Make a max-heap
  let heap = new maxHeap(nums);
  let result = [];
  for (let i = 1; i <= k; i++) {
    result.push(heap.pop());
  }
  return result;
};

class maxHeap {
  constructor(nums) {
    let map = new Map();
    //set 0 spot to null 1 will be root
    this.pq = [null];

    for (let i = 0; i < nums.length; i++) {
      let val = nums[i];
      if (map.has(val)) {
        map.set(val, map.get(val) + 1);
      } else {
        map.set(val, 1);
      }
    }
    for (const m of map) {
      this.insert(m);
    }
  }

  //insert
  insert(val) {
    //insert into the last spot of heap and then bubble up
    this.pq[this.pq.length] = val; // should be [key, val] tuple
    //then bubble up
    this.bubbleUp(this.pq.length - 1);
  }

  bubbleUp(spot) {
    if (spot <= 1) return; //at top
    //check parent if bigger than swap
    let p = Math.floor(spot / 2);
    if (this.pq[p][1] < this.pq[spot][1]) {
      this.swap(p, spot);
      this.bubbleUp(p);
    }
  }

  pop() {
    let value = this.pq[1][0];

    this.pq[1] = this.pq.pop();
    //bubble down
    this.bubbleDown(1);

    return value;
  }

  bubbleDown(spot) {
    let max = spot;
    let child = 2 * spot;
    let swap = false;
    //loop through children
    for (let i = 0; i <= 1; i++) {
      if (child + i >= this.pq.length) break;

      if (this.pq[max][1] < this.pq[child + i][1]) {
        max = child + i;
        swap = true;
      }
    }

    if (swap) {
      this.swap(spot, max);
      this.bubbleDown(max);
    }
  }

  swap(a, b) {
    let temp = this.pq[a];
    this.pq[a] = this.pq[b];
    this.pq[b] = temp;
  }
}

let testsToRun = [
  // new Test({ expected: [1, 2], args: [[1, 1, 1, 2, 2, 3], 2] }),
  // new Test({ expected: [1], args: [[1], 1] }),
  // new Test({ expected: [3, 5], args: [[5, 2, 5, 3, 5, 3, 1, 1, 3], 2] }),
  new Test({
    expected: [4, -1, 2, -5, -8, 0, 8],
    args: [
      [
        5, 1, -1, -8, -7, 8, -5, 0, 1, 10, 8, 0, -4, 3, -1, -1, 4, -5, 4, -3, 0,
        2, 2, 2, 4, -2, -4, 8, -7, -7, 2, -8, 0, -8, 10, 8, -8, -2, -9, 4, -7,
        6, 6, -1, 4, 2, 8, -3, 5, -9, -3, 6, -8, -5, 5, 10, 2, -5, -1, -5, 1,
        -3, 7, 0, 8, -2, -3, -1, -5, 4, 7, -9, 0, 2, 10, 4, 4, -4, -1, -1, 6,
        -8, -9, -1, 9, -9, 3, 5, 1, 6, -1, -2, 4, 2, 4, -6, 4, 4, 5, -5,
      ],
      7,
    ],
  }),
];
const test = new UnitTests(topKFrequent, testsToRun);
test.run();
