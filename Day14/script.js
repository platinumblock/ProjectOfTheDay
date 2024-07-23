class Goal{
    constructor(emoji,name,date,priority){
        this.emoji=emoji
        this.name=name;
        this.date=date;
        this.priority=priority;
    }
}
var goals=[new Goal("💻","Complete 100 POTDs","01/01/26","Medium"),new Goal("💻","Complete 100 POTDs","01/01/26","Low")];
function render(){
    var old=document.getElementsByClassName("goal");
    var l=old.length;
    for(var i=0;i<l;i++){
        old[0].remove();
    }
    for(var i=0;i<goals.length;i++){
        var goal=document.createElement("div");
        goal.classList.add("goal");
        goal.style.top=(30+10.02*i)+"%";
        var emoji=document.createElement("div");
        emoji.classList.add("emoji");
        emoji.innerHTML=goals[i].emoji;
        var name=document.createElement("div");
        name.classList.add("name");
        name.innerHTML=goals[i].name;
        var date=document.createElement("div");
        date.classList.add("date");
        date.innerHTML=goals[i].date;
        var priority=document.createElement("div");
        priority.classList.add("priority");
        var color=document.createElement("span");
        color.innerHTML=goals[i].priority;
        if(goals[i].priority=="High"){
            color.classList.add("high");
        }
        if(goals[i].priority=="Medium"){
            color.classList.add("medium");
        }
        if(goals[i].priority=="Low"){
            color.classList.add("low");
        }
        priority.appendChild(color);
        goal.appendChild(emoji);
        goal.appendChild(name);
        goal.appendChild(date);
        goal.appendChild(priority);
        document.body.appendChild(goal);
    }
}
function newGoal(){
    var emoji=document.getElementById("newEmoji").value;
    var name=document.getElementById("newName").value;
    var date=document.getElementById("newDate").value;
    var priority=document.getElementById("newPriority").value;
    goals.push(new Goal(emoji,name,date,priority));
    render();
}
render();
