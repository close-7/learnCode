/**
 * 
给定两个二叉树，编写一个函数来检验它们是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

示例 1:

输入:       1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

输出: true
示例 2:

输入:      1          1
          /           \
         2             2

        [1,2],     [1,null,2]

输出: false
示例 3:

输入:       1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

输出: false
 */

 /**
  *解题思路
  *两个数：根节点的值相同，左子树相同，右子树相同
  *符合“分，解，合”特性
  *考虑分而治之
  */

  /**
  *解题步骤
  *分：获取两个数的左子树和右子树
  *解：递归的判断两个数的左子树是否相同，右子树是否相同
  *合：将上述结果合并，如果根节点的值也相同，树就相同。
  */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(!p&&!q){return true;}
    if( p && q  
        && q.val == p.val 
        && isSameTree(p.left,q.left)
        && isSameTree(p.right,q.right)
    ){
        return true;
    }
    return false;
};
// 时间复杂度、空间复杂度O(n)