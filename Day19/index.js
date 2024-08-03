var alphabet = "abcdefghijklmnopqrstuvwxyz";
for(var i=10;i<90;i+=4){
    var soundBar=document.createElement("div");
    soundBar.classList.add("soundBar");
    soundBar.style.top=i+"%";
    soundBar.style.left=getRandom(-25,-1)+"%";
    soundBar.style.animationDelay=getRandom(-2,0)+"s";
    document.body.appendChild(soundBar);
}
for(var i=5;i<95;i+=1){
    var letter=document.createElement("div");
    letter.classList.add("letter");
    letter.style.top=i+"%";
    letter.style.transform="rotate("+getRandom(-20,20)+"deg)";
    letter.style.animationDelay=getRandom(-8,0)+"s";
    letter.style.animationDuration=getRandom(8,16)+"s";
    letter.innerHTML=alphabet[Math.floor(Math.random() * alphabet.length)];
    document.body.appendChild(letter);
}
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}