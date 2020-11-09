/**
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

说明：解集不能包含重复的子集。

示例:

输入: nums = [1,2,3]
输出:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]

 */

 /**
 * 解题思路
 * 要求：所有子集，没有重复元素
 * 有出路，有死路
 * 考虑使用回溯算法
 */

/**
 * 1.递归模拟出所有情况
 * 2.保证接的数字数字都是后面的数字
 * 3.收集所有到达递归终点的情况，并返回
 */



/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = [];
    const backtrack = (path,l,start)=>{
        if(path.length === l){
            res.push(path);
            return;
        }

        for(let i = start;i<nums.length;i+=1){
            backtrack(path.concat(nums[i],l,i+1))
        }
    };
    for(let i = 0;i <= nums.length; i+=1){
        backtrack([],i,0)
    }
    return res;
};

//时间复杂度O(2^n)