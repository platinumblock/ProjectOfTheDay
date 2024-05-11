class Song{
    constructor(title,artists,link){
        this.title=title;
        this.artists=artists;
        this.link=link;
    }
}
function loadPanel(link){
    document.getElementById("video").src=link;
    document.getElementById("viewPanel").style.display="block";
    
}
function closePanel(){
    document.getElementById("viewPanel").style.display="none";
}
var songs=[new Song("Into the Wild","Rooler & Atmozfears","ybTr1xLrfd4"),new Song("Live Fast Die Young","Sub Zero Project & Rebelion","9nSxfPdVVYI"),new Song("Simulation","Rebelion & Vertile","uMhhbLh__FA"),new Song("Liberation","Sub Zero Project & Hard Driver","GEQePJZ0SkE"),new Song("Closer and Closer","Hard Driver","M5cerOSZVoA"),new Song("Anger is My Acid","Hard Driver","1ISAz5IZv-A"),new Song("Maze of Memories","Sub Zero Project","eeLgkW0WqQQ")];
var colors=["rgb(67, 129, 222)","rgb(235, 64, 52)","rgb(12, 199, 15)","rgb(118, 12, 199)","rgb(199, 12, 174)","rgb(227, 177, 27)"];
function generateSongs(){
    for(var i=0;i<songs.length;i++){
        var song=songs[i];
        var outer=document.createElement("button");
        outer.setAttribute( "onClick", "loadPanel('https://www.youtube.com/embed/"+song.link+"')");
        outer.classList.add("song");
        outer.style.left=(380+600*(i%2))+"px";
        outer.style.top=(300+150*parseInt((parseInt(i)/2)))+"px";
        outer.style.backgroundColor=colors[Math.floor(Math.random()*6)];
        var inner1=document.createElement("div");
        inner1.classList.add("title");
        inner1.innerHTML=song.title;
        var inner2=document.createElement("div");
        inner2.classList.add("artists");
        inner2.innerHTML=song.artists;
        var inner3=document.createElement("div");
        inner3.classList.add("playSymbol");
        inner3.innerHTML="►";
        outer.appendChild(inner1);
        outer.appendChild(inner2);
        outer.appendChild(inner3);
        document.body.appendChild(outer);
    }
}
generateSongs();