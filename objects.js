// Objects vs Array

// Objects -- when you want to show all data based on one entity
// (ek j entity mate all data jota hoy) (ex. one user data)

// Array -- when you want to show entity (ex. all users)

// let user_data = [{name: "abc", email: "test@gmail.com"}, {name: "def"}, {name: "abc1"}, {name: "ABC"}];

// create

// varabile = {}

// key : value --> key-value structure

let user = {
    name: "Test",
    email: "test@gmail.com",
    roll_no: 70,
};

// access (dot vs square notation)
// variable_name.key_name;
user.name;
user.email;
// user.first-name;
// variable_name ['key'];
// user['name']
// user [name]
let demo = "name"
user[demo] //I--> convert into name (demo 'name') output: abc

// Nesting and Deep Access

const user1 = {
    name: "test",
    address: {
        city: "Surat",
        pin: 395009,
        locations: {
            lat: 24.2,
            lng: 77.4,
        },
    },
    email: "test@gmail.com",
}; // -- nested Object

user1.address.locations.lat; // --> Deep Access
// user1.address.location.lng;

// Object destructuring:

let { lat, lng } = user1.address.locations;

let { lat: abc_lat } = user1.address.locations;
// destructure and rename variable name


let demo2 = {
    first_name: "Demo",
    last_name: "User",
    age: 45,
    email: "demo@user.com"
};


// Looping

// for (variable name in object_name){}

for (const key in demo2) {
    console.log(key);
    // obj.key --> Not working
    console.log(demo2[key]);
    // console.log(key, ":", demo2[key]) -- log while object
}

// Copying Objects: Spread, Object.assign, deep clone

// Spred

let user_data = { ...demo };

// let user_data = { gender: "Male", ...demo }; // add key-value and
// copy object

// Use case: State update

// const user = {
//     name: "Amit",
//     age: 30
// };

// const updatedUser = {
//     ...user,
//     age: 31
// };

// console.log(updatedUser);
