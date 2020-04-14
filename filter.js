
 // Removing duplicate value (Unique values)
let arr=[1,2,5,3,5,6,2,1]; // [1,2,5,3,6]


let result =arr.filter((data,index)=>arr.indexOf(data) === index)

let ary =[ ... new Set(arr)]  ... spread operator


console.log("unique values",result)

console.log("set method",ary);
