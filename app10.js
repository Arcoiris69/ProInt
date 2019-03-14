//Emisor de eventos
var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    this.greeting ='Hello World!';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(){
    console.log(this.greeting);
    this.emit('greet');
}

var greter1 = new Greetr();

greter1.on('greet', function(){
    console.log('Someone greeted!');
})
greter1.greet();