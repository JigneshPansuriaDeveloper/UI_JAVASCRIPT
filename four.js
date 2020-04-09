console.log()  => Use to console error
alert => Forcefully message
confirm => Asking user confirmation(Boolean) 
prompt => To take input from user


console.log("hiii")
VM302:1 hiii
undefined
alert('Form Submitted')
undefined
confirm('Do you want to leave')
false
confirm('Do you leaving the page')
true
confirm('Do you leaving the page')
false
var output = confirm('Do you leaving the page')
undefined
output
false
var output = confirm('Do you leaving the page')
undefined
output
true

prompt('Please tell me your name')
"Aakash"
var name = prompt('Please tell me your name')
undefined
name
"hiii"



var a = prompt('Enter your first number')
var b = prompt('Enter your second number')
console.log(parseInt(a)+parseInt(b))

var a = prompt('Enter your first number')
typeof(a)

var a = '1'
undefined
var b = '1'
undefined
a+b
"11"
parseInt(a)
1
parseInt(b)
1
parseInt(a)+parseInt(b)
2

var x = "111.23"
undefined
var y = "10.13"
undefined
parseInt(x)+parseInt(y)
121
parseFloat(x)+parseFloat(y)
121.36


var a = null
var b = undefined