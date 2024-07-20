function next(num){
    document.getElementById("container"+num).classList.add("gone");
    setTimeout(() => {
        document.getElementById("container"+num).classList.add("reallygone");
      }, "1000");
}
function previous(num){
    document.getElementById("container"+(num-1)).classList.remove("gone");
    document.getElementById("container"+(num-1)).classList.remove("reallygone");
}
var counter=1;
document.onkeypress = function (e) {
    e = e || window.event;
    if(e.keyCode==13){
        next(counter);
        counter++;
    }
    if(e.keyCode==113){
        previous(counter);
        counter--;
    }
};
var artists=[["Sub Zero Project","eeLgkW0WqQQ"],["Rebelion","uMhhbLh__FA"],["Hard Driver","H9kXQkkMgl0"],["Sefa","bWbLwbwhKsk"],["Deadly Guns","PdkVXwoo1zc"]]
function select(artist){
    for(var i=0;i<artists.length;i++){
        if(artists[i][0]==artist){
            document.getElementById("theSong").src="https://www.youtube.com/embed/"+artists[i][1];
            break;
        }
    }
}