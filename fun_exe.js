console.log("-------------Example 1-------------");
// Function Declaration

function greet() {
  console.log("Hello");
}

// Function Expression

const greet = function() {
  console.log("Hello");
};

console.log("-------------Example 2-------------");

// Hoisting

greet();

function greet(){
    console.log("Hello!");
}

console.log("-------------Example 3-------------");

// Convert to Arrow Function
// Original

function add(a, b){
    return a + b;
}

// Arrow Function

const add = (a, b) => a + b;

console.log("-------------Example 4-------------");

// Parameters vs Arguments

function welcome(name){
    console.log("Welcome " + name);
}

welcome("user");

console.log("-------------Example 5-------------");

// how many parameters and args

function temp (a, b, c){
    console.log(a,b,c);
}

temp(1, 2)

console.log("-------------Example 6-------------");

//Default Parameter

function temp_user(name = "Guest"){
    console.log("Hello " + name);
}

temp_user();

console.log("-------------Example 7-------------");

// Rest Operator

function number(...numbers){
    console.log(numbers);
}

number(1, 2, 3, 4, 5)

console.log("-------------Example 8-------------");

// Rest Parameters & Total

for(let i=0; i<scores.length; i++)

    scores.forEach(function(val){
    total = total + val;
});

console.log("-------------Example 9-------------");

// Early Return

function checkAge(age){
    if(age < 18){
        console.log("Too Young");
        return;
    }

    console.log("Access Granted");
}

console.log("-------------Example 10-------------");

// Return Value

function f(){ 
    return;
}

console.log("-------------Example 11-------------");

// First-Class Functions

let x = function(){};

console.log("-------------Example 12-------------");

// Assign Function to Variable

let a = function(){
    console.log("Hello");
}

a();

console.log("-------------Example 13-------------");

// Pass Function to Another Function (Callback)

function abcd(val){
    val();
}

abcd(function(){
    console.log("Hello");
})

console.log("-------------Example 14-------------");

// Higher Order Function

setTimeout(function(){}, 1000);

console.log("-------------Example 15-------------");

// Identify Higher Order Function

[1,2,3].map(function(x){
    return x * 2;
})
.map()

console.log("-------------Example 16-------------");

// Pure or Impure Function

let b = 5;

function num(num){
    total += num;
}

num(3);

console.log("-------------Example 17-------------");

// Convert to Pure Function

total += num;
function num(total, num){
    return total + num;
}
let result = num(5, 3); // 8

console.log("-------------Example 18-------------");

// Closure

function outer(){
    let x = 10;

    return function(){
        console.log(x);
    }
}

let inner = outer();
inner(); // 10

console.log("-------------Example 19-------------");

// Predict Output

function outer(){
    let count = 0;

    return function(){
        count++;
        console.log(count);
    };
}

const counter = outer();

counter();
counter();

console.log("-------------Example 20-------------");

// Convert to IIFE
// Original

function init(){
    console.log("Initialized");
}

// IIFE

(function(){
    console.log("Initialized");
})();

console.log("-------------Example 21-------------");

// Use of IIFE

let fun = (function(){
    let score = 0;

    return {
        getScore: function(){
            console.log(score);
        },
        setScore: function(val){
            score = val;
        }
    }
})();

console.log("-------------Example 22-------------");

// Hoisting with Function Expression

temp_var = undefined;

var temp_var = function(){
    console.log("Hello");
}

console.log("-------------Example 23-------------");

// Hoisting with Function Declaration

temp_var();

function temp_var(){
    console.log("Hello");
}
