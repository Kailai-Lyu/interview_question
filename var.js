const arr = []
function createFun(){
    for(var i=0;i<3;i++){
        arr.push(()=>{
            console.log(i)
        })
    }
}

createFun()
arr[0]()
arr[1]()
arr[2]()