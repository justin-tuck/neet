class ListNode {
  /**
   * Definition for singly-linked list.
   * @param {number} val
   * @param {ListNode} next
   */
  constructor(val, next) {
    this.val = val ? val : 0;
    this.next = next ? next : null;
  }

  /**
   * returns a string of this node and all that follow
   * @returns {string}
   */
  toString() {
    return ListUtils.printList(this);
  }
}

class ListUtils {
  /**
   * Function that generates a singly linked list
   * @param {Array<number>} numbers
   * @return {ListNode}
   */
  static generateList(numbers) {
    if (numbers.length === 0) {
      return null;
    }
    let tail = new ListNode(numbers[numbers.length - 1], null);

    for (let i = numbers.length - 2; i > -1; i--) {
      let value = numbers[i];
      tail = new ListNode(value, tail);
    }
    return tail;
  }

  /**
   * Converts singly linked List into a string
   * @param {ListNode} node
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

export { ListNode, ListUtils };
