// function

// what --> function is a block of code that performs a specific task.

// why --> to avoid code repetition and to make code modular and reusable.

// how --> function keyword, name, parameters, body, return statement


// type of functions:

// function name(params) {} --> function declaration
function abc() {}

// let fnc = function() {} --> function expression
let fnc = function () {};

// let fnc = () => {} --> arrow function --> fat arrow function
let fnc1 = () => {};

function temp_cart() {
  console.log("adding prodcat");
}

temp_cart("laptop");
temp_cart("watch");
temp_cart("mobile");


// parameters vs arguments

// parameters are the names listed in the function definition
// (params --> () ni andar lakheli values)

// arguments are the real values passed to the function (args)
// function call karti () ni andar lakheli (pass) kareli values

console.log("------Adding A Product------");

function cart(producat) { // product -- params
  console.log(`Adding ${producat}`);
}

cart("Laptop");   // laptop -- args
cart("Mac Book");
cart("S25 ultra");

console.log("------Adding A Product With Price------");

function cart2(producat, price) { // product -- params
  console.log(`Adding ${producat} at ${price}`);
}

cart2("Laptop", 50000);   // laptop -- args
cart2("Mac Book", 250000);
cart2("S25 ultra", 69000);

console.log("------Ordering A Product------");

// Convert Into Arrow Expression 
// let fnc = function(){}

const order = function (item, quantity) {
  console.log(`Ordering ${quantity} ${item}`);
}

order("Book", 3);
order("Pen", 10);

console.log("------Product Cart With Total Price------");

// Convert into Arrow Function
// let fnc  = () => {}

let cartTotal = (product, price, quantity) => {
  let total = price * quantity;
  console.log(`Total price of ${product} is ${total}`);
}

cartTotal("Laptop", 50000, 2);
cartTotal("Mobile", 20000, 3);


// Default, rest parameters in function

// Default
console.log("------Default Functions------");
function abcd(b = 10, price = 0) {
  console.log(price, b);
}

abcd(15);

function discount(amount, percent = 10) {
  let final = amount - (amount * percent / 100);
  console.log("Final Price:", final);
}

discount(1000);
console.log("Discounted Price")
discount(1000, 20);

// use case -- fees / flipkart -- platform fee


// rest

// Jayre function ma multiple arguments pass karva to vadhare
// params banava pade chhe mate te na karvu pade
// te mate rest parameter use kariye chhiye
// (rest ---> ... jo function na parameter ni andar lakhvama aave chhe)
console.log("------Simple Functions------");
function def(a, b, c, d, e, f, g) {
    console.log(a, b, c, d, e, f, g)
}
def(1, 2, 3, 4, 5, 6, 7);

console.log("------Rest Functions------");

function def1(a, b, c, ...number) { // ...number -- rest params
  console.log(a, b, c, number);
}

def1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// early return --> function mathi jaldi bahar nikalva mate

console.log("------Early Returm Functions------");
function getValue1(value) {
  if (value < 25) return "Value is less than 25";
  else if (value < 50) return "Value is less than 50";
  else if (value < 75) return "Value is less than 75";
  return "Value is 100 or more";
}

let result = getValue1(80);
console.log(result);

// first Class Function and their types:

// function can be treated as variables
// let temp_a = function() {}  --> first class function

const cart5 = function (producat, price) {
  console.log(`Adding ${producat} at ${price}`);
};

cart5("function expression - S25 ultra", 69000);


// function can be passed as arguments to other functions

function temp_b(fnc) {
  fnc();
}

temp_b(function fnc2() {
  console.log("First Class Function");
});

// function can be returned from other functions

function abcd() {
  return function () {
    console.log("function return other function");
  };
}

abcd();

// call a function that return other function
abcd()();

// higher order function (HOF)

// function that takes another function as an argument
// or returns a function as a result
// (eva function je return kare ek function
// athava accept kare ek function params ma)


// function abcd(val) { val(); }
// --> abcd(function () { console.log("hello"); })

// function abcd(val) {} --> higher order function


// function abcd() { return function() {} }
// abcd()() --> higher order

// Higher Order Function
function greet(callback) {
  console.log("Hello User");
  callback(); // calling passed function
}

// Normal function
function sayBye() {
  console.log("Good Bye!");
}

// Passing function as argument
greet(sayBye);


// pure vs impure function

// pure function ---> function je same input par same output aapse ane koi bahar na state
// ne modify na kare (pure function ---> je function bahar na state ne modify na kare )

let a = 10;

function abcd_pure() {
    console.log("Hello");
}

// impure function ---> function je same input par different output aapse athava bahar na
// state ne modify kare (impure function ---> je function bahar na state ne modify kare )

function abcd_impure() {
    a++;
    console.log(a);
}

// closure function

// function je potana parent function na variables ne access kari shake(return thava
// valo function use karshe parent function na koi variable) (function within function)

function outer() {
    let count = 0;

    function inner() {
        count++; // accessing outer(parent) function variable
        console.log(count);
    }

    return inner;
}

let func = outer();
func();

// lexical scope --> nested function can access variables declared in their outer scope

function outer1() {
    let outer_var = "outer function variable";

    function inner1() {
        let inner_var = "inner function variable";

        console.log(outer_var); // outer1 function variable write in console log

        function most_inner() {
            console.log(inner_var);
            console.log(outer_var);

            let most_inner_var = "most inner function variable";

            function abc() {
                console.log(most_inner_var);
                console.log(inner_var);
                console.log(outer_var);
            }

            abc();
        }

        most_inner();
    }

    inner1();
}

outer1();

// IIFE - Immediately Invoked Function Expression
(function () {})(); // function je declare karta j call thai jaye

(function () {
    console.log("This is IIFE Function");
})();

// Hoisting in function
abcde();

function abcde() {
    console.log("This is hoisting function");
}

// hoistedFunction1();
// let hoistedFunction1 = function () {
//     console.log("Hoisted Function Expression called");
// };

// hoistedFunction2();
// let hoistedFunction2 = () => {
//     console.log("Hoisted Arrow Function called");
// };
