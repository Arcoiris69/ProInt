//pass by value
function changue(b){
    b = 2;
}

var a = 1;
changue(a);
console.log(a);

//pass by referece
function changueObj(d){
    d.prop1 = function() {};
    d.prop2 = {};
}

var c = {};
c.prop1 = {};
changueObj(c);
console.log(c);
