class MinHeap {
  constructor() {
    this.pq = [null];
    this.size = 0;
  }

  peek() {
    return this.pq[1];
  }

  enqueue(val) {
    this.pq.push(val);
    this.size++;
    //bubble up val
    this.bubbleUp(this.pq.length - 1);
  }

  bubbleUp(spot) {
    let parent = Math.floor(spot / 2);
    if (parent <= 0) return; // at top

    if (this.pq[spot] < this.pq[parent]) {
      this.swap(spot, parent);
      this.bubbleUp(parent);
    }
    return; //at spot
  }
  swap(a, b) {
    let temp = this.pq[a];
    this.pq[a] = this.pq[b];
    this.pq[b] = temp;
  }

  delete(val) {
    this.size--;
    //optimization to remove the last element
    if (this.pq[this.pq.length - 1] === val) {
      this.pq.pop(); //remove last element
      return;
    }

    for (let i = 0; i < this.pq.length; i++) {
      if (val === this.pq[i]) {
        // replace and shift
        this.pq[i] = this.pq.pop();
        this.bubbleDown(i);
        return;
      }
    }
  }

  bubbleDown(spot) {
    let max = spot;
    //check children
    let [l, r] = [spot * 2, spot * 2 + 1];
    if (l < this.size && this.pq[l] < this.pq[spot]) {
      max = l;
    }
    if (r < this.size && this.pq[r] < this.pq[max]) {
      max = r;
    }
    if (max !== spot) {
      this.swap(max, spot);
      this.bubbleDown(max);
    }
    return;
  }
}

var MinStack = function () {
  this.stack = [];
  this.min = [];
};

/**
 * pushes the element val onto the stack.
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  let min;
  if (this.min.length === 0 || this.min[this.min.length - 1] > val) {
    min = val;
  } else {
    min = this.min[this.min.length - 1];
  }

  this.min.push(min);
  this.stack.push(val);
};

/**
 * removes the element on the top of the stack.
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
  this.min.pop();
};

/**
 *  gets the top element of the stack.
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 *  retrieves the minimum element in the stack.
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min[this.min.length - 1];
};

// Your MinStack object will be instantiated and called as such:
let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // return -3
minStack.pop();
console.log(minStack.top()); // return 0
console.log(minStack.getMin()); // return -2
