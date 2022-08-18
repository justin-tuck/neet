import { UnitTests, Test } from "../Utils/Test.js";
import { ListNode, ListUtils } from "../Utils/List.js";

/**
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// O(l1 + l2) = O(n) walk through all nodes potentially -  O(1) extra space since reusing space allocated for arguments
var mergeTwoLists = function (list1, list2) {
  // edge cases if lists are null
  if (list1 && !list2) {
    return list1;
  } else if (list2 && !list1) {
    return list2;
  } else if (!list1 && !list2) {
    return null;
  }

  // set up head
  let head = null;
  if (list1.val > list2.val) {
    head = list2;
    list2 = list2.next;
  } else {
    head = list1;
    list1 = list1.next;
  }
  let currentNode = head;

  // splice lists
  while (list1 || list2) {
    if (list1 && !list2) {
      currentNode.next = list1;
      break;
    } else if (list2 && !list1) {
      currentNode.next = list2;
      break;
    }

    if (list1.val > list2.val) {
      currentNode.next = list2;
      list2 = list2.next;
    } else {
      currentNode.next = list1;
      list1 = list1.next;
    }
    currentNode = currentNode.next;
  }

  return head;
};

let testsToRun = [
  new Test({
    expected: ListUtils.generateList([1, 1, 2, 3, 4, 4]),
    args: [
      ListUtils.generateList([1, 2, 4]),
      ListUtils.generateList([1, 3, 4]),
    ],
  }),
  new Test({
    expected: ListUtils.generateList([]),
    args: [ListUtils.generateList([]), ListUtils.generateList([])],
  }),
  new Test({
    expected: ListUtils.generateList([0]),
    args: [ListUtils.generateList([]), ListUtils.generateList([0])],
  }),
];
const test = new UnitTests(mergeTwoLists, testsToRun);
test.run();
