////
toLowerCase()
toUpperCase()
length
charAt()
trim()
replace()
slice()
substring()
substr()
split()
indexof()
////
var city = "newyork"
undefined
city.toUpperCase()
"NEWYORK"
var city1="LoNDon"
undefined
city.toUpperCase()
"NEWYORK"
city1.toUpperCase()
"LONDON"
city1.toLowerCase()
"london"

var city1="LoNDon"
undefined
city1.charAt(0)
"L"
city1.charAt(5)
"n"
city1.length
6
city1.charAt(5)
"n"
city1.charAt(6)
""
city1.charAt(7)
""
var name="    john    "
name.trim().charAt(name.trim().length-1)


var a = "hi this is
javascript"

/////

var subject = "javascript"

var subject = "javascript"
undefined
subject.slice(1)
"avascript"
subject.slice(2)
"vascript"
subject.slice(2,5)
"vas"


var subject = "javascript"
undefined
subject.slice(1)
"avascript"
subject.slice(2)
"vascript"
subject.slice(2,5)
"vas"
subject.charAt(0)
"j"
subject.charAt(0).toUpperCase()
"J"
subject.slice(1).toLowerCase()
"avascript"
subject.charAt(0).toUpperCase()+subject.slice(1).toLowerCase()
"Javascript"
var city = "loNdON"
undefined
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"London"

var a = "Javascript"
undefined
a.substring(1)
"avascript"
a.substring(1,4)
"ava"
a.slice(1,4)
"ava"
a.slice(3,-1)
"ascrip"
a.slice(3,0)
""
a.substring(3,-1)
"Jav"

var a = "Javascript"
undefined
a.substr(3,1)
"a"
a.substr(3,4)
"ascr"
a.substring(3,4)
"a"
a.slice(3,4)
"a"
a.substr(3,-1)
""
a.substr(3,0)
""


Slice(start,end) => Return value between range & in case -ve from starting it return all values {Goes left to right for -ve}

substring(start,end) => Return value between range & in case -ve from given to -ve direction {Goes right to left for -ve}

substr(Start,length)


var a = "Javascript"
undefined
a.indexOf('k')
-1
a.indexOf('s')
4

var url = "https://www.youtube.com/channel/UC26NMdgQBbY6wunk_vZwQZQ/videos?view_as=subscriber"
undefined
url.split('/')
(6) ["https:", "", "www.youtube.com", "channel", "UC26NMdgQBbY6wunk_vZwQZQ", "videos?view_as=subscriber"]
var a = "Javascript"
undefined
a.split("")
(10) ["J", "a", "v", "a", "s", "c", "r", "i", "p", "t"]