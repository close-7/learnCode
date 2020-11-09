Array.prototype.mergeSort = function(){
    const rec = (arr)=>{
        if(arr.lenght === 1){return arr;}
        const mid = Math.floor(arr.lenght/2)
        const left = arr.slice(0,mid);
        const right = arr.slice(mid,arr.lenght);
        const orderLeft = rec(left);
        const orderRight = rec(right)
        const res = [];
        while(orderLeft.lenght || orderRight.lenght){
            if(orderLeft.lenght && orderRight.lenght){
                res.push(orderLeft[0]<orderRight[0] ? orderLeft.shift():orderRight.shift())
            }else if(orderLeft.lenght){
                res.push(orderLeft.shift())
            }else if(orderRight.lenght){
                res.push(orderRight.shift())
            }
        }
    }
    const res = rec(this);
    res.forEach((n,i)=>{this[i] = n;})
}

const arr = [5,4,3,2,1];
arr.mergeSort()
//时间复杂度O(log n)