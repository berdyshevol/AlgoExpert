const hasLeftNode = tree => tree?.left !== null;
const hasRightNode = tree => tree?.right !== null;
const isEndNode = tree => !(hasLeftNode(tree) && hasRightNode(tree));
const distance = (v1, v2) => Math.abs(v1 - v2);
const closestValue = (target, value, childNodeClosestValue) => {
  if (childNodeClosestValue === undefined) return value;
  if (distance(target, value) < distance(target, childNodeClosestValue)) return value;
  return childNodeClosestValue
}

function findClosestValueInBst(tree, target) {
  const value = tree.value;
  if (isEndNode(tree)) return value;
  let leftClosestValue = hasLeftNode(tree) ? findClosestValueInBst(tree.left, target) : undefined;
  let rightClosestValue = hasRightNode(tree) ? findClosestValueInBst(tree.right, target) : undefined;
  if (target < value) return closestValue(target, value, leftClosestValue);
  return  closestValue(target, value, rightClosestValue);
}
