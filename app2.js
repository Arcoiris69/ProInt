//function statement
function greet(){
    console.log('hi')
}   
greet();
// functons are first-class
function logGreeting(fn){
    fn();
}
logGreeting(greet);
//fybctuib exoressuib
var greetMe = function(){
    console.log('Hi Tony');
}
greetMe();

// it's first-class
logGreeting(greetMe);

//use a function expression on the fly
logGreeting(function() {
    console.log('Hello Tony!');
})