try {
    // try不能捕获语法错误，例如不合法的字符：#
    aaaaa
} catch(err){
    console.log("Error is catched in try!!")
    console.log(err)
}


new Promise((res,rej)=>{
    csl
    throw "can't reach here"

}).catch((err)=>{
    console.log("Error is catched in Promise!!")
    console.log(err)
})
