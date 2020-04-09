var a = ['a','b','c']
var b = [1,2,3,4]
var c = [true,false,true,true]

var d = [1,2,'false',true,'a',false,3,4,'a','a',3]

var d = [1,2,'false',true,'a',false,3,4,'a','a',3]
undefined
d[0]
1
d[2]
"false"
d[7]
4
d[10]
3
d[11]

var city = ["London","NewYork","Delhi","Helsinki"]


var city = ["London","NewYork","Delhi","Helsinki"]
undefined
city
(4) ["London", "NewYork", "Delhi", "Helsinki"]
typeof(city)
"object"
city.length
4



var city = ["London","NewYork","Delhi","Helsinki"]
undefined
city
(4) ["London", "NewYork", "Delhi", "Helsinki"]
typeof(city)
"object"
city.length
4

Push => Add always at the end of array
Pop=>  Remove always at the end of array
Shift => Always remove from the begining
Unshift => Add always at the begining of array


var city = ["London","NewYork","Delhi","Helsinki"]
undefined
city.push('Hongkong')
5
city
(5) ["London", "NewYork", "Delhi", "Helsinki", "Hongkong"]
city.push('venice')
6
city
(6) ["London", "NewYork", "Delhi", "Helsinki", "Hongkong", "venice"]
city.pop()
"venice"
city.pop(3)
"Hongkong"

var city =  ["London", "NewYork", "Delhi", "Helsinki", "Hongkong", "venice"]
undefined
city.unshift('Sydeny')
7
city
(7) ["Sydeny", "London", "NewYork", "Delhi", "Helsinki", "Hongkong", "venice"]

var city =  ["London", "NewYork", "Delhi", "Helsinki", "Hongkong", "venice"]
undefined
city.slice(1)
(5) ["NewYork", "Delhi", "Helsinki", "Hongkong", "venice"]
city.slice(1,4)
(3) ["NewYork", "Delhi", "Helsinki"]
var city =  ["London", "NewYork", "Delhi", "Helsinki", "Hongkong", "venice"]
undefined
city.slice(2)
(4) ["Delhi", "Helsinki", "Hongkong", "venice"]
var city =  ["London", "NewYork", "Delhi", "Helsinki", "Hongkong", "venice"]
undefined
city.splice(3,0,'Amsterdam')
[]
city
(7) ["London", "NewYork", "Delhi", "Amsterdam", "Helsinki", "Hongkong", "venice"]
city.splice(3,0,'Boston','Innsburg')
[]
city
(9) ["London", "NewYork", "Delhi", "Boston", "Innsburg", "Amsterdam", "Helsinki", "Hongkong", "venice"]
city.splice(2,2,'Mumbai','Bali')
(2) ["Delhi", "Boston"]
city
(9) ["London", "NewYork", "Mumbai", "Bali", "Innsburg", "Amsterdam", "Helsinki", "Hongkong", "venice"]

//Luck Game
Generate one random number between 1 to 20
Now take input from the user as number 
if both match user input generated number
user win else user loose

V2
Total there will be 5 chance
every response add to you array and
save that array in Browser
after 5 chance say game over 



var a = [1,2,3,4]
var b = ['a','b','c']
a+b

var a = [1,2,3,4]
var b = ['a','b','c']
undefined
a+b
"1,2,3,4a,b,c"
a.concat(b)
(7) [1, 2, 3, 4, "a", "b", "c"]
b.concat(a)
(7) ["a", "b", "c", 1, 2, 3, 4]

isNaN('aaa')
true
isNaN(887)
false

isNaN('aaa')
true
isNaN(887)
false
var a = [1,2,3,4]
var b = ['a','b','c']
var c = [5,6,7,8]
undefined
var c = "hi"
undefined
Array.isArray(a)
true
Array.isArray(c)
false


var b = ['a','b','c']
var a = [1,2,3,4]
var b = ['a','b','c']
var c = [5,6,7,8]

var b = ['a','b','c']

undefined
b.toString()
"a,b,c"
var a = [1,2,3,4]
var b = ['a','b','c']
var c = [5,6,7,8]
undefined
a.concat(b,c)
(11) [1, 2, 3, 4, "a", "b", "c", 5, 6, 7, 8]

a.join()
"1,2,3,4"