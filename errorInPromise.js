new Promise((res,rej)=>{

    throw "error"

}).catch((err)=>{
    console.log(err)
})