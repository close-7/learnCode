/**
 * 
反转一个单链表。

示例:
                          
输入: 1->2->3->4->5->NULL 
输出: 5->4->3->2->1->NULL
进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
 */

/**
 * 解题思路
 * 反转两个节点：将n+1的next指向n。
 * 反转多个节点：双指针遍历链表，重复上述操作
 */

/**
 * 解题步骤
 * 1.双指针一前一后遍历链表
 * 2.反转双指针
 */
function ListNode(val){
    this.val = val;
    this.next = null
}
var l1 = function(a,b,c,m,n){
   var a1 = new ListNode(a) 
   var b1 = new ListNode(b)
   var c1 = new ListNode(c)
   var m1 = new ListNode(m)
   var n1 = new ListNode(n)
   a1.next = b1;
   b1.next = c1;
   c1.next = m1;
   m1.next = n1;
   return a1
}
var d = l1(1,2,3,4,5)

 var reverseList = function(head){
     let p1 = head;
     let p2 = null;
     while(p1){
        //  console.log(p1.val,p2 && package.val)
         const tmp = p1.next //2 3 4 5 n
         p1.next = p2       //n 1 2 3 4
         p2 = p1;           //1 2 3 4 5
         p1 = tmp;          //2 3 4 5 n
     }
    //  console.log(p1&&p1.val,p2&&p2.val)
    return p2
 }
 var go  = reverseList(d)
 console.log(1)
   //时间复杂度O(n)   空间复杂度O(1)