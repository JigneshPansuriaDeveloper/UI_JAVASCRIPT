/*function add(a,b){
   console.log("hiiii")
}

add()
*/

(function(){
    console.log("hoiii")
}())

///

function looping(userInput){
    for(i=0;i<userInput;i++){
        console.log(i)
    }
}


looping(10)

function * looping(userInput){
    for(i=0;i<userInput;i++){
       yield(i)
    }
}

var data = looping(10)
undefined
data.next()
{value: 0, done: false}
data.next()
{value: 1, done: false}
data.next()
{value: 2, done: false}
data.next()
{value: 3, done: false}
data.next()
{value: 4, done: false}
data.next()
{value: 5, done: false}
data.next()
{value: 6, done: false}
data.next()
{value: 7, done: false}
data.next()
{value: 8, done: false}
data.next()
{value: 9, done: false}
data.next()
{value: undefined, done: true}