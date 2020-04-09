var a = "Hi "
var b = "Javascript"
a+b
"Hi Javascript"
a-b
NaN
a*b
NaN
a/b
NaN
a%b
NaN

** '+' with number is addition 
** '+' with string is concat(attching string)

var a = "hi "
undefined
var b = 10
undefined
a+b
"hi 10"
b+a
"10hi "
var c = true
undefined
a+b+c
"hi 10true"


string+string = string
string+number = string
number+string = string
number+number = number


10+"10"+10
"10"+10+10
10+10+"10"

10+"10"+10
"101010"
"10"+10+10
"101010"
10+10+"10"
"2010"


"10"+10+10 -1
10+10+"10"-1

"a"-1
NaN
"10"-1
9
"10"+1
"101"
"10"-2
8
"10"*2
20
"a1"-1
NaN


true+true


true isequal to 1
false isequal to 0

true+10
11
true-10
-9
true*10
10
true/10
0.1
10+true+"a"
"11a"
"a"+10+true
"a10true"
"true"-1
NaN