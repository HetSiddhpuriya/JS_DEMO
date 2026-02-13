// DOM -- Document Object Model
// All Website Code --> DOM
// Website Output --> DOM
// DOM -- HTML body

// DOM Tree Structure:
// Node --> Element (ex. h1, p, b, i), text (ex. lorem)

// DOM Manipulation – change body or website using
// select element from html
// chagne text
// change html
// change css
// change attributes
// event listeners

// Selecting Elements
// getElementById
let a = document.getElementById("abc");
console.log(a);
// console.dir(a);

// // getElementsByClassName
let b = document.getElementsByClassName("abc");
console.dir(b);

// // getElementsByTagName
let temp_c = document.getElementsByTagName("h1");
console.dir(temp_c);

// // querySelector and querySelectorAll
// most used in project and used by company
let c = document.querySelector("h1") // -- only select first element that find in your html
console.dir(c);

let d = document.querySelectorAll("h1") // select all elements in your html
console.log(d);

// // Text/Content access: innerText, textContent, HTML
let e = document.querySelector("h1")
console.dir(e);
e.innerText = "first h1 tag";
// document.querySelector("h1").innerText = "first h1 tag"

// // Text/Content access: innerText, textContent, innerHTML
let f = document.querySelector("h1")
console.dir(f);
f.innerText = "first h1 tag";
// document.querySelector("h1").innerText = "first h1 tag"

e.textContent = "h1 tag"

e.innerHTML = "<i>first h1 tag</i>"

// outer vs inner
// innerText -- show text between tag -- ignore tag
// outerText -- show text between tag -- remove tag

// innerHTML -- show text between too tag -- not tag
// outerHTML -- show text with tag

// ------------------------------------------------------------
// Attribute Manipulation
// getAttribute, setAttribute, removeAttribute
let link = document.querySelector('a')
console.dir(link)
// console.log("get Attribute", info) // -- give value of href attribute

// link.href = "https://www.google.com/"
// element.setAttribute("name", "change")
link.setAttribute("href", "www.google.com")
let info = link.getAttribute("href");
console.log("get Attribute", info) // -- give value of href attribute

// // element.removeAttribute("name")
link.removeAttribute("href")

// ------------------------------------------------------------
// Dynamic DOM manipulation
// createElement, appendChild, removeChild, prepend

// createElement
let pre_tag = document.createElement("pre");
console.log(pre_tag);
pre_tag.textContent = "Hello Pre tag"
// // append / prepend
document.querySelector("body").append(pre_tag); // add tag into last place in body
// document.querySelector("body").prepend(pre_tag); // add tag into first place into body

// // remove
let remove_h1 = document.querySelector("#abc")
remove_h1.remove();

// appendChild
let div_h1 = document.createElement("div");
div_h1.textContent = "Inner Div Tag create with JS";
document.querySelector(".box").appendChild(div_h1)

// ------------------------------------------------------------

// Style Updates via .style and classList (add, remove, toggle)
let h1 = document.querySelector("h1");
h1.style.color = "red";
h1.style.backgroundColor = "black";
h1.style.fontFamily = "sherif";
h1.style.textTransform = "capitalize";

// ClassList -- add
let box = document.querySelector(".box1");
console.dir(box);
box.classList.add("box-style");
