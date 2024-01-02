const toggleEl = document.getElementById("toggle");
const bodyEl = document.getElementById("body");
let isLight = true;
toggleEl.addEventListener("click", function(){
    if (isLight) {
        // console.log("light");
        bodyEl.style.backgroundColor = "black";
    }else {
        // console.log("dark");
        bodyEl.style.backgroundColor = "white";
    }
    isLight = !isLight;
    
})