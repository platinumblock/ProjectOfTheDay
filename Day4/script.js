var replies=["Yo, wow I cant believe we can chat through this. This is truly the pinnacle of technology.","Bro what's up 😎","Of course, of course!","I'm doing very good ✅"];
var messages=[];
function sendMessage(){
    var message=document.getElementById("messageBox").value;
    var mBlob=document.createElement("span");
    mBlob.classList.add("message");
    mBlob.classList.add("mine");
    mBlob.style.top=getY()+"%";
    mBlob.innerHTML=message;
    messages.push(message);
    document.body.appendChild(mBlob);
    document.getElementById("messageBox").value="";
    setTimeout(() => {
        receiveReply(replies[0]);
        replies.shift();
    }, "2000");
}
function receiveReply(message){
    var mBlob=document.createElement("span");
    mBlob.classList.add("message");
    mBlob.classList.add("other");
    mBlob.style.top=getY()+"%";
    mBlob.innerHTML=message;
    messages.push(message);
    document.body.appendChild(mBlob);
}
function getY(){
    var y=20;
    for(var i=0;i<messages.length;i++){
        var message=messages[i];
        var charCount=message.length;
        y+=10+parseInt(charCount/50)*3;
    }
    return y;
}
function detect(event){
    if(event.keyCode === 13){
        event.preventDefault(); // Ensure it is only this code that runs
        sendMessage();
    }
}
