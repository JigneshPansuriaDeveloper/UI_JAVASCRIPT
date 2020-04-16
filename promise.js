// Promise - >api resolving
//Promise ->resolve,reject


const willCleanTheRoom=new Promise((resolve,reject)=>{

let cleanRoom=false;
if(cleanRoom){
    resolve("Cleaned the room")
}else{
    reject("Room is dirty")
}

})

/*willCleanTheRoom.then((resolveStatus)=>{
console.log(">>>",resolveStatus)
}).catch((rejectStatus)=>{
    console.log("???",rejectStatus)
})*/

willCleanTheRoom.then((resolveStatus)=>{
console.log(">>>",resolveStatus)
},(rejectStatus)=>{
    console.log("??",rejectStatus);
})

