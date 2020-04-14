var country = {
    name:'India',
    capital:'Delhi',
    population:87876875
}
var country = {
    name:'India',
    capital:'Delhi',
    population:87876875,
    greet:function(){
        return "Hi Welcome to Objects"
    }
}
console.log(country.greet())
//console.log(">>>>>",typeof country);

//console.log(country.name)
//console.log(country.population)

// Destructering
const obj =country;
const {name,population}=obj;

const {capital}=country;

console.log(`name is ${name}`);
console.log("cpaital is =",capital);
console.log(`capital is= ${capital} and population is=${population}`);


