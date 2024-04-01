const distance = (v1, v2) => Math.abs(v1 - v2);
/**
 * 
 * O(log(n)) time
 * O(n) space
 */
function findClosestValueInBstHelper(tree, target, currentClosest) {
  if (tree === null) return currentClosest;
  let closest = currentClosest;
  if (distance(tree.value,target) <distance(currentClosest, target)) closest = tree.value;
  
  if (target < tree.value) return findClosestValueInBstHelper(tree.left, target, closest);
  else if (target > tree.value) return findClosestValueInBstHelper(tree.right, target, closest);
  else return target;
}

function findClosestValueInBst(tree, target) {
  return findClosestValueInBstHelper(tree, target, tree.value);
}

module.exports = { findClosestValueInBst }; 