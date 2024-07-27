var start=0;
var end=5;
function render(){
    var old=document.getElementsByClassName("point");
    var l=old.length;
    for(var i=0;i<l;i++){
        old[0].remove();
    }
    var old2=document.getElementsByClassName("bar");
    var l2=old2.length;
    for(var i=0;i<l2;i++){
        old2[0].remove();
    }
    for(var i=start;i<end;i+=0.01){
        var point=document.createElement("div");
        var bar=document.createElement("div");
        point.classList.add("point");
        bar.classList.add("bar");
        point.style.left=((i-start)*100/(end-start))+"%";
        bar.style.left=((i-start)*100/(end-start))+"%";
        var y=i/(Math.pow(Math.E,i)+1);
        point.style.top=(100-y*300)+"%";
        bar.style.top=(100-y*300)+"%";
        document.getElementById("graph").appendChild(point);
        document.getElementById("graph").appendChild(bar);
    }
}
document.onkeydown = function (e) {
    e = e || window.event;
    console.log(e.keyCode);
    if(e.keyCode==65){
        start-=0.1;
        end-=0.1;
        var l=document.getElementById("labels");
        var old=parseFloat(l.style.left.substring(0,l.style.left.length-1));
        var newLeft=old+1.4;
        l.style.left=newLeft+"%";
        render();
    }
    if(e.keyCode==68){
        start+=0.1;
        end+=0.1;
        var l=document.getElementById("labels");
        var old=parseFloat(l.style.left.substring(0,l.style.left.length-1));
        var newLeft=old-1.4;
        l.style.left=newLeft+"%";
        render();
    }
};
render();