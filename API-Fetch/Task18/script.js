function GetProfile(){

let username = document.querySelector("#username").value;

fetch(`https://api.github.com/users/${username}`)

.then((response)=>response.json())

.then((data)=>{
    console.log(data);

    document.querySelector("#profileContainer").innerHTML = `

    <img src="${data.avatar_url}" class="w-24 h-24 rounded-full mx-auto mb-4">

    <h2 class="text-lg font-bold">${data.name || data.login}</h2>

    <p class="text-sm text-gray-500 mb-2">
    ${data.bio || "No bio available"}
    </p>

    <p class="text-sm">
    👥 Followers: ${data.followers}
    </p>

    <p class="text-sm">
    📦 Repositories: ${data.public_repos}
    </p>

    `;
})

.catch((error)=>{
    console.log(error);
});

}