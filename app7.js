//object properties and methods
var obj = {
    greet: 'Hello'
}

console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);
//functions and arrays

var arr = [];

arr.push(function(){
console.log('Hello world 1');
});
arr.push(function(){
console.log('Hello world 2');
});
arr.push(function(){
console.log('Hello world 3');
});

arr.forEach(function(item){
    item();
});





//Manda a llamar un archivo
var Emmitter = require('./emitter');
//Se declara unnuevo emitter
var emtr = new Emmitter();

emtr.on('greet', function() {
    console.log('somewhere, someone said hello.')
})

emtr.on('greet', function() {
    console.log('Ago mi dibujoh, mi videoh, vamoa subiro, ahita!!!!.')
})

emtr.on('greet', function() {
    console.log('A Greeting Occurred!.')
})

console.log('Hello!');
emtr.emit('greet');