function ShowPhotos(){

fetch("https://picsum.photos/v2/list?page=1&limit=40")

.then((response)=>response.json())

.then((data)=>{
    console.log(data);

    data.forEach((photo)=>{
        RenderUI(photo);
    });

})

.catch((error)=>{
    console.log(error);
});

}

ShowPhotos();



function RenderUI(photo){

let container = document.querySelector("#galleryContainer");

container.innerHTML += `

<div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

<img src="${photo.download_url}" class="w-full h-60 object-cover">

<div class="p-3 text-center">

<p class="text-sm font-semibold text-gray-700">
📸 ${photo.author}
</p>

</div>

</div>

`;

}