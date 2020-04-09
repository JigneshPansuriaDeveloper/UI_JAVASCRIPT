var email ="a@a"

^([a-zA-Z])$
^([0-9])$

var a = "john"
a.match("^([a-zA-Z])$")
null
var a = "n"
a.match("^([a-zA-Z])$")
(2) ["n", "n", index: 0, input: "n", groups: undefined]

var a = "john"
a.match("^([a-zA-Z]+)$")
(2) ["john", "john", index: 0, input: "john", groups: undefined]
var a = "john1"
a.match("^([a-zA-Z]+)$")
null

var a = "john"
a.match("^([a-zA-Z]{1,5})$")
null

var a = "john"
a.match("^([a-zA-Z]{1,5})$")
(2) ["john", "john", index: 0, input: "john", groups: undefined]

var phone= 768687262262
phone.match("^([0-9]{10})$")

var phone= 768687262262
phone.match("^([0-9]{10})$")
VM677:2 Uncaught TypeError: phone.match is not a function
    at <anonymous>:2:7
(anonymous) @ VM677:2
var phone= "76868726262"
phone.match("^([0-9]{10})$")
null
var phone= "7686872622"
phone.match("^([0-9]{10})$")
(2) ["7686872622", "7686872622", index: 0, input: "7686872622", groups: undefined]

var email = "a@a.com"

"^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$"

"^([a-zA-Z0-9]{8})$"

/*
make a pattern for password
which can accept a-z special charcter and number 
total length of 8
*/