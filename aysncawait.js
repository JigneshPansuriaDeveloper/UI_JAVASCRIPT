const doChoes=async ()=>{

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

let getReward=true;
if(getReward){
    resolve("Recieved reward")
}else{
    reject("No reward")
}

})

try{
let isRoomClean=await willCleanTheRoom;
console.log("###",isRoomClean)
}catch(err){
console.log(err);
return
}finally{
    console.log("called no matter")
}

try{
let isremoveGarbage=await removeGarbage;
console.log("###",isremoveGarbage)
}catch(err){
console.log(err);
return
}finally{
    console.log("called no matter")
}

try{
let isgetReward=await getReward;
console.log("###",isgetReward)
}catch(err){
console.log(err);
return
}finally{
    console.log("called no matter")
}

}



console.log("Before Async await called");
console.log(doChoes())

console.log("After Async await called")