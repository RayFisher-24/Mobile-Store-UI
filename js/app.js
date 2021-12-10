let circle = document.getElementById("circle");
let uBtn = document.getElementById("upBtn");
let dBtn = document.getElementById("downBtn");
let ratatevalue = circle.style.transform;
let rotateSum;

uBtn.onclick = function(){
     rotateSum = ratatevalue + "rotate(-90deg)";
     circle.style.transform = rotateSum;
     ratatevalue = rotateSum;
}

dBtn.onclick = function(){
    rotateSum = ratatevalue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    ratatevalue = rotateSum;
}