class Stack {
  constructor() {
    this.stack = [];
  }

  /**
   * Pushes on the stack in O(1)
   * @param {number} val
   */
  push(val) {
    this.stack.push(val);
  }

  /**
   * Pops from stack in O(1)
   */
  pop() {
    this.stack.pop();
  }

  toString() {
    return this.stack.toString();
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
console.log(`${stack}`);
//1,2,3

stack.pop();
console.log(`${stack}`);
//1,2

stack.pop();
console.log(`${stack}`);
//1
