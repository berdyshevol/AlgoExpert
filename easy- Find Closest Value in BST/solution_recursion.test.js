const { expect, describe } = require('@jest/globals');
const { findClosestValueInBst } = require('./solution_recursion');

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BST(10);
  root.left = new BST(5);
    root.left.left = new BST(2);
      root.left.left.left = new BST(1);
    root.left.right = new BST(5);
  root.right = new BST(15);
    root.right.left = new BST(13);
      root.right.left.right = new BST(14);
    root.right.right = new BST(22);

describe("findClosestValueInBst from solution recursive is passes all tests", () => {
  it ("case 1", () => {
    const expected = 13;
    const actual = findClosestValueInBst(root, 12);
    expect(actual).toEqual(expected);
  });
});

