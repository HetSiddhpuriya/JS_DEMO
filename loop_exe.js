console.log("-------------Example 1-------------");

for (i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("-------------Example 2-------------");

let j = 10;

while (j >= 1) {
  console.log(j);
  j--;
}

console.log("-------------Example 3------------");

for (let k = 1; k <= 20; k++) {
  if (k % 2 === 0) {
    console.log(k);
  }
}

console.log("-------------Example 4------------");

let y = 1;

while (y <= 15) {
  if (y % 2 !== 0) {
    console.log(y);
  }
  y++;
}

console.log("-------------Example 5------------");

for (let o = 1; o <= 10; o++) {
  console.log(`5 x ${o} = ${5 * o}`);
}

console.log("-------------Example 6------------");

let sum = 0;

for (let q = 1; q <= 100; q++) {
  sum += q;
}

console.log("Sum:", sum);

console.log("-------------Example 7------------");

for (let w = 1; w <= 50; w++) {
  if (w % 3 === 0) {
    console.log(w);
  }
}

console.log("-------------Example 8------------");

let num = Number(prompt("Give a number"));

for (let e = 1; e <= num; e++) {
  if (e % 2 === 0) {
    console.log(e, "is even");
  } else {
    console.log(e, "is odd");
  }
}

console.log("-------------Example 9------------");

let count = 0;

for (let r = 1; r <= 100; r++) {
  if (r % 3 === 0 || r % 5 === 0) {
    count++;
  }
}

console.log("Total count:", count);

console.log("------------Example 10------------");

for (let g = 1; g <= 100; g++) {
  console.log(g);

  if (g % 7 === 0) {
    break;
  }
}

console.log("------------Example 11------------");

for (let h = 1; h <= 20; h++) {
  if (h % 3 === 0) {
    continue;
  }

  console.log(h);
}

console.log("-----------Example 12------------");

let count1 = 0;

for (let a = 1; a <= 100; a++) {

  if (a % 2 === 0) {
    continue;
  }

  count++;
  console.log(a);

  if (count1 === 5) {
    break;
  }
}
