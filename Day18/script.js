for(var i=0;i<100;i++){
    var star=document.createElement("div");
    star.classList.add("star");
    var size=getRandom(1,5)+"Px";
    star.style.width=size;
    star.style.height=size;
    star.style.left=getRandom(5,95)+"%";
    star.style.top=getRandom(5,95)+"%";
    star.style.animationDelay=getRandom(-10,0)+"s";
    star.style.animationDuration=getRandom(5,15)+"s";
    document.body.appendChild(star);
}
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}
function activate(){
    var stars=document.getElementsByClassName("star");
    for(var i=0;i<stars.length;i++){
        stars[i].style.backgroundColor="rgb(162, 131, 199)"
        stars[i].style.boxShadow="0px 0px 4px 3px rgb(162, 131, 199)";
    }
}
function deactivate(){
    var stars=document.getElementsByClassName("star");
    for(var i=0;i<stars.length;i++){
        stars[i].style.backgroundColor="white"
        stars[i].style.boxShadow="0px 0px 3px 2px white";
    }
}