function ShowCharacters(){

fetch("https://api.disneyapi.dev/character")

.then((response)=>response.json())

.then((data)=>{
    console.log(data);

    data.data.forEach((character)=>{
        RenderUI(character);
    });

})

.catch((error)=>{
    console.log(error);
});

}

ShowCharacters();



function RenderUI(character){

let container = document.querySelector("#characterContainer");

container.innerHTML += `

<div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

<img src="${character.imageUrl || 'https://via.placeholder.com/300'}" class="w-full h-48 object-cover">

<div class="p-4">

<h2 class="text-lg font-bold text-gray-800 mb-2">
${character.name}
</h2>

<p class="text-sm text-gray-600 mb-2">
🎬 Film: ${character.films?.[0] || "Unknown"}
</p>

<p class="text-sm text-gray-500">
📺 TV Show: ${character.tvShows?.[0] || "None"}
</p>

</div>

</div>

`;

}