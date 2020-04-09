/******For Loop********/
for(i=0;i<10;i++){
    console.log(i)
}
0
VM587:2 1
VM587:2 2
VM587:2 3
VM587:2 4
VM587:2 5
VM587:2 6
VM587:2 7
VM587:2 8
VM587:2 9

var city = ["London", "NewYork", "Mumbai", "Bali", "Innsburg", "Amsterdam", "Helsinki", "Hongkong", "venice"]

for(i=0;i<city.length;i++){
    console.log(`welcome to ${city[i]} friends`)
}

London
NewYork
Mumbai
Bali
VM593:5 Innsburg
VM593:5 Amsterdam
VM593:5 Helsinki
VM593:5 Hongkong
VM593:5 venice



var a = "hi"
var b = " to JavaScript"

a+b

var age = 10
var d ="my age is "+age+" and your age is "+age+" and "

>>String literal

var e = `my age is ${age} and your age is ${age} and`
var d ="my age is "+age+" and your age is "+age+" and "


/*Currency mark*/
/* You have to select one country array of country 
and your have to take input from use of 2 things 
first country name and amount
you will check if that country exist in the array
than console price with currency of that country
else say we dont accept this currency
*/



var city = [["delhi","Mumbai","Pune"],["Haug","Amsterdam","Rootadam"],
            ["Zurich","Davos","Zenser"]]

for(i=0;i<city.length;i++){
   for(j=0;j<city[i].length;j++){
       if(i==0){
           console.log(`City of India is ${city[i][j]}`)
       }
       else if(i==1){
        console.log(`City of Netherlands is ${city[i][j]}`)
       }
       else{
            console.log(`City of Switzerland is ${city[i][j]}`)
        
        }
   } 
}


/***********For Of Loop*******/

var city = ["London", "NewYork", "Mumbai", "Bali", "Innsburg", "Amsterdam", "Helsinki", "Hongkong", "venice"]
var out;

for (out of city){
    console.log(out)
}


for(i=0;i<10;i++){
    console.log(i)
}

/***********while Loop*******/
var i =0;
while(i<10){
    console.log(i)
    i++
}

var city = ["London", "NewYork", "Mumbai"]
var i =0;
while(city[i]){
    console.log(city[i])
    i++
}


/***********Do while Loop*******/
var i =0;
do{
    console.log(i);
    i++
}
while(i<10)

var city = ["London", "NewYork", "Mumbai"]
var i =0;
do{
    console.log(city[i]);
    i++
}
while(city[i])