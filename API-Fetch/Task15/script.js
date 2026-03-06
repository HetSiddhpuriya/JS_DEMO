function ShowAnime(){

fetch("https://api.jikan.moe/v4/anime?q=movie")

.then((response)=>response.json())

.then((data)=>{
    console.log(data);

    data.data.forEach((anime)=>{
        RenderUI(anime);
    });

})

.catch((error)=>{
    console.log(error);
});

}

ShowAnime();



function RenderUI(anime){

let container = document.querySelector("#animeContainer");

container.innerHTML += `

<div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

<img src="${anime.images.jpg.image_url}" 
class="w-full h-60 object-cover">

<div class="p-4">

<h2 class="text-lg font-bold text-gray-800 mb-2">
${anime.title}
</h2>

<p class="text-sm text-gray-500 mb-2">
⭐ Score: ${anime.score || "N/A"}
</p>

<p class="text-sm text-gray-500 mb-2">
📅 Year: ${anime.year || "Unknown"}
</p>

<p class="text-xs text-gray-400">
${anime.synopsis?.slice(0,100) || "No description"}...
</p>

</div>

</div>

`;

}