/**
 * 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

说明: 叶子节点是指没有子节点的节点。

示例: 
给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。

 */

 /**
  * 解题思路
  * 在深度优先遍历过程中，记录当前路径的节点值的和
  * 在叶子节点处，判断当前路径的节点值的和是否等于目标值
  */

  /**
   * 解题步骤
   * 1.深度优先遍历二叉树，在叶子节点处，判断当前路径的节点值的和是否等于目标值，是就返回true
   * 2.遍历结束，如果没有匹配到就返回false
   */

var hasPathSum = function(root, sum) {
    if(!root){return false;}
    let res = false
    const dfs = (n,s) => {
        // console.log(n.val,s)
        if(!n.left&&!n.right && s===sum){
            res = true
        }
        if(n.left) dfs(n.left,s + n.left.val);
        if(n.right) dfs(n.right,s + n.right.val);
    }
    dfs(root.root.val)
    return res;
};