//prototipo vacío
var person = {
    firstname: '',
    lastname: '',
    greet: function(){
        return this.firstname + ' ' + this.lastname;
    }
}
// se sobreescribe el primer nombre y el primer apellido
var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';
// se imprime el nombre y apellido de el prototipo y se manda a llamar el greet
console.log(john.greet());
console.log(jane.greet());