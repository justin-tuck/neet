class SLLNode {
  /**
   * A Singly Linked List Node
   * @param {number} val
   * @param {SLLNode} next
   */
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }

  /**
   * Inserts at head of list and returns new root
   * @param {number} val
   * @returns {SLLNode}
   */
  insert(val) {
    let node = new SLLNode(val, this);
    return node;
  }

  /**
   * Walk through each node to find value
   * O(n)
   * @param {number} value
   * @returns {SLLNode}
   */
  search(value) {
    return this.searchList(this, value);
  }

  /**
   *
   * @param {number} value
   * @returns {boolean}
   */
  contains(value) {
    return this.searchList(this, value) ? true : false;
  }

  /**
   * Walk through each node to find value
   * O(n)
   * @param {SLLNode} node
   * @param {number} val
   * @returns SLLNode
   */
  searchList(node, val) {
    if (!node) return null;
    if (node.val === val) return node;
    return this.searchList(node.next, val);
  }

  /**
   *
   * @param {number} val
   * @returns {SLLNode} root
   */
  delete(val) {
    if (val === this.val) return this.next;

    let predecessor = this.findPredecessor(this, val);
    if (predecessor) {
      predecessor.next = predecessor.next.next;
    }

    return this;
  }

  /**
   *
   * @param {SLLNode} node
   * @param {number} val
   * @returns {SLLNode}
   */
  findPredecessor(node, val) {
    if (!node) return null;
    if (!node.next) return null;
    if (node.next.val === val) return node;
    return this.findPredecessor(node.next, val);
  }

  toString() {
    return ListUtils.printList(this);
  }
}

class ListUtils {
  /**
   * Function that generates a singly linked list
   * @param {Array<number>} numbers
   * @return {SLLNode}
   */
  static generateList(numbers) {
    if (numbers.length === 0) {
      return null;
    }
    let tail = new SLLNode(numbers[numbers.length - 1], null);

    for (let i = numbers.length - 2; i > -1; i--) {
      let value = numbers[i];
      tail = new SLLNode(value, tail);
    }
    return tail;
  }

  /**
   * Converts singly linked List into a string
   * @param {SLLNode} node
   * @returns {string}
   */
  static printList(node) {
    let list = "";
    while (node !== null) {
      list += node.val + (node.next ? " -> " : "");
      node = node.next;
    }
    return list;
  }
}

// let root = ListUtils.generateList([1, 2, 3, 4, 5]);
// console.log(root.toString());
// //1 -> 2 -> 3 -> 4 -> 5

// root = root.insert(6);
// console.log(root.toString());
// // 6 -> 1 -> 2 -> 3 -> 4 -> 5

// let node4 = root.search(4);
// console.log(node4.val);
// // 4

// root = root.delete(4);
// console.log(root.toString());
// 6 -> 1 -> 2 -> 3 -> 5

export { SLLNode, ListUtils };
