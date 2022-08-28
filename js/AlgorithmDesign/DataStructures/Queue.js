import { SLLNode, ListUtils } from "./LinkedList.js";
class Queue {
  constructor() {
    this.size = 0;
    this.head = null;
    this.last = null;
  }

  /**
   * enqueues in O(1)
   * @param {number} val
   */
  enqueue(val) {
    let node = new SLLNode(val, null);
    if (this.size === 0) {
      this.head = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
  }

  /**
   * dequeues in O(1)
   * @returns {number}
   */
  dequeue() {
    if (!this.head) return null;
    let val = this.head.val;
    this.head = this.head.next;
    this.size--;
    return val;
  }

  /**
   *
   * @returns current value at head
   */
  peek() {
    return this.head ? this.head.val : null;
  }

  toString() {
    return ListUtils.printList(this.head);
  }
}

let sample = () => {
  let q = new Queue();

  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  console.log(`${q}`);
  // 1 -> 2 -> 3

  q.dequeue();
  console.log(`${q}`);
  // 2 -> 3

  q.dequeue();
  console.log(`${q}`);
  // 3
};

export { Queue };
