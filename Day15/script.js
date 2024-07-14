function search(num){
    var el = document.getElementById('transition');
    el.classList.add("trans");
    el.style.animation = 'none';
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null; 
    if(num==1){
        document.getElementById("search2").value=document.getElementById("search").value;
    }
    setTimeout(() => {
        load(num);
      }, "2000");
}
var songs=[["6Sv36WvzP-Q","Hard Driver - Backstabbers","19,000"],["wj2HzDBHD3M","The Purge & TOZA - Next To U","13,000"],["uBcgLUc4hzg","Devin Wild - Euphoria","66,000"],["4B6I8_fUey8","Sub Zero Project - The Showdown","22,000"],["NH_pEkCEcB8","Sub Zero Project - Refuse To Speak","536,000"],["eeLgkW0WqQQ","Sub Zero Project - Maze of Memories","504,000"],["g3CGOy6SnJ8","Serzo - It's In Your DNA","97,000"],["kLqMxWFhBEM","The Purge - Dreamland","68,000"],["M5cerOSZVoA","Hard Driver - Closer & Closer","223,000"],["-NI7GuS0Peg","Hard Driver - AM PM","288,000"],["uMhhbLh__FA","Rebelion - Simulation","500,000"]];
function load(num){
    var old=document.getElementsByClassName("song");
    var l=old.length;
    for(var i=0;i<l;i++){
        old[0].remove();
    }
    document.getElementById("home").style.display="none";
    document.getElementById("results").style.display="block";
    var counter=0;
    for(var i=0;i<songs.length;i++){
        var string=""
        if(num==1){
            string="search";
        }else{
            string="search2";
        }
        if(songs[i][1].toLowerCase().includes(document.getElementById(string).value.toLowerCase())){
            var song=document.createElement("div");
            song.classList.add("song");
            song.style.left=(20+35*(counter%2))+"%";
            song.style.top=(35+45*parseInt(counter/2))+"%";
            var frame=document.createElement("iframe");
            frame.classList.add("frame")
            frame.src="https://www.youtube.com/embed/"+songs[i][0];
            frame.frameboard="0";
            frame.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
            var name=document.createElement("div");
            name.classList.add("name");
            name.innerHTML=songs[i][1];
            var stats=document.createElement("div");
            stats.classList.add('stats');
            stats.innerHTML=songs[i][2]+" listens";
            song.appendChild(frame);
            song.appendChild(name);
            song.appendChild(stats);
            document.getElementById("results").appendChild(song);
            counter++;
        }
        
    }
}