console.log("-------------Example 1-------------");
let x = 10;
let y = 20;

if (x > 5 && y > 5) {
  console.log("Both are greater than 5");
} else {
  console.log("One or both are not greater than 5");
}

console.log("-------------Example 2------------");
let isAdmin = true;
let isLoggedIn = false;

if (isAdmin || isLoggedIn) {
  console.log("Acess granted");
} else {
  console.log("Acess Denied");
}

console.log("-------------Example 3------------");
let temp = 35;

if (!(temp > 30)) {
  console.log("Hot day");
} else {
  console.log("Pleasant day");
}

console.log("-------------Example 4------------");
let a = 0;

if (a) {
  console.log("Truthy value");
} else {
  console.log("Falsy value");
}

console.log("-------------Example 5------------");
let score = 78;

let grade =
  score >= 90 ? "A" :
  score >= 80 ? "B" :
  score >= 70 ? "C" : "D";

console.log("Grade:", grade);

console.log("-------------Example 6------------");
let points = 120;

let status =
  points >= 100 ? "Gold" :
  points >= 50 ? "Silver" : "Bronze";

console.log("Status:", status);

console.log("-------------Example 7------------");
let loggedIn = true;
let hasToken = false;

let access = loggedIn && hasToken ? "Allow" : "Deny";
console.log("access:", access);

console.log("-------------Example 8------------");
let b = 5;
b++;
console.log(b);

console.log("-------------Example 9------------");
let c = 8;
++c;
console.log(c);

console.log("-----------Example 10-----------");
let d = 4;
let e = d++;
console.log(d, e);

console.log("-----------Example 11-----------");


console.log("-----------Example 12-----------");