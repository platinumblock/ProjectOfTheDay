var going=false;
var recognition = new (window.webkitSpeechRecognition)();
recognition.lang = 'en-US';

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    var confidence=event.results[0][0].confidence;
    document.getElementById("confidence").innerHTML=Math.round(confidence*100)+"%";
    document.getElementById('output').innerHTML+=" "+transcript;
};

recognition.onend = () => {
    if(going){
        recognition.start();
    }
};

function start(){
    going=true;
    recognition.start();
    document.getElementById("start").style.filter="opacity(0.6)";
    document.getElementById("stop").style.filter="opacity(1)";
}

function stop(){
    going=false;
    recognition.stop();
    document.getElementById("stop").style.filter="opacity(0.6)";
    document.getElementById("start").style.filter="opacity(1)";
}

function clearOutput(){
    document.getElementById('output').innerHTML="";
}