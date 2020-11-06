/**
 * 
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

 */


 //解题思路
//1.先找出所有不包含重复字符的子串
//2.找出长度最大那个子串，返回其长度即可

//解题步骤
// 1.用算指针维护一个滑动窗口，用来剪切子串
// 2.不断移动右指针，遇到重复字符，就把左指针移动到重复字符的下一位
// 3.过程中，记录所有窗口的长度，并返回最大值



/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l = 0;
    var res = 0;
    const map = new Map();
    for(let r = 0 ;r< s.length;r+=1){
        if(map.has(s[r]) && map.get(s[r] >= l)){
            l = map.get(s[r]) + 1
        }
        res = Math.max(res,r-l+1)
        map.set(s[r],r)
    }
    return res;
};
//时间复杂度O(n)   空间复杂度O(m)