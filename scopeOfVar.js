const arr = []
function createFun(){
    for(var i=0;i<3;i++){
        arr.push(()=>{
            let temp = i
            console.log(temp)
        })
    }
}

createFun()
arr[0]()
arr[1]()
arr[2]()

//3 3 3