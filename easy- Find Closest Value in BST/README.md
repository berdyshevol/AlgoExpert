## Find Closest Value In BST


Write a function that takes in a Binary Search Tree (BST) and a target integer value and returns the closest value to that target value contained in the BST.

You can assume that there will only be one closest value.

Each `BST` node has an integer `value`, a `left` child node, and a `right` child node. 

> A node is said to be a valid `BST` node if and only if it satisfies the BST property:
> 1) is `value` is strictly greater than the values of every node to its left; 
> 2) it `value` is less than equal to the values of every node to its right; 
> 3) and its children nodes are either valid BST nodes themselves or `None` / `null`.

Sample Input:
`tree` =    10
          /    \
         5      15
       /   \   /  \
      2     5 13   22
    /           \
   1             14
  
`target` = 12

Sample Output
```
  13
```
