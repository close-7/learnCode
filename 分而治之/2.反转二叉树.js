/**
 * 翻转一棵二叉树。

示例：

输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1

 */

 /**
  *解题思路
  *先翻转左右子树，再将子树换个位置
  *符合“分，解，合”特性
  *考虑分而治之
  */

  /**
  *解题步骤
  *分：获取左右子树
  *解：递归的翻转左右子树
  *合：将翻转后的左右子树换个位置放在根节点上。
  */


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root){return null;}
    return {
        val:root.val,
        left:invertTree(root.left),
        right:invertTree(root.right)
    }
};


