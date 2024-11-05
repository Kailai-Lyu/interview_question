let obj = {
    name: "小明",
    age: 18,
    arr:[["q","p"],5,6,9],
    sayName(){
        console.log(this.name)
    }
}

let oo
// oo = obj
// oo = JSON.parse(JSON.stringify(obj))  //无法深拷贝对象的方法
oo = copy(obj, true)

oo.arr.unshift("start")
console.log(obj.sayName===oo.sayName)

console.log(obj)
console.log(oo)




function copy(origin, isDeep){
    let res = {}
    if(origin instanceof Array){
        res = []
    }
    for(let key in origin){
        let value = origin[key]
        res[key] = (isDeep && typeof value==="object" && value!==null) ? copy(value, true) : value
    }
    return res
}