function GetJoke(){

fetch("https://teehee.dev/api/joke")

.then((rawdata)=>{
    console.log(rawdata);
    return rawdata.json();
})

.then((data)=>{
    console.log(data);

    document.querySelector("#jokeText").innerText = data.joke;

});

}

GetJoke();