
console.log(1);
console.log(2);
window.setTimeout(() => {
  console.log(3);
}, 10);

console.log(4);




let i = 1;

window.setTimeout(() => {
  console.log(i)
}, 10);



let intervalID;;

intervalID = window.setInterval(() => {
  console.log(1);
}, 2000);

console.log(intervalID)
window.setTimeout(() => {
  clearInterval(intervalID);
},5000)





