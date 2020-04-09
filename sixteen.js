var a =  ['a','b','c','d']

for(i=0;i<a.length;i++){
    console.log(a[i] + 1)
}

a.map((data) => { console.log(data+1)})

var a =  ['a','b','c','d']

for(i=0;i<a.length;i++){
    console.log(a[i] + 1)
}

VM94:4 a1
VM94:4 b1
VM94:4 c1
VM94:4 d1
undefined
a.map((data) => { return data+1})
(4) ["a1", "b1", "c1", "d1"]
a.map((data) => { console.log(data+1)})
VM105:1 a1
VM105:1 b1
VM105:1 c1
VM105:1 d1


var b = [28,14,22,51,47,23,17]
b.filter((data) => {return data>20})
b.map((data) => {return data>20})

var b = [28,14,22,51,47,23,17]
b.filter((data) => {return data>20})
(5) [28, 22, 51, 47, 23]
b.map((data) => {return data>20})
(7) [true, false, true, true, true, true, false]

---------------------------
var a =[0,1,2,3]

a.map((item) => {return item*2})
a.filter((item) => {return item*2})

var a =[0,1,2,3]

a.map((item) => {return item*2})
(4) [0, 2, 4, 6]
a.filter((item) => {return item*2})
(3) [1, 2, 3]

/*
var => We can redeclare and reassign
let => We cannot redecalare but can reassign
const => We cannot redecalre nor reassign
*/

var a = 10
undefined
a
10
var a = 11
undefined
a
11
a=12
12

var a //declare
a=10  //assigment

let r = 10
undefined
r
10
let r = 11
VM425:1 Uncaught SyntaxError: Identifier 'r' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM425:1
r = 11
11
r
11

const d = 10
undefined
d
10
const d = 11
VM559:1 Uncaught SyntaxError: Identifier 'd' has already been declared
    at <anonymous>:1:1
d=11
VM574:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:2


