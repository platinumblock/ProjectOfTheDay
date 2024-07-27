for(var i=0;i<80;i++){
    var star=document.createElement("div");
    star.classList.add("dot");
    var size=getRandom(5,15)+"Px";
    star.style.width=size;
    star.style.height=size;
    star.style.left=getRandom(5,95)+"%";
    star.style.top=getRandom(5,95)+"%";
    star.style.animationDelay=getRandom(-10,0)+"s";
    star.style.animationDuration=getRandom(4,10)+"s";
    var color="rgb("+getRandom(0,255)+","+getRandom(0,255)+","+getRandom(0,255)+")";
    star.style.backgroundColor=color;
    document.body.appendChild(star);
}
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}