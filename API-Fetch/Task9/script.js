function GetQuote() {

fetch("https://buddha-api.com/api/random?lang=en")

.then((response) => response.json())

.then((data) => {
    console.log(data);

    document.querySelector("#quoteText").innerText = `"${data.content}"`;
    document.querySelector("#quoteAuthor").innerText = "- " + data.author;
})

.catch((error) => {
    console.log(error);
    document.querySelector("#quoteText").innerText = "Failed to load quote.";
});

}

GetQuote();