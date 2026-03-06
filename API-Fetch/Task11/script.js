function GetAdvice(){

fetch("https://api.adviceslip.com/advice")

.then((response)=>response.json())

.then((data)=>{
    console.log(data);

    document.querySelector("#adviceText").innerText = data.slip.advice;
})

.catch((error)=>{
    console.log(error);
    document.querySelector("#adviceText").innerText = "Failed to load advice.";
});

}

GetAdvice();