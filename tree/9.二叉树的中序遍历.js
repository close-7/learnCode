/**
 * 
给定一个二叉树的根节点 root ，返回它的 中序 遍历。

示例 1：


输入：root = [1,null,2,3]
输出：[1,3,2]
示例 2：

输入：root = []
输出：[]
示例 3：

输入：root = [1]
输出：[1]
示例 4：


输入：root = [1,2]
输出：[2,1]
示例 5：


输入：root = [1,null,2]
输出：[1,2]
 
 */

 //递归版
 var inorderTraversal = function(root) {
    const res = [];
    const rec = (n)=>{
        if(!n) return;
        rec(n.left);
        res.push(n,val);
        rec(n.right)
    }
    rec(root);
    return res
};

//迭代版本-用栈来实现
var inorderTraversal = function(root) {
    const res = [];
    const stack = [];
    let p = root;
    while(stack.length || p){
        while(p){
            stack.push(p);
            p=p.left
        }
        const n = stack.pop();
        res.push(n.val);
        p=n.right
    }
    return res;
};
