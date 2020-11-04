# learnCode
算法学习与案例  
数据结构：计算机存储，组织数据的方式  
算法：一系列解决问题的清晰指令  

### 时间复杂度计算
时间复杂度：定性描述该算法的运行时间（一个函数，用大O表示，比如O(1),O(n),O(logN)）  
```
O(1)
let i = 0;
i += 1

O(n)
for(let i=0;i<n;i+=1){
    console.log(i)
}
O(1)+O(n)=O(n)---先后顺序时间复杂度计算取大的
O(n)*O(n)=O(n^2)---嵌套时间复杂度
for(let i=0;i<n;i+=1){
    for(let j=0;j<n;j+=1){
        console.log(i,j)
    }
}

O(logN)
let i =1;
while(i<n){
    console.log(i)
    i *= 2;
}

```

### 空间复杂度计算
空间复杂度：算法在运行过程中临时占用存储空间大小的度量(一个函数，用大O表示，比如O(1),O(n),O(n^2))
```
O(1)
let i = 0;
i += 1

O(n)
const list = [];
for(let i=0;i<n;i+=1){
   list.push(i)
}

O(n^2)
const matrix = []
for(let i=0;i<n;i+=1){
    matrix([]);
    for(let j=0;j<n;j+=1){
        matrix[i].push(j)
    }
}
```

## 栈
栈是一个后进先出的数据结构(push,pop)  
javascript 中没有栈，但是可以用Array实现栈的所有功能  

#### 1 栈的应用场景
+ 需要后进先出的场景  
+ 十进制转二进制，判断字符串的括号是否有效，函数调用堆栈  

#### 2 JS中的函数调用堆栈
参考 /stack/2.callStack.js

## 队列
队列是一个先进先出的数据结构(push,pop)  
javascript 中没有栈，但是可以用Array实现栈的所有功能  

#### 1 队列的应用场景
+ 需要先进先出的场景  
+ 食堂排队打饭,js异步中的任务队列,计算最近请求次数  

#### 2 JS中的异步队列
```
setTimeout(()=>console.log(1),0)
console.log(2)

执行流程：setTimeout丢给webApis处理
         主事件执行console.log(2)
         webapi将setTimeout结果丢入 Callback Queue(队列)
         主事件执行完后，顺序执行队列中的console.log(2)

```

