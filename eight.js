var a = 10

if(a%2==0){
    console.log('Number is even')
}else{
    console.log('Number is odd')
}



var a = 12
if(a%2==0){
    console.log('Number is even')
}else if(a%3==0){
    console.log('Number is divisible by 3')
}
else{
    console.log('Number is odd')
}

var a = 12
if(a%2==0){
    console.log('Number is even')
}
if(a%5==0){
    console.log('Number is divisible by 3')
}
if(a%3==0){
    console.log('Number is divisible by 3')
}


var a = 12
if(a%2==0 && a%5==0 && a%3==0){
    console.log('Number is divisible')
}
if(a%5==0){
    console.log('Number is divisible by 3')
}
if(a%3==0){
    console.log('Number is divisible by 3')
}


//Ternery
var a = 10
a%2==0 ? a+1:a-1
a%2==0 ? 'true':'false'

//If condition before ? is true than first part else second part

var a = 1
a?"hii":"bie"
var a = 1
a?"hii":"bie"
"hii"
var a = 0
a?"hii":"bie"
"bie"


var a = "aaaa"
a?"hii":"bie"

var a = ""
a?"hii":"bie"

var a = ""
typeof(a)=="string"?"hii":"bie"


//Luck Game
Generate one random number between 1 to 20
Now take input from the user as number 
if both match user input generated number
user win else user loose

