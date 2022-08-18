import { UnitTests, Test } from "../Utils/Test.js";
import { ListNode, ListUtils } from "../Utils/List.js";

/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let next = null;
  let currentNode = head;
  while (currentNode != null) {
    let holder = currentNode.next;
    currentNode.next = next;
    next = currentNode;
    currentNode = holder;
  }
  // return next because that was the previous
  return next;
};

let testsToRun = [
  new Test({
    expected: ListUtils.generateList([5, 4, 3, 2, 1]),
    args: [ListUtils.generateList([1, 2, 3, 4, 5])],
  }),
  new Test({
    expected: ListUtils.generateList([2, 1]),
    args: [ListUtils.generateList([1, 2])],
  }),
  new Test({
    expected: ListUtils.generateList([]),
    args: [ListUtils.generateList([])],
  }),
];
const test = new UnitTests(reverseList, testsToRun);
test.run();
