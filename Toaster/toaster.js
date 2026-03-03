// =============================
// Lexical Scope Example
// =============================
let d = 20;

function abc() {
  console.log("Value of d:", d);
}

function def() {
  let d = 25;
  abc(); // Will print 20 (lexical scope)
}

def();


// =============================
// Closure Example
// =============================
function parent() {
  let a = 12;

  return function () {
    console.log("Closure value:", a);
  };
}

let fnc1 = parent();
fnc1();


// =============================
// Create Toaster Function
// =============================
function CreateToaster() {

  // Create toast container dynamically
  let toast = document.createElement("div");
  toast.className =
    "fixed top-4 right-4 flex flex-col gap-2 z-50";

  document.body.appendChild(toast);

  // Return inner function (closure)
  return function (msg) {

    let div = document.createElement("div");

    div.className =
      "bg-gray-800 text-white px-6 py-3 rounded-md shadow-lg transition-all duration-300 opacity-0 translate-x-10";

    div.textContent = msg;

    toast.appendChild(div);

    // Animation
    setTimeout(() => {
      div.classList.remove("opacity-0", "translate-x-10");
    }, 100);

    // Auto remove after 3 sec
    setTimeout(() => {
      div.classList.add("opacity-0", "translate-x-10");
      setTimeout(() => {
        div.remove();
      }, 300);
    }, 3000);
  };
}

let toaster = CreateToaster();

function showToast() {
  toaster("Welcome to profile");
  toaster("You have 2 notifications");
  toaster("Product Uploaded Successfully");
}