/* ============================================================
   🟢 VARIABLES & DATA TYPES (1–15)
============================================================ */
let a = "a", b = "10", c = 10, d, e = null;

// 1. Compare a == "a" and a === "a"
console.log(a == "a", a === "a"); 

// 2. b == c vs b === c -> true (coercion) vs false (type)

// 3. Convert b so b === c
b = Number(b); 

// 4. undefined check
if (d === undefined) { console.log("d is undefined"); }

// 5. Safe null/undefined check
if (d == null) { console.log("Catch-all for null/undefined"); }

// 6. Loose vs Strict
console.log(null == undefined, null === undefined); // true, false

// 7. Fix coercion
console.log(c + Number("10")); 

// 8. Check NaN
console.log(Number.isNaN(c / "a")); 

// 9. String to Number
let n1 = +b; let n2 = Number(b);

// 10. Number to String
let s1 = String(c); let s2 = c.toString();

// 11. To Boolean
let bool = !!a;

// 12. Const Reassignment
const x = 5; // x = 10; -> Throws TypeError

// 13. Primitive Copy
let orig = 1; let copy = orig; copy = 2; // orig is still 1

// 14. Reference Comparison
console.log([] == []); // false (different memory addresses)

// 15. Fix Implicit
if ("" === 0) { } // false (Correct)


/* ============================================================
   🟢 OPERATORS (16–30)
============================================================ */
// 16. Even without %
const isEven = (n) => (n & 1) === 0;

// 17. Max without Math.max
const getMax = (n1, n2) => n1 > n2 ? n1 : n2;

// 18. Arithmetic Calc
const add = 5 + 2, sub = 5 - 2, mul = 5 * 2, div = 5 / 2;

// 19. Defaults
let inputName = null;
let user = inputName || "Guest";

// 20-21. Ternary
let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";

// 22. Short-circuit execution
let isTrue = true;
isTrue && console.log("Runs because isTrue is true");

// 25-26. Nullish Coalescing
let count = 0;
console.log(count || 10); // 10 (0 is falsy)
console.log(count ?? 10); // 0 (0 is not null/undefined)

// 27-28. Spread & Rest
const merged = [...[1,2], ...[3,4]];
const sumRest = (...nums) => nums.reduce((s, n) => s + n, 0);


/* ============================================================
   🟡 CONTROL FLOW (31–45)
============================================================ */
// 31. Grading
let score = 85;
if (score >= 90) console.log("A");
else if (score >= 80) console.log("B");

// 33. Switch Fall-through
let day = "Saturday";
switch(day) {
    case "Saturday":
    case "Sunday": console.log("Weekend"); break;
    default: console.log("Weekday");
}

// 42. Early Exit
function greet(name) {
    if (!name) return "No name provided";
    return `Hello ${name}`;
}


/* ============================================================
   🟡 LOOPS (46–60)
============================================================ */
// 46-47. Loops
for(let i=1; i<=10; i++) { if(i % 2 === 0) console.log(i); }

// 49. Skip with continue
for(let i=1; i<=5; i++) {
    if(i === 3) continue; // Skips 3
    console.log(i);
}

// 51. Reverse Number
let n = 123, rev = 0;
while(n > 0) {
    rev = (rev * 10) + (n % 10);
    n = Math.floor(n / 10);
}

// 55. Break Nested
outer: for(let i=0; i<3; i++) {
    for(let j=0; j<3; j++) {
        if(i === 1) break outer;
    }
}


/* ============================================================
   🟡 FUNCTIONS (61–80)
============================================================ */
// 62. Arrow
const multiply = (a, b) => a * b;

// 64. Return Function (Closure)
const createAdder = (x) => (y) => x + y;
const add5 = createAdder(5);

// 67. Pure Function
const pure = (a, b) => a + b; // No side effects

// 75. Currying
const currySum = a => b => c => a + b + c;


/* ============================================================
   🔵 ARRAYS (81–101)
============================================================ */
let arr = [1, 2, 3, 4, 5, 2];

// 81. Sum
const total = arr.reduce((acc, val) => acc + val, 0);

// 83. Unique
const unique = [...new Set(arr)];

// 88. Chain (Filter -> Map -> Reduce)
const result = arr.filter(n => n > 2).map(n => n * 2).reduce((a, b) => a + b);

// 92. Destructure
const [first, ...rest] = arr;

// 97. Flatten
const deepArr = [1, [2, [3]]];
const flatArr = deepArr.flat(Infinity);

// 98. Custom Map Implementation
const myMap = (array, cb) => {
    let newArr = [];
    for(let i=0; i<array.length; i++) newArr.push(cb(array[i]));
    return newArr;
};

// 101. FINAL BOSS ⭐
const finalBoss = (data) => {
    const avg = data.reduce((a, b) => a + b, 0) / data.length;
    return data
        .filter(n => n > avg)
        .map(n => n ** 2)
        .reduce((a, b) => a + b, 0);
};

console.log("Final Boss Result:", finalBoss([1, 2, 3, 4, 5, 6]));