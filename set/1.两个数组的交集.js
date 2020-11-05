/**
 * 给定两个数组，编写一个函数来计算它们的交集。

示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
示例 2：

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
 

说明：
输出结果中的每个元素一定是唯一的。
我们可以不考虑输出结果的顺序。

 */

/**
 * 解题思路
 * 求交集且无序且唯一
 * 使用集合
 */

/**
 * 1.用集合对nums1去重
 * 2.遍历nums1，筛选出nums2中也包含的值
 */

var intersection = function(nums1,nums2){
   return [...new Set(nums1)].filter(n => new Set(nums2).has(n))
}

// -----------------优化--------------------------------------
var intersection = function(nums1,nums2){
    return [...new Set(nums1)].filter(n => nums2.includes(n))
 }

//时间复杂度O(m*n) 空间赋值度O(m)

