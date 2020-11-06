/**
 * 给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明：叶子节点是指没有子节点的节点。

 

示例 1：


输入：root = [3,9,20,null,null,15,7]
输出：2
示例 2：

输入：root = [2,null,3,null,4,null,5,null,6]
输出：5
 

提示：

树中节点数的范围在 [0, 105] 内
-1000 <= Node.val <= 1000
 */

 /**
  * 解题思路
  * 求最小深度，考虑使用广度优先遍历
  * 在广度优先遍历过程中，遇到叶子节点，停止遍历，返回节点层级
  */

  /**
   * 解题步骤
   * 1.广度遍历整颗树，记录每个节点的层级
   * 2.遇到叶子节点，返回节点层级，停止遍历
   */

var minDepth = function(root) {
    if(!root){return 0;}
    const q = [[root,1]];
    while(q.length){
        const [n,l] = q.shift();
        // console.log(n.val,l);
        if(!n.left&&!n.right){
            return l;
        }
        if(n.left){q.push}([n.left,l+1])
        if(n.right){q.push}([n.right,l+1])
    }
};
  //时间赋值度O(n),空间复杂度O(n)