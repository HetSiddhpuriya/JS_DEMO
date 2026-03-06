function ShowProducts(){

    fetch("https://dummyjson.com/products")

    .then((rawdata)=>{
        console.log(rawdata);
        return rawdata.json();
    })

    .then((data)=>{
        console.log(data.products);

        data.products.forEach((product)=>{
            RenderUi(product);
        });

    });

}

ShowProducts();



function RenderUi(product){

let container = document.querySelector("#productContainer");

container.innerHTML += `

<div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

    <img 
    src="${product.thumbnail}" 
    class="w-full h-48 object-cover">

    <div class="p-4">

        <h2 class="text-lg font-bold text-gray-800 mb-2">
        ${product.title}
        </h2>

        <p class="text-gray-500 text-sm mb-3">
        ${product.description.slice(0,70)}...
        </p>

        <div class="flex justify-between items-center mb-3">

            <span class="text-indigo-600 font-bold text-lg">
            $${product.price}
            </span>

            <span class="text-yellow-500 font-semibold">
            ⭐ ${product.rating}
            </span>

        </div>

        <div class="flex justify-between items-center">

            <span class="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded">
            ${product.category}
            </span>

            <button class="bg-indigo-600 text-white px-3 py-1 rounded text-sm hover:bg-indigo-700">
            View
            </button>

        </div>

    </div>

</div>

`;

}