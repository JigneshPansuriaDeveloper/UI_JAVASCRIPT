var a =10
var b = 10
a+b

function add(a,b){
    return a+b
}

//functions
function isEven(userInput){
    var result;
    if(userInput%2==0){
        result = "number is even"
    }else{
        result = "number is odd"
    }

    return result
}

isEven(4)
"number is even"
isEven(09797)
"number is odd"

//Method
var isEven = function(userInput=10){
    var result;
    if(userInput%2==0){
        result = "number is even"
    }else{
        result = "number is odd"
    }

    return result
}

isEven(10)


//Es6

function add(a,b){
    return a+b
}
//Arrow function
var add = (a,b) => { return a+b}
add(1,2)
