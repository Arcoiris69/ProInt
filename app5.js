//Herencia prototipeada osi osi
function Person(firstname, lastname){

    this.firstname = firstname;
    this.lastname = lastname;
}
//Todas las personas saludan
Person.prototype.greet = function(){
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
};
//Saludo
var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john);
console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);