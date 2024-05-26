var house=[];
for(var i=0;i<10;i++){
    var row=[];
    for(var k=0;k<10;k++){
        row[k]="blank"
    }
    house[i]=row;
}
var mouseX=0;
var mouseY=0;
var selectedObject="blank";
function render(){
    var old=document.getElementsByClassName("des");
    console.log(old);
    var l=old.length;
    for(var i=0;i<l;i++){;
        old[0].remove();
    }
    for(var row=0;row<10;row++){
        for(var col=0;col<10;col++){
            var object=house[row][col];
            var visual=document.createElement("div");
            if(object=="blank"){
                visual.style.left=(300+100*col)+"px";
                visual.style.top=(100+80*row)+"px";
            }else{
                visual.style.left=(300+100*col-35)+"px";
                visual.style.top=(100+80*row-25)+"px";
            }
            visual.classList.add("des");
            visual.classList.add(object);
            document.body.appendChild(visual);
        }
    }
}
document.onclick= function(event) {
    var mouseX=event.pageX-15;
    var mouseY=event.pageY-15;
    if(mouseX<1300){
        var xIndex=parseInt((mouseX-250)/100);
        var yIndex=parseInt((mouseY-50)/80);
        house[yIndex][xIndex]=selectedObject;
        render();
    }
};
function select(object){
    if(selectedObject!="blank") document.getElementById("indicator").classList.remove(selectedObject);
    selectedObject=object;
    if(selectedObject!="blank") document.getElementById("indicator").classList.add(selectedObject);
}
render();