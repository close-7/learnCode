let mySet = new Set(); //创建集合

mySet.add(1); //添加元素到集合
mySet.add(5);
mySet.add(5);
mySet.add('some');
let o = {a:1,b:2}
mySet.add(o);

const has = mySet.has(1)  //判断集合中是否有某元素

mySet.delete(5) //删除集合中的元素


//迭代set 
for(let item of mySet){
    console.log(item)
}

for(let item of mySet.keys()){
    console.log(item)
}

for(let item of mySet.values()){
    console.log(item)
}

for(let [key,value] of mySet.entries()){
    console.log(key,value)
}

//set array互转
const myArr = [...mySet];
const myArr = Array.from(mySet);

const mySet2 = new Set([1,2,3,4])

//求交集
const intersection = new Set([...mySet].filter(x=>mySet2.has(x)))

//求差集
const difference = new Set([...mySet].filter(x=>!mySet2.has(x)))


