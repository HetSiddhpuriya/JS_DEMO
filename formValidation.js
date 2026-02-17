// Reading Values from input, textarea, select
let form = document.querySelector("form");
let username = document.querySelector("#username");
let textarea = document.querySelector("#textarea");
let select = document.querySelector("#select");

form.addEventListener("submit", (dets) => {
    dets.preventDefault();

    console.log(username.value);
    console.log(textarea.value);
    console.log(select.value);
});


// prevent deafult submission

// inline and js based validation
// inline validation --> html validation --> required, minlength, maxlength

// showing error messages conditionally

// pattern attribute vs custom regex
