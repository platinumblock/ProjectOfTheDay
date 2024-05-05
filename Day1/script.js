var i=1;
function startProject(){
    document.getElementById("panel").style.display="block";
}
function createProject(){
    document.getElementById("panel").style.display="none";
    var project=document.createElement("div");
    project.classList.add("project");
    project.style.top=(350+i*61)+"px"
    document.body.appendChild(project);
    var p=document.getElementsByClassName("project");
    var theP=p[p.length-1];
    var icon=document.createElement("div");
    icon.classList.add("icon");
    icon.classList.add("text");
    icon.innerHTML=document.getElementById("newIcon").value;
    document.getElementById("newIcon").value="";
    theP.appendChild(icon);
    var name=document.createElement("div");
    name.classList.add("name");
    name.classList.add("text");
    name.innerHTML=document.getElementById("newName").value;
    document.getElementById("newName").value="";
    theP.appendChild(name);
    var date=document.createElement("div");
    date.classList.add("date");
    date.classList.add("text");
    date.innerHTML=document.getElementById("newDate").value;
    document.getElementById("newDate").value="";
    theP.appendChild(date);
    var language=document.createElement("div");
    language.classList.add("language");
    language.classList.add("text");
    var languages=document.getElementById("newLanguage").value;
    document.getElementById("newLanguage").value="";
    var string="";
    var l=languages.split(", ");
    for(var k=0;k<l.length;k++){
        string+="<span class='hilight"+(k+1)+"'>"+l[k]+"</span>&nbsp&nbsp";
    }
    language.innerHTML=string;
    theP.appendChild(language);
    i++;
}