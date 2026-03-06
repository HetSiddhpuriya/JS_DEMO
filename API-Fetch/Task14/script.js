function ShowTVShows(){

fetch("https://api.tvmaze.com/shows")

.then((response)=>response.json())

.then((data)=>{
    console.log(data);

    data.slice(0,40).forEach((show)=>{
        RenderUI(show);
    });

})

.catch((error)=>{
    console.log(error);
});

}

ShowTVShows();



function RenderUI(show){

let container = document.querySelector("#showContainer");

container.innerHTML += `

<div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

<img src="${show.image?.medium || 'https://via.placeholder.com/210'}" 
class="w-full h-60 object-cover">

<div class="p-4">

<h2 class="text-lg font-bold text-gray-800 mb-2">
${show.name}
</h2>

<p class="text-sm text-gray-500 mb-2">
⭐ Rating: ${show.rating.average || "N/A"}
</p>

<p class="text-sm text-gray-500 mb-2">
🌍 Language: ${show.language}
</p>

<p class="text-xs text-gray-400">
🎭 ${show.genres.join(", ")}
</p>

</div>

</div>

`;

}