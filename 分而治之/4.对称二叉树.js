/**
 * 给定一个二叉树，检查它是否是镜像对称的。

 

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3

 */

 /**
  *解题思路
  *转换为：左右子树是否镜像
  *分解为：树1的左子树和树2的左子树是否镜像，树1的右子树和树2的右子树是否镜像，
  *考虑分而治之
  */

  /**
  *解题步骤
  *分：获取数的左子树和右子树
  *解：递归的判断树1的左子树和树2的左子树是否镜像，树1的右子树和树2的右子树是否镜像，
  *合：将上述问题成立，如果根节点的值也相同，两个数就镜像。
  */

var isSymmetric = function(root) {
    if(!root) return true;
    const isMirror = (l,r)=>{
        if(!l && !r) return true;
        if( l&& r && l.val === r.val &&
            isMirror(l.left,r.left)&&
            isMirror(l.right&&r.right)
        ){
            return true
        }
        return false
    }
    return isMirror(root.left,root.right);
};