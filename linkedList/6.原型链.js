const obj = {};
const func = ()=>{};
const arr = [];

console.log(obj instanceof Object) //true
console.log(func instanceof Object) //true
console.log(arr instanceof Object) //true

Object.prototype.x = '123'
console.log(obj.x) //123-->对象上没有找到x属性，那么就会沿着原型链找x属性
Function.prototype.y='y'
console.log(func.x,func.y) //123 y

//instanceof原理与实现
//遍历A的原型链，如果找到B.prototype,返回true，否则返回false

const instanceOf = (A,B)=>{
    let p = A;
    while(p){
        if(p === B.prototype){
            return true
        }
        p = p.__proto__
    }
    return false
}

/**
 * var foo = {},F = function(){}；
 * Object.prototype.a = 'value a '
 * Function.prototype.b = 'value b'
 * 
 * console.log(foo.a)--->value a
 * console.log(foo.b)--->undefind
 * 
 * console.log(F.a)---->value a
 * console.log(F.b)---->value b
 */


