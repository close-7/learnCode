/**
写一个 RecentCounter 类来计算最近的请求。

它只有一个方法：ping(int t)，其中 t 代表以毫秒为单位的某个时间。

返回从 3000 毫秒前到现在的 ping 数。

任何处于 [t - 3000, t] 时间范围之内的 ping 都将会被计算在内，包括当前（指 t 时刻）的 ping。

保证每次对 ping 的调用都使用比之前更大的 t 值。

示例:
输入:inputs = ["RecentCounter","ping","ping","ping","ping"], 
    inputs = [[],[1],[100],[3001],[3002]]
输出：[null,1,2,3,3]
 */


 /**
  * @param {number}
  * @return {number}
  */


//解题思路
// 1.越早发出的请求越早不在最近3000ms内的请求
// 2.满足先进先出，考虑用队列

//解题步骤
// 1.有新请求就入队，3000ms前发出的请求出队
// 2.队列的长度就是最近请求次数

var RecentCounter = function(){
    this.q = [];
}

RecentCounter.prototype.ping = function(t){
    this.q.push(t);
    while(this.q[0] < t-3000){
        this.q.shift()
    }
    return this.q.length;
}

//时间复杂度O(n)   空间复杂度O(n)








 
/**
 * Your RecentCounter object will be instantiated and called as such:
 * RecentCounter* obj = new RecentCounter();
 * int param_1 = obj->ping(t);
 */