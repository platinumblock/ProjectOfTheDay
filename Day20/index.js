function start(){
    for(var i=0;i<=110;i++){
        var bar=document.createElement("div");
        bar.classList.add("bar");
        bar.style.left=(i/1.1)+"%";
        bar.style.animationDelay=(i/40)+"s";
        document.body.appendChild(bar);
    }
    setTimeout(() => {
        reveal();
    },5000);
}
function reveal(){
    document.getElementById("pitch").style.display="none";
    document.getElementById("subpitch").style.display="none";
    document.getElementById("start").style.display="none";
    document.getElementById("coin").style.display="flex";
    document.getElementById("flip").style.display="flex";
    for(var i=110;i>=0;i--){
        var bar=document.createElement("div");
        bar.classList.add("antibar");
        bar.style.left=(i/1.1)+"%";
        bar.style.animationDelay=((110-i)/40)+"s";
        document.body.appendChild(bar);
    }
    var old=document.getElementsByClassName("bar");
    var l=old.length;
    for(var i=0;i<l;i++){
        old[0].remove();
    }  
}
function flip(){
    document.getElementById("flip").style.opacity="0.3";
    document.getElementById("coin").innerHTML="?";
    document.getElementById("coin").style.animationName="move-bg, bounce";
    document.getElementById("coin").style.animationDuration="10s, 5s";
    document.getElementById("coin").style.animationTimingFunction="linear, ease";
    document.getElementById("coin").style.animationIterationCount="infinite, 1";
    document.getElementById("coin").style.animationDelay="0s, 1s";
    setTimeout(() => {
        var choice=Math.random();
        if(choice<0.5){
            document.getElementById("coin").innerHTML="H";
        }else{
            document.getElementById("coin").innerHTML="T";
        }
    },4000);
    setTimeout(() => {
        document.getElementById("coin").style.animationName="move-bg";
        document.getElementById("coin").style.animationDuration="10s";
        document.getElementById("coin").style.animationTimingFunction="linear";
        document.getElementById("coin").style.animationIterationCount="infinite";
        document.getElementById("coin").style.animationDelay="0s";
        document.getElementById("flip").style.opacity="1";
    },6000);
}