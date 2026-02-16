let box = document.querySelector(".box")

window.addEventListener("mousemove", (dets) => {
    console.log(dets.clientX, dets.clientY);

    box.style.left = dets.clientX + "px";
    box.style.top = dets.clientY + "px";

})