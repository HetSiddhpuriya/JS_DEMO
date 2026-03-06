const container = document.querySelector("#cardContainer")

// MAIN FETCH FUNCTION
function fetchData(url) {

fetch(url)
.then(res => res.json())
.then(data => {

container.innerHTML=""

// Some APIs return array inside object
let list = data

if(data.products) list = data.products
if(data.recipes) list = data.recipes
if(data.data) list = data.data
if(data.slip) list = [data.slip]

list.forEach(item=>{
RenderUi(item)
})

})

}

// CARD UI
function RenderUi(item){

container.innerHTML += `

<div class="bg-white rounded-xl shadow-lg p-6">

<h2 class="text-xl font-bold mb-2">
${item.name || item.title || item.advice || "API Data"}
</h2>

<p class="text-gray-600 text-sm mb-3">
${item.description || item.body || item.catchPhrase || ""}
</p>

<p class="text-indigo-600 text-sm">
${item.email || item.category || item.origin || ""}
</p>

</div>

`

}


// ===============================
// API FUNCTIONS
// ===============================


// 1 USER COMMENTS
function loadComments(){
fetchData("https://jsonplaceholder.typicode.com/comments")
}


// 2 USER POSTS
function loadPosts(){
fetchData("https://jsonplaceholder.typicode.com/posts")
}


// 3 PRODUCT CARDS
function loadProducts(){
fetchData("https://dummyjson.com/products")
}


// 4 RECIPES
function loadRecipes(){
fetchData("https://dummyjson.com/recipes")
}


// 5 FRUITS
function loadFruits(){
fetchData("https://www.fruityvice.com/api/fruit/all")
}


// 6 RANDOM JOKE
function loadJoke(){

fetch("https://teehee.dev/api/joke")
.then(res=>res.json())
.then(data=>{

container.innerHTML = `
<div class="bg-white p-6 rounded-xl shadow-lg">
<h2 class="text-xl font-bold">Random Joke</h2>
<p class="mt-3">${data.joke}</p>
</div>
`

})

}


// 7 EXTINCT ANIMALS
function loadAnimals(){
fetchData("https://extinct-api.herokuapp.com/api/v1/animal/")
}


// 8 RANDOM DOG IMAGE
function loadDog(){

fetch("https://dog.ceo/api/breeds/image/random")
.then(res=>res.json())
.then(data=>{

container.innerHTML = `
<div class="bg-white p-6 rounded-xl shadow-lg text-center">
<img src="${data.message}" class="rounded-lg">
</div>
`

})

}


// 9 RANDOM QUOTES
function loadQuotes(){
fetchData("https://buddha-api.com/api/random")
}


// 10 RANDOM PASSWORD
function loadPassword(){

fetch("https://answerbook.david888.com/RandomPassword")
.then(res=>res.text())
.then(data=>{

container.innerHTML = `
<div class="bg-white p-6 rounded-xl shadow-lg text-center">
<h2 class="text-xl font-bold">Random Password</h2>
<p class="mt-3 text-lg">${data}</p>
</div>
`

})

}


// 11 RANDOM ADVICE
function loadAdvice(){

fetch("https://api.adviceslip.com/advice")
.then(res=>res.json())
.then(data=>{

container.innerHTML = `
<div class="bg-white p-6 rounded-xl shadow-lg">
<h2 class="text-xl font-bold">Advice</h2>
<p class="mt-3">${data.slip.advice}</p>
</div>
`

})

}


// 12 DISNEY CHARACTERS
function loadDisney(){
fetchData("https://api.disneyapi.dev/characters")
}


// 13 GHIBLI MOVIES
function loadGhibli(){
fetchData("https://ghibliapi.vercel.app/films")
}


// 14 TV SHOWS
function loadShows(){
fetchData("https://api.tvmaze.com/shows")
}


// 15 ANIME MOVIES
function loadAnime(){
fetchData("https://api.jikan.moe/v4/anime?q=movie")
}


// 16 GAMES
function loadGames(){
fetchData("https://www.freetogame.com/api/games")
}



// REFRESH BUTTON
function getNewData(){
loadAdvice()
}


// DEFAULT LOAD
loadPosts()