/**
 * 给定一个链表，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

如果链表中存在环，则返回 true 。 否则，返回 false 。

 

进阶：

你能用 O(1)（即，常量）内存解决此问题吗？

 

示例 1：



输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
示例 2：



输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。
示例 3：



输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
 

提示：

链表中节点的数目范围是 [0, 104]
-105 <= Node.val <= 105
pos 为 -1 或者链表中的一个 有效索引 。

 */

  /**
  * 解题思路
  * 用一快一慢两个指针遍历链表，如果指针能够相逢，那么链表就有环
  */

  /**
   * 解题步骤
   * 1.用一快一慢两个指针遍历链表，如果指针能够相逢，那么就返回true
   * 2.遍历结束后，还没有相逢就返回false
   */
  function ListNode(val){
    this.val = val;
    this.next = null
}
var l1 = function(a,b,c,m){
   var a1 = new ListNode(a) 
   var b1 = new ListNode(b)
   var c1 = new ListNode(c)
   var m1 = new ListNode(m)
   a1.next = b1;
   b1.next = c1;
   c1.next = m1;
   // let p  = a;
   return a1
}
var d = l1(3,2,0,-4)

   var hasCycle = function(head){
       let p1 = head ;
       let p2 = head ;
       while(p1&&p2&&p2.next){
           p1 = p1.next;
           p2 = p2.next;
           if(p1 === p2){
               return true
           }
       }
       return false
   }

   var go  = hasCycle(d)
    console.log(1)
    
    //时间复杂度O(n)   空间复杂度O(1)