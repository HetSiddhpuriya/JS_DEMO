function GetDog(){

fetch("https://dog.ceo/api/breeds/image/random")

.then((rawdata)=>{
    console.log(rawdata);
    return rawdata.json();
})

.then((data)=>{
    console.log(data);

    document.querySelector("#dogImage").src = data.message;

});

}

GetDog();