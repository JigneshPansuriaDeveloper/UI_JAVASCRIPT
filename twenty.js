//literal notation
var country = {
    name:'India',
    capital:'Delhi',
    population:87876875
}
undefined
typeof(country)
"object"
country.name
"India"
country.population
87876875
country.population=10
10
country
{name: "India", capital: "Delhi", population: 10}
country.language="Hindi"
"Hindi"
country
{name: "India", capital: "Delhi", population: 10, language: "Hindi"}
delete country.population
true
country
{name: "India", capital: "Delhi", language: "Hindi"}
country['capital']
"Delhi"
country['population']
undefined
country['language']
"Hindi"
country['language']="English"
"English"
country
{name: "India", capital: "Delhi", language: "English"}

//Constructor
var car = new Object()
var car = new Object()
undefined
typeof(car)
"object"
car.color="red"
"red"
car.brand="BMW"
"BMW"
car
{color: "red", brand: "BMW"}



var sayhi = {
    firstname:'John',
    lastname:'Eva',
    greet:function(){
        return "Hi Welcome to Objects"
    }
}

sayhi.greet()
"Hi Welcome to Objects"

var calc={
    sum:function(a,b){
        return a+b
    },
    sub: function(a,b){
        return a-b
    }
}

var total = calc.sum(111,222)

///////////