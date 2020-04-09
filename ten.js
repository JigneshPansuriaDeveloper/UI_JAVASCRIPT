Date()

var a = new Date().getDay()

switch(new Date().getDay()){
    case 0:
        console.log('Today is sunday')
        break;
    case 1:
        console.log('Today is Monday')
        break;
    default:
        console.log('No Day like this')
}



var name="john"
switch(name){
    case 'aakash':
        console.log('You are admin')
        break;
    case 'john':
        console.log('You are user')
        break;
    case 'eva':
        console.log('You are sysop')
        break;
    default:
        console.log('i dont know') 
}
