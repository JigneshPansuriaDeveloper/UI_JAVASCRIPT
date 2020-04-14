/*let add =function(num1,num2){
    return num1+num2;
}*/

let add=(num1,num2)=>num1+num2

let mul =function(num1,num2){
    return num1*num2
}


const calc=function(calcFunction,num1,num2){ 
    return calcFunction(num1,num2); // mul(30,20)
}




let result =calc(add,30,20);
console.log("callback result",result);


/*const calc=function(operator,num1,num2){
    if(operator == 'add'){
        console.log("addition=",num1+num2);
    }
    if(operator == 'mul'){
        console.log("addition=",num1*num2);
    }
    if(operator == 'div'){
        console.log("addition=",num1/num2);
    }

}

let result =calc('add',1,2);*/










function callback(){
    console.log('you have called callback from Host')
}


function host(cb){
    cb(); // callback()
}


host(callback);