import { TreeUtils } from "../../Utils/Tree.js";
import { InvalidArgumentException } from "../../Utils/Errors.js";

class Heap {
  /**
   * Creates either a min or a max heap
   * height is always log(n)
   *
   * @param {string} type either 'min' or 'max' or 'custom'
   * @param {number []} array
   */
  constructor(type, array = [], comparator) {
    this.pq = []; // pq shot for priority queue
    this.pq[0] = null;
    this.n = 0;
    switch (type) {
      case "MIN":
      case "Min":
      case "min":
        this.comparator = (a, b) => {
          return a < b;
        };
        break;
      case "MAX":
      case "Max":
      case "max":
        this.comparator = (a, b) => {
          return a > b;
        };
        break;
      case "custom":
        if (!comparator)
          throw new InvalidArgumentException(
            "Custom Heap needs a comparator function."
          );
        this.comparator = comparator;
        break;
      default:
        throw new InvalidArgumentException("Option not min, max or custom.");
    }
    //build heap in O(n log(n))
    for (const val of array) {
      this.insert(val);
    }
  }

  /**
   * each insert takes O( log(n) )  - may need to walk all the way to the top
   * @param {number} val
   */
  insert(val) {
    this.n += 1;
    this.pq[this.n] = val;
    HeapUtils.bubble_up(this, this.n);
  }

  extract() {
    if (this.n === 0) return null;

    let value = this.pq[1];
    this.pq[1] = this.pq[this.n]; //now set value at n to head and bubble down
    this.pq[this.n] = null;
    this.n--;

    //bubble it down
    HeapUtils.bubble_down(this, 1);

    return value;
  }

  /**
   *
   * @returns most significant value
   */
  peek() {
    return this.pq[1];
  }

  size() {
    return this.n;
  }

  toString() {
    let binaryTree = TreeUtils.buildBinaryTree(this.pq, 1);
    return TreeUtils.printTree(binaryTree);
  }
}

class HeapUtils {
  /**
   *
   * @param {number} spot
   * @returns location of parent or null
   */
  static parent = (spot) => {
    if (spot === 1) return null;
    return Math.floor(spot / 2);
  };

  /**
   *
   * @param {number} spot
   * @returns location of left child
   */
  static leftChild = (spot) => {
    return 2 * spot;
  };

  /**
   *
   * @param {number} spot
   * @returns location of right child
   */
  static rightChild = (spot) => {
    return 2 * spot + 1;
  };

  /**
   *
   * @param {Heap} heap
   * @param {number} a index
   * @param {number} b index
   */
  static swap = (heap, a, b) => {
    let holder = heap.pq[b];
    heap.pq[b] = heap.pq[a];
    heap.pq[a] = holder;
  };

  /**
   * Bubble up is used when inserting into a Heap, it will bubble up to the correct position
   * @param {Heap} heap
   * @param {number} point
   * @returns
   */
  static bubble_up = (heap, point) => {
    let parent = HeapUtils.parent(point);
    if (!parent) return;
    if (heap.comparator(heap.pq[point], heap.pq[parent])) {
      HeapUtils.swap(heap, point, parent);
      HeapUtils.bubble_up(heap, parent); //keep bubbling
    }
  };

  static bubble_down = (heap, point) => {
    let child = HeapUtils.leftChild(point);
    let index = point;
    // loop through each child and find if there is a stronger one
    for (let i = 0; i <= 1; i++) {
      if (child + i <= heap.n) {
        if (heap.comparator(heap.pq[child + i], heap.pq[index])) {
          index = child + i;
        }
      }
    }
    if (index !== point) {
      HeapUtils.swap(heap, index, point);
      HeapUtils.bubble_down(heap, index); //keep bubbling down!
    }
  };
}

let sample = () => {
  let min_heap = new Heap("min", [4, 6, 3, 2, 1]);
  console.log(`${min_heap}`);

  let max_heap = new Heap("max", [4, 6, 3, 2, 1]);
  console.log(`${max_heap}`);

  // console.log(min_heap.extract());
  // console.log(`${min_heap}`);
  // console.log(min_heap.extract());
  // console.log(`${min_heap}`);

  console.log(max_heap.extract());
  console.log(`${max_heap}`);
  console.log(max_heap.extract());
  console.log(`${max_heap}`);
};
//Try it with the sample
// sample();

export { Heap };
