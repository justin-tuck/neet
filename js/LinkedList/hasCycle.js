import { UnitTests, Test } from "../Utils/Test.js";
import { ListNode, ListUtils } from "../Utils/List.js";

/**
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
 * Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 * CHALLENGE: solve in O(1) constant memory
 * @param {ListNode} head
 * @return {boolean}
 */
// In order to implement this in O(n) time and O(1) we need a fast and slow walker
var hasCycle = function (head) {
  let slow = head;
  let fast = head ? head.next : null;
  while (fast !== null) {
    if (slow === fast) {
      return true;
    }

    slow = slow.next;
    fast = fast.next ? fast.next.next : null;
  }
  return false;
};

//Need to make my own Test Data since this is tricky
const node2 = new ListNode(2, null);
const node3 = new ListNode(0, node2);
const nodeNeg4 = new ListNode(-4, node2);
const node0 = new ListNode(0, nodeNeg4);
node2.next = node0; // set cycle
//Test 2
const node2a = new ListNode(2, null);
const node1 = new ListNode(1, node2a);
node2a.next = node1; // set cycle

let testsToRun = [
  new Test({
    expected: true,
    args: [node3],
  }),
  new Test({
    expected: true,
    args: [node1],
  }),
  new Test({
    expected: false,
    args: [ListUtils.generateList([1])],
  }),
  new Test({
    expected: false,
    args: [ListUtils.generateList([])],
  }),
];
const test = new UnitTests(hasCycle, testsToRun);
test.run();
