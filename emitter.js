 function Emitter(){
    this.events = {};
}

Emitter.prototype.on = function(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

Emitter.prototype.emit = function(type){
    //Sí existe un evento del tipo 'greet'
    if(this.events[type]){
        //entonces
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
}

module.exports = Emitter;

{
gotSomethingFromInternet: [function() {}, function() {}]
}