function ShowFruits() {

    fetch("https://www.fruityvice.com/api/fruit/all")

        .then((rawdata) => {
            console.log(rawdata);
            return rawdata.json();
        })

        .then((data) => {
            console.log(data);

            data.forEach((fruit) => {
                RenderUI(fruit);
            });

        });

}

ShowFruits();



function RenderUI(fruit) {

    let container = document.querySelector("#fruitContainer");

    container.innerHTML += `

<div class="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition">

<div class="flex justify-between items-center mb-4">
<h2 class="text-xl font-bold text-gray-800">${fruit.name}</h2>
<span class="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
${fruit.family}
</span>
</div>

<div class="text-sm text-gray-600 mb-3">
<p><strong>Order:</strong> ${fruit.order}</p>
<p><strong>Genus:</strong> ${fruit.genus}</p>
</div>

<div class="border-t pt-3 text-sm space-y-1">

<p>🔥 <strong>Calories:</strong> ${fruit.nutritions.calories}</p>

<p>🍬 <strong>Sugar:</strong> ${fruit.nutritions.sugar}</p>

<p>🍞 <strong>Carbs:</strong> ${fruit.nutritions.carbohydrates}</p>

<p>💪 <strong>Protein:</strong> ${fruit.nutritions.protein}</p>

</div>

</div>

`;

}