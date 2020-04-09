function robot(name){
    this.name=name;
    this.legs = 2;
    this.color="white"
}

var pepper = new robot('Pepper');

function human(name){
    this.name=name
    this.city="Newyork"
}

var john = new human('John')


human.prototype = new robot()
john.legs
2
john.color
"white"


function robot(name){
    this.name=name;
    this.legs = 2;
    this.color="white"
}

var pepper = new robot('Pepper');

function human(name){
    this.name=name
    this.city="Newyork"
}

var john = new human('John')
undefined
john
human {name: "John", city: "Newyork"}
pepper
robot {name: "Pepper", legs: 2, color: "white"}
human.prototype = new robot()
robot {name: undefined, legs: 2, color: "white"}
var john = new human('John')
undefined
john
human {name: "John", city: "Newyork"}name: "John"city: "Newyork"__proto__: robotname: undefinedlegs: 2color: "white"__proto__: Object
john.legs
2
john.color
"white"
john
human {name: "John", city: "Newyork"}
robot.prototype = new human()
human {name: undefined, city: "Newyork"}
var pepper = new robot('Pepper');

undefined
pepper
robot {name: "Pepper", legs: 2, color: "white"}
pepper.city
"Newyork"



function method1(){
    add,
    sub
}


function method2(){
    tax 
}