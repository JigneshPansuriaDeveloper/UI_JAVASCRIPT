////Call Apply///

var person = {
    fullName: function(city,country){
        return this.firstname+"_"+this.lastname+"_"+city+"_"+country
    }
}

var john ={
    firstname:'John',
    lastname:'eva'
}

person.fullName.call(john,'london','England')
"John_eva"
person.fullName.apply(john,['london','England'])
"John_eva"



if we have to pass object and string use "Call"
if we have to pass object and array use "Apply"