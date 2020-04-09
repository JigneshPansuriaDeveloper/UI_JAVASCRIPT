var a = 10;

function test(){
    var b =20;
    console.log("inside A>>>>>",a)
    console.log("inside B>>>>>",b)
    return "hiii"
}
test()

console.log("outside A>>>>>",a)
//console.log("outside B>>>>>",b)


for(i=0;i<2;i++){
    let c = "hiii"
    console.log("Inside C",c)
}

console.log("outside C",c)


mul(5)(10)(15)

function mul(a){
    console.log("first",a)
    return function(b){
        console.log("second",b)
        return function(c){
            console.log("third",c)
            return a*b*c 
        }
    }
}

function mul(a,b,c){
    return a*b*c
}
