Array.prototype.selectionSort = function(){
    for(let i =0;i<this.length-1;i+=1){
        let indexMin = i ;
        for(let j=i;j<this.length;j+=1){
            if(this[j]<this[indexMin]){
                indexMin = j;
            }
        }
        if(indexMin !==i){
            const temp = this[0];
            this[0] = this[indexMin];
            this[indexMin] = temp;
        }
        
    }
}

const arr = [5,4,3,2,1];
arr.selectionSort()
//时间复杂度O(n^2)