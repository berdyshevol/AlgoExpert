const distance = (v1, v2) => Math.abs(v1 - v2);

/**
 * O(log(n)) time in the worst case,
 * O(1) space in the worst case,
 */
function findClosestValueInBst(tree, target) {
  let closest = tree.value;
  
  let currentNode = tree;
  while (currentNode) {
    if (distance(currentNode.value, target) < distance(closest, target)) closest = currentNode.value;
    if (target < currentNode.value) currentNode = currentNode.left;
    else if (target > currentNode.value) currentNode = currentNode.right;
    else break;
  }
  
  return closest;
}

module.exports = { findClosestValueInBst };
