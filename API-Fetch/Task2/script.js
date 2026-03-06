function ShowPosts() {

    fetch('https://jsonplaceholder.typicode.com/posts')

    .then((rawdata) => {
        console.log(rawdata);
        return rawdata.json();
    })

    .then((data) => {
        console.log(data);

        data.forEach((post) => {
            RenderUi(post);
        });

    });

}

ShowPosts();


function RenderUi(post) {

    let container = document.querySelector("#postContainer");

    container.innerHTML += `
    
    <div class="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-xl transition">

        <div class="flex justify-between items-center mb-4">
            <span class="text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full font-semibold">
                User ID: ${post.userId}
            </span>

            <span class="text-xs text-gray-400">
                Post ID: ${post.id}
            </span>
        </div>

        <h2 class="text-lg font-bold text-gray-800 mb-3">
            ${post.title}
        </h2>

        <p class="text-gray-600 text-sm leading-relaxed">
            ${post.body}
        </p>

        <div class="mt-6 border-t pt-3 flex justify-between items-center text-xs text-gray-400">
            <span>JSON Placeholder</span>
            <span>Post Data</span>
        </div>

    </div>

    `;
}