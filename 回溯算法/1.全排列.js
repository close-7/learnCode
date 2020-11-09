/**
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。

示例:

输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
 */

/**
 * 解题思路
 * 要求：所有排列情况，没有重复元素
 * 有出路，有死路
 * 考虑使用回溯算法
 */

/**
 * 1.递归模拟出所有情况
 * 2.遇到包含重复元素的情况，就回溯
 * 3.手机所有到达递归终点的情况，并返回
 */


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = [];
    const backtrack = (path) =>{
        if(path.length === nums.length){
            res.push(path);
            return
        }
        nums.forEach(n=>{
            if(path.includes(n)){return ;}
            backtrack(path.concat(n))
        })
    }
    backtrack([]);
    return res;
};
console.log(permute([1,2]))
