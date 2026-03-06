function ShowRecipes(){

fetch("https://dummyjson.com/recipes")

.then((rawdata)=>{
    console.log(rawdata);
    return rawdata.json();
})

.then((data)=>{
    console.log(data.recipes);

    data.recipes.forEach((recipe)=>{
        RenderUI(recipe);
    });

});

}

ShowRecipes();



function RenderUI(recipe){

let container = document.querySelector("#recipeContainer");

container.innerHTML += `

<div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

<img src="${recipe.image}" class="w-full h-48 object-cover">

<div class="p-4">

<h2 class="text-lg font-bold text-gray-800 mb-2">
${recipe.name}
</h2>

<p class="text-sm text-gray-500 mb-3">
Cuisine: ${recipe.cuisine}
</p>

<div class="flex justify-between items-center mb-3">

<span class="text-yellow-500 font-semibold">
⭐ ${recipe.rating}
</span>

<span class="text-green-600 font-bold">
${recipe.difficulty}
</span>

</div>

<div class="flex justify-between items-center text-sm text-gray-600">

<span>⏱ ${recipe.cookTimeMinutes} min</span>

<span>🍽 ${recipe.servings} servings</span>

</div>

</div>

</div>

`;

}