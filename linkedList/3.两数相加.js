/**
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
方法：初等数学
 */

/**
 * 解题思路
 * 模拟相加操作
 * 需要遍历链表
 */

/**
 * 1.新建一个空链表。
 * 2.遍历被相加的两个链表，模拟相加操作，将个位数追加到新链表上，将十位数留到下一位相加
 * 
 */
 function ListNode(val){
     this.val = val;
     this.next = null
 }
 var l1 = function(a,b,c){
    var a1 = new ListNode(a) 
    var b1 = new ListNode(b)
    var c1 = new ListNode(c)
    a1.next = b1;
    b1.next = c1;
    // let p  = a;
    return a1
 }
var d = l1(1,2,3)
var e = l1(2,3,4)
//  var a = new ListNode(1) 
//  var b = new ListNode(2)
//  var c = new ListNode(3)
 

 var addTwoNumbers = function(d,e){
     const l3 = new ListNode(0);
     let p1 = d;
     let p2 = e;
     let p3 = l3;
     let carry = 0
     while(p1 || p2){
         const v1 = p1 ? p1.val : 0;
         const v2 = p2 ? p2.val : 0;
         const val = v1 + v2 + carry;
         carry = Math.floor(val/10);
         p3.next = new ListNode(val % 10);
         if(p1) p1 = p1.next;
         if(p2) p2 = p2.next;
         p3 = p3.next;
     }
     if(carry){
         p3.next = new ListNode(carry)
     }
     return l3.next;
 }
var go  = addTwoNumbers(d,e)
 console.log(1)
    //时间复杂度O(n)   空间复杂度O(n)