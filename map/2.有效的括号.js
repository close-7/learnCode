/** 
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

1.左括号必须用相同类型的右括号闭合。
2.左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例：
输入:"()"
输出:true

输入:"()[]{}"
输出:true
*/

/**
 * @param{string}
 * @return {boolean}
 */

 //解题思路
//1.对于没有闭合的左括号而言，越靠后的左括号，对应的右括号越靠前
// 输入:"([])"
// 输出:true
//2.满足后进先出，考虑用栈

//解题步骤
// 1.新建一个栈。
// 2.扫描字符串，遇到左括号就入栈，遇到和栈顶括号类型匹配的右括号就出栈，类型不匹配直接判定不合法
// 3.最后栈空了就合法，否则就不合法

var isValid = function(s){
    if(s.length % 2 === 1){ return false}
    //如果是基数就直接返回false
    const stack = [];

    const map = new Map();
    map.set('(',')')
    map.set('[',']')
    map.set('{','}')

    for(let i = 0;i < s.length; i++){
        const c = s[i]
        if(map.has(c)){
            stack.push(c)
        }else{
            const t = stack[stack.length-1];  //栈顶元素
            if(map.get(t) === c){
                stack.pop()
            }else{
                return false
            }

        }
    }
    return stack.length === 0
}

var str = '()[]{}'
console.log(isValid(str))
//时间复杂度O(n)   空间复杂度O(n)

