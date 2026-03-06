function ShowMovies(){

fetch("https://ghibliapi.vercel.app/films")

.then((response)=>response.json())

.then((data)=>{
    console.log(data);

    data.forEach((movie)=>{
        RenderUI(movie);
    });

})

.catch((error)=>{
    console.log(error);
});

}

ShowMovies();



function RenderUI(movie){

let container = document.querySelector("#movieContainer");

container.innerHTML += `

<div class="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition">

<h2 class="text-lg font-bold text-gray-800 mb-2">
${movie.title}
</h2>

<p class="text-sm text-gray-600 mb-3">
${movie.description.slice(0,120)}...
</p>

<div class="text-sm text-gray-500 space-y-1">

<p><strong>Director:</strong> ${movie.director}</p>

<p><strong>Producer:</strong> ${movie.producer}</p>

<p><strong>Release:</strong> ${movie.release_date}</p>

<p><strong>Rating:</strong> ⭐ ${movie.rt_score}</p>

</div>

</div>

`;

}