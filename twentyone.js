var first="John"
var second="Eva"


var sayhi = {
    first:'Ammy',
    second:'Jackson',
    greet:function(){
        console.log(`Hi ${this.first} and ${this.second} Welcome to Objects`)
    }
}


sayhi.greet()


var city = [
    {name:'Delhi',country:'India'},
    {name:'Helsinki',country:'Finland'},
    {name:'Paris',country:'France'}
]

city
(3) [{…}, {…}, {…}]
city[1]
{name: "Helsinki", country: "Finland"}
city[1].country
"Finland"

////////////////////////////////////

function calc(){
    this.sum= function(a,b){return a+b}
    this.sub= function(a,b){return a-b}
}


var mycalc = new calc()
mycalc.sum(1,2)



function database(){
    this.find=function(table){ return `Select * from ${table}`}
    this.rank= function(table,num){ return `Select * from ${table} where rank=${num}`}
}

var student = new database()
student.find('student')

var employee = new database()
employee.rank('employee',"manager")
////////////////////////////

var bob = new Object()
bob.age=10
bob.city="NewYork"
bob.setAge= function(newAge){
    bob.age=newAge
}

var tony = new Object()
tony.age=10
tony.city="NewYork"
tony.setAge= function(newAge){
    tony.age=newAge
}

let createAge = function(newAge){
    this.age=newAge
}

var bob = new Object()
bob.age=10
bob.city="NewYork"
bob.setAge= createAge

var tony = new Object()
tony.age=10
tony.city="NewYork"
tony.setAge= createAge