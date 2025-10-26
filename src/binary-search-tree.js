const { NotImplementedError } = require('../lib/errors');
const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this._root = null;
  }
  root() {
    // Remove line below and write your code here
    return this._root;
  }

  add(data) {
    // Remove line below and write your code here
    this._root = addInside(this._root, data);

    function addInside(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addInside(node.left, data);
      } else {
        node.right = addInside(node.right, data);
      }
      return node;
    }
  }

  find(data) {
    // Remove line below and write your code here
    return searchNode(this._root, data);
    function searchNode(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) return node;
      return data < node.data
        ? searchNode(node.left, data)
        : searchNode(node.right, data);
    }
  }

  has(data) {
    // Remove line below and write your code here
    return searchInside(this._root, data);
    function searchInside(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }

      return data < node.data
        ? searchInside(node.left, data)
        : searchInside(node.right, data);
    }
  }

  remove(data) {
    // Remove line below and write your code here
    this._root = removeNode(this._root, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    // Remove line below and write your code here
    if (!this._root) {
      return;
    }
    let node = this._root;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    // Remove line below and write your code here
    if (!this._root) {
      return;
    }
    let node = this._root;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
