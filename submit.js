// const form = document.querySelector('form');
// const displayImg = document.querySelector('.dp-img img');
// const displayName = document.getElementById('displayName');
// const displayBio = document.getElementById('displayBio');
// const displayEmail = document.getElementById('displayEmail');
// const displayPhone = document.getElementById('displayPhone');

// // Selecting the card by class instead of ID
// const cardContainer = document.querySelector('.card');

// form.addEventListener('submit', function(e) {
//     e.preventDefault(); 

//     const inputs = form.querySelectorAll('input');

//     const imgUrl = inputs[0].value;
//     const name = inputs[1].value;
//     const bio = inputs[2].value;
//     const email = inputs[3].value;
//     const phone = inputs[4].value;

//     // 1. Update the data
//     if (imgUrl.trim() !== "") {
//         displayImg.src = imgUrl;
//     }
    
//     displayName.textContent = name || "Username";
//     displayBio.textContent = bio || "bio";
//     displayEmail.textContent = email || "email";
//     displayPhone.textContent = phone || "phone Number";

//     // 2. Show the card by changing the display property
//     cardContainer.style.display = "block";

//     console.log("Form submitted and card displayed using class selector.");

//     form.reset();

// });

let inp = document.querySelectorAll("input");
let form = document.querySelector("form");

form.addEventListener("submit", (dets) => {
    dets.preventDefault();

    // 1. Create all necessary elements
    let card = document.createElement("div");
    let dp_img = document.createElement("div");
    let img = document.createElement("img");
    let h3 = document.createElement("h3");
    let h4 = document.createElement("h4");
    let h5 = document.createElement("h5");
    let h6 = document.createElement("h6");

    // 2. Add classes (using underscore to match your CSS)
    card.classList.add("card");
    dp_img.classList.add("dp_img");

    // 3. Build the structure (Append elements)
    document.body.append(card);
    card.appendChild(dp_img);
    dp_img.appendChild(img);
    card.appendChild(h3);
    card.appendChild(h4);
    card.appendChild(h5);
    card.appendChild(h6);

    // 4. Assign data from inputs with placeholders if empty
    // Image handling
    img.src = inp[0].value.trim() !== "" 
        ? inp[0].value 
        : "https://img.freepik.com/premium-vector/user-profile-icon-circle_1256048-12499.jpg?semt=ais_hybrid&w=740&q=80";

    // Text handling
    h3.textContent = inp[1].value || "username";
    h4.textContent = inp[2].value || "bio";
    h5.textContent = inp[3].value || "email@gmail.com";
    h6.textContent = inp[4].value || "+9187586955";

    // 5. Reset the form properly
    form.reset();
    
    console.log("New card created successfully!");
});