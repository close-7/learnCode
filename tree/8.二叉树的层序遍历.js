/**
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

 

示例：
二叉树：[3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [9,20],
  [15,7]
]
 */

 /**
  * 解题思路
  * 层序遍历顺序就是广度优先遍历
  * 在遍历的时候需要记录当前节点所处的层级，方便将其添加到不同的数组中
  */

  /**
   * 解题步骤
   * 1.广度优先遍历二叉树
   * 2.遍历过程中，记录每个节点的层级，并将其添加到不同的数组中
   */

var levelOrder = function(root) {
    if(!root){return []}
    // const q = [[root,0]];
    const q = []
    const res = []
    // while(q.length){
    //     const [n,l] = q.shift();
    //     // console.log(n.val,l);
    //     if(!res[l]){
    //         res.push([n.val])
    //     }else{
    //         res[l].push(n.val)
    //     }
    //     if(n.left){q.push([n.left,l+1])}
    //     if(n.right){q.push([n.right],l+1)}
    // }
    while(q.length){
        let len = q.length;
        res.push([])
        while(len--){
            const n = q.shift();
            res[res.length-1].push(n.val)
            if(n.left){q.push([n.left,l+1])}
            if(n.right){q.push([n.right],l+1)}
        }
    }
    return res;
};
  //时间赋值度O(n),空间复杂度O(n)