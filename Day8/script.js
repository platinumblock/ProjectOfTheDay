class Thing{
    constructor(name,size,date,type,folder){
        this.name=name;
        this.size=size;
        this.date=date;
        this.type=type;
        this.folder=folder;
    }
}
var computer=[new Thing("Downloads","100 GB","5/30/24","folder","Base"),new Thing("image1.png","50 GB","5/30/24","file","Downloads"),new Thing("file1.txt","50 GB","2/2/22","file","Downloads"),new Thing("Documents","1 B","1/1/1500","folder","Base"),new Thing("MVHS","2 B","5/31/24","folder","Documents"),new Thing("grades.png","30 KB","5/30/24","file","MVHS"),new Thing("letterofrec.pdf","100 TB","1/1/24","file","MVHS"),new Thing("bestlanguage.js","0 B","5/31/24","file","Documents"),new Thing("Photos","100 PB","5/31/24","folder","Base"),new Thing("UCB.jpg","1 MB","3/28/24","file","Photos"),new Thing("file2.txt","500 XB","5/31/24","file","Downloads")];
var currentFolder="Base";
console.log(computer[4].folder);
function render(givenFolder){
    currentFolder=givenFolder;
    var old1=document.getElementsByClassName("file");
    var l1=old1.length;
    for(var i=0;i<l1;i++){
        old1[0].remove();
    }
    var old2=document.getElementsByClassName("folder");
    var l2=old2.length;
    for(var i=0;i<l2;i++){
        old2[0].remove();
    }
    var counter=0;
    for(var i=0;i<computer.length;i++){
        if(computer[i].folder===givenFolder){
            if(computer[i].type=="folder"){
                var folder=document.createElement("button");
                folder.classList.add("folder");
                folder.setAttribute( "onClick", "render('"+computer[i].name+"')");
                folder.style.top=(25+counter*9.8)+"%";
                var image=document.createElement("img");
                image.classList.add("image");
                image.src="folder2.png";
                var name=document.createElement("div");
                name.classList.add("name");
                name.innerHTML=computer[i].name;
                var size=document.createElement("div");
                size.classList.add("size");
                size.innerHTML=computer[i].size;
                var date=document.createElement("div");
                date.classList.add("date");
                date.innerHTML=computer[i].date;
                console.log(image.src);
                folder.appendChild(image);
                folder.appendChild(name);
                folder.appendChild(size);
                folder.appendChild(date);
                document.body.appendChild(folder);
            }
            if(computer[i].type=="file"){
                var file=document.createElement("div");
                file.classList.add("file");
                file.style.top=(25+counter*9.8)+"%";
                var image=document.createElement("img");
                image.classList.add("image");
                image.src="file.svg";
                var name=document.createElement("div");
                name.classList.add("name");
                name.innerHTML=computer[i].name;
                var size=document.createElement("div");
                size.classList.add("size");
                size.innerHTML=computer[i].size;
                var date=document.createElement("div");
                date.classList.add("date");
                date.innerHTML=computer[i].date;
                console.log(image.src);
                file.appendChild(image);
                file.appendChild(name);
                file.appendChild(size);
                file.appendChild(date);
                document.body.appendChild(file);
            }
            counter++;
        }
    }
}
function back(){
    for(var i=0;i<computer.length;i++){
        if(computer[i].name==currentFolder){
            render(computer[i].folder);
            break;
        }
    }
}
render("Base");

