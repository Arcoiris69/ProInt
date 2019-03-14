

//Manda a llamar un archivo
//var Emmitter = require('./emitter');
var Emmitter = require('events');
var eventConfig = require('./config').events;
//Se declara unnuevo emitter
var emtr = new Emmitter();

emtr.on(eventConfig.GREET, function() {
    console.log('somewhere, someone said hello.')
})

emtr.on(eventConfig.GREET, function() {
    console.log('Ago mi dibujoh, mi videoh, vamoa subiro, ahita!!!!.')
})

emtr.on(eventConfig.GREET, function() {
    console.log('A Greeting Occurred!.')
})

console.log('Hello!');
emtr.emit(eventConfig.GREET);