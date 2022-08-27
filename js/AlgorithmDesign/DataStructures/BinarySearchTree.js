class BSTree {
  constructor(val) {
    this.val = val ? val : 0;
    this.left = null;
    this.right = null;
  }

  search(val) {
    let searchTree = (node, val) => {
      if (!node) return null;
      if (node.val === val) return node;

      if (val < node.val) {
        return searchTree(node.left, val);
      } else {
        return searchTree(node.right, val);
      }
    };

    return searchTree(this, val);
  }

  insert(val) {
    let parent = BSTree_helper.findParent(this, val);
    let node = BSTree_helper.createNode(val); //had to create helper function for debugger
    if (parent.val < val) {
      parent.right = node;
    } else {
      parent.left = node;
    }
  }

  delete(val) {
    let parent = this.val === val ? this : BSTree_helper.findParent(this, val);

    let [dNode, isLeft] =
      parent.left?.val === val ? [parent.left, true] : [parent.right, false];
    //Handle no children easy to remove
    let replacement = null;

    // handle both children
    if (dNode.left && dNode.right) {
      //if dNode.right has no left child
      if (!dNode.right.left) {
        replacement = dNode.right;
        replacement.left = dNode.left;
      } else {
        replacement = dNode.right.left;
        // need to delete that node
        dNode.right.delete(dNode.right.left.val);
        replacement.right = dNode.right;
        replacement.left = dNode.left;
      }
    } else if (dNode.left) {
      replacement = dNode.left;
    } else if (dNode.right) {
      replacement = dNode.right;
    }

    // now set the replacement
    if (isLeft) {
      parent.left = replacement;
    } else {
      parent.right = replacement;
    }
  }

  toString() {
    let printTree = (node) => {
      let result = "\n";
      let print = (prefix, node, isLeft) => {
        if (node) {
          result += prefix + (isLeft ? "\\-- " : "|-- ") + node.val + "\n";
          print(prefix + (isLeft ? "    " : "|   "), node.right, false);
          print(prefix + (isLeft ? "    " : "|   "), node.left, true);
        }
      };

      print("", node, false);
      return result;
    };

    return printTree(this);
  }
}

class BSTree_helper {
  static createNode = (val) => {
    return new BSTree(val);
  };

  static findParent = (node, val) => {
    if (node.left === null && node.val > val) {
      return node;
    }
    if (node.right === null && node.val < val) {
      return node;
    }
    if (val < node.val) {
      if (node.left.val === val) return node;
      return BSTree_helper.findParent(node.left, val);
    } else {
      if (node.right.val === val) return node;
      return BSTree_helper.findParent(node.right, val);
    }
  };
}

let root = new BSTree(5);
root.insert(3);
root.insert(7);
root.insert(4);
root.insert(2);
root.insert(9);
root.insert(8);
root.insert(6);
root.insert(1);
root.insert(12);
root.insert(11);
root.insert(16);
root.insert(14);
root.insert(13);
root.insert(15);
root.insert(17);
console.log(`${root}`);

root.delete(12);
console.log(`${root}`);

// root.delete(9);
// console.log(`${root}`);

// root.delete(3);
// console.log(`${root}`);

// let root = new BSTree(2);
// root.insert(1);
// root.insert(7);
// root.insert(4);
// root.insert(8);
// root.insert(3);
// root.insert(6);
// root.insert(5);
// console.log(`${root}`);

// root.delete(4);
// console.log(`${root}`);
