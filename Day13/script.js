var letters=document.getElementsByClassName("letter");
for(var i=0;i<letters.length;i++){
    letters[i].style.left=getRandomInt(1,100)+"%";
    letters[i].style.animationDelay=getRandomArbitrary(0,5)+"s";
}
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }