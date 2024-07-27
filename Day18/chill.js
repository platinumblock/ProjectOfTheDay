for(var i=0;i<40;i++){
    var star=document.createElement("div");
    star.classList.add("chill");
    var size=getRandom(5,15)+"Px";
    star.style.width=size;
    star.style.height=size;
    star.style.left=getRandom(5,95)+"%";
    star.style.top=getRandom(5,95)+"%";
    star.style.animationDelay=getRandom(-5,0)+"s";
    star.style.animationDuration=getRandom(2,5)+"s";
    star.innerHTML="🥶";
    star.style.fontSize=getRandom(15,45)+"px"
    document.body.appendChild(star);
}
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}