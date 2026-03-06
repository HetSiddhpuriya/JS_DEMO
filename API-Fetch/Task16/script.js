function ShowGames(){

fetch("https://corsproxy.io/?https://www.freetogame.com/api/games")

.then((response)=>response.json())

.then((data)=>{
    console.log(data);

    data.slice(0,40).forEach((game)=>{
        RenderUI(game);
    });

})

.catch((error)=>{
    console.log(error);
});

}

ShowGames();



function RenderUI(game){

let container = document.querySelector("#gameContainer");

container.innerHTML += `

<div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

<img src="${game.thumbnail}" class="w-full h-48 object-cover">

<div class="p-4">

<h2 class="text-lg font-bold text-gray-800 mb-2">
${game.title}
</h2>

<p class="text-sm text-gray-500 mb-2">
🎮 Genre: ${game.genre}
</p>

<p class="text-sm text-gray-500 mb-2">
💻 Platform: ${game.platform}
</p>

<p class="text-xs text-gray-400">
${game.short_description.slice(0,90)}...
</p>

</div>

</div>

`;

}