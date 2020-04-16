const willCleanTheRoom=new Promise((resolve,reject)=>{

let cleanRoom=true;
if(cleanRoom){
    resolve("Cleaned the room")
}else{
    reject("Room is dirty")
}

})

const removeGarbage=new Promise((resolve,reject)=>{

let removeGarbage=true;
if(removeGarbage){
    resolve("Garbage is removed")
}else{
    reject("Garbage is not removed")
}

})

const getReward=new Promise((resolve,reject)=>{

let getReward=false;
if(getReward){
    resolve("Recieved reward")
}else{
    reject("No reward")
}

})


willCleanTheRoom.then(resolveMessage=>{
    console.log(resolveMessage)
    return removeGarbage;
}).then(resolveMessage=>{
    console.log(resolveMessage)
    return getReward;
}).then(resolveMessage=>{
    console.log(resolveMessage)
    
}).catch(rejectMessage=>{
    console.log(rejectMessage)
})

