var stopping=true;
var balance=10;
function roll(){
    balance-=3;
    document.getElementById("win").style.display="none";
    document.getElementById("spin").style.display="none";
    document.getElementById("balance").innerHTML="$"+balance;
    var slots=document.getElementsByClassName("slot");
    for(var i=0;i<slots.length;i++){
        slots[i].innerHTML="❌";
    }
    for(var i=0;i<5;i++){
        slots[getRandom(0,slots.length)].innerHTML="💰";
    }
    var predictedWin=0;
    for(var i=1;i<12;i+=3){
        if(slots[i].innerHTML=="💰"){
            predictedWin++;
        }
    }
    var win=document.getElementById("win");
    if(predictedWin==0) win.innerHTML="Loser :(";
    if(predictedWin==1) win.innerHTML="You won $1!";
    if(predictedWin==2) win.innerHTML="You won $5!!";
    if(predictedWin==3) win.innerHTML="You won $20!!!";
    if(predictedWin==4) win.innerHTML="JACKPOT!!!!!";
    for(var i=0;i<slots.length;i++){
        slots[i].classList.add("rolling");
    }
    setTimeout(() => {
        stop();
    }, 3000);
}
function stop(){
    var slots=document.getElementsByClassName("slot");
    for(var i=0;i<slots.length;i++){
        slots[i].classList.remove("rolling");
        slots[i].style.top=(24+(i%3)*8)+"%";
    }
    var win=document.getElementById("win");
    win.style.display="flex";
    if(win.innerHTML=="You won $1!")balance+=1;
    if(win.innerHTML=="You won $5!!")balance+=5;
    if(win.innerHTML=="You won $20!!!")balance+=20;
    if(win.innerHTML=="JACKPOT!!!!!")balance+=1000;
    if(balance<3){
        alert("You ran out of money :(");
        location.reload();
    }
    document.getElementById("balance").innerHTML="$"+balance;
    document.getElementById("balance").classList.add("pulsing");
    document.getElementById("win").classList.add("pulsing");
    stopping=false;
    setTimeout(() => {
        stopping=true;
        document.getElementById("balance").classList.remove("pulsing");
        document.getElementById("win").classList.remove("pulsing");
        document.getElementById("spin").style.display="flex";
    }, 3000);
}
function getRandom(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}













let W = window.innerWidth;
let H = window.innerHeight;
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const maxConfettis = 150;
const particles = [];

const possibleColors = [
  "DodgerBlue",
  "OliveDrab",
  "Gold",
  "Pink",
  "SlateBlue",
  "LightBlue",
  "Gold",
  "Violet",
  "PaleGreen",
  "SteelBlue",
  "SandyBrown",
  "Chocolate",
  "Crimson"
];

function randomFromTo(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}

function confettiParticle() {
  this.x = Math.random() * W; // x
  this.y = Math.random() * H - H; // y
  this.r = randomFromTo(11, 33); // radius
  this.d = Math.random() * maxConfettis + 11;
  this.color =
    possibleColors[Math.floor(Math.random() * possibleColors.length)];
  this.tilt = Math.floor(Math.random() * 33) - 11;
  this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
  this.tiltAngle = 0;

  this.draw = function() {
    if(stopping){
        return;
    }
    context.beginPath();
    context.lineWidth = this.r / 2;
    context.strokeStyle = this.color;
    context.moveTo(this.x + this.tilt + this.r / 3, this.y);
    context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
    return context.stroke();
  };
}

function Draw() {
  const results = [];
    
  // Magical recursive functional love
  requestAnimationFrame(Draw);

  context.clearRect(0, 0, W, window.innerHeight);

  for (var i = 0; i < maxConfettis; i++) {
    results.push(particles[i].draw());
  }

  let particle = {};
  let remainingFlakes = 0;
  for (var i = 0; i < maxConfettis; i++) {
    particle = particles[i];

    particle.tiltAngle += particle.tiltAngleIncremental;
    particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 1;
    particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;

    if (particle.y <= H) remainingFlakes++;

    // If a confetti has fluttered out of view,
    // bring it back to above the viewport and let if re-fall.
    if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
      particle.x = Math.random() * W;
      particle.y = -30;
      particle.tilt = Math.floor(Math.random() * 10) - 20;
    }
  }
  

  return results;
}

window.addEventListener(
  "resize",
  function() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  },
  false
);

// Push new confetti objects to `particles[]`
for (var i = 0; i < maxConfettis; i++) {
  particles.push(new confettiParticle());
}

// Initialize
canvas.width = W;
canvas.height = H;
Draw();