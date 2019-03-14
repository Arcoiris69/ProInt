
var firstname = 'Jane';
//Esta funcion está protegida de variables repetidas externas
(function (lastname) {
    var firstname = 'John';
    console.log(firstname)
    console.log(lastname)
}('Doe'));

console.log(firstname);

