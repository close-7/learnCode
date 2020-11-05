/**
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

示例 1:

输入: 1->1->2
输出: 1->2
示例 2:

输入: 1->1->2->3->3
输出: 1->2->3

 */

 /**
  * 解题思路
  * 因为链表是有序的，所以重复元素一定是相邻的
  * 遍历链表，如果发现当前元素和下个元素值相同就删除下个元素值
  */

  /**
   * 解题步骤
   * 1.遍历链表，如果发现当前元素和下个元素值相同就删除下个元素值
   * 2.遍历结束后，返回原链表的头部
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
var d = l1(2,2,2,3)

var deleteDuplicates = function(head){
    let p = head;
    while(p && p.next){
        if(p.val == p.next.val){
            p.next = p.next.next
        }else{
            p = p.next
        }
    }
    return head
}

var go  = deleteDuplicates(d)
console.log(1)

    //时间复杂度O(n)   空间复杂度O(1)