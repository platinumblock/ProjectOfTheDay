var letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var greeks=["α","β","χ","δ","ε","φ","γ","","ι","","κ","λ","μ","ν","ο","π","","ρ","σ","τ","υ","","ω","ξ","θ","ζ"];
var numbers=["0","1","2","3","4","5","6","7","8","9"];
var sLetters=["ᵃ","ᵇ","ᶜ","ᵈ","ᵉ","ᶠ","ᵍ","ʰ","ᶦ","ʲ","ᵏ","ˡ","ᵐ","ⁿ","ᵒ","ᵖ","ᑫ","ʳ","ˢ","ᵗ","ᵘ","ᵛ","ʷ","ˣ","ʸ","ᶻ"];
var sNumbers=["⁰","¹","²","³","⁴","⁵","⁶","⁷","⁸","⁹"];
var height=28;
document.onkeydown = function (e) {
    e = e || window.event;
    var key=e.keyCode;
    console.log(key);
    var equation=document.getElementById("equation");
    if(e.altKey){
        if(key>=48 && key<=57){
            equation.innerHTML+=sNumbers[key-48];
        }
        if(key>=65 && key<=90){
            equation.innerHTML+=sLetters[key-65];
        }
    }else{
        if(key==8){
            equation.innerHTML=equation.innerHTML.substring(0,equation.innerHTML.length-1);
        }
        if(key==13){
            equation.innerHTML+="<br>";
            height+=6;
            document.getElementById("indicator").style.top=height+"%";
        }
        if(key>=48 && key<=57){
            if(e.shiftKey){
                if(key==48){
                    equation.innerHTML+=")";
                }
                if(key==57){
                    equation.innerHTML+="(";
                }
                if(key==56){
                    equation.innerHTML+="•"
                }
            }else{
                equation.innerHTML+=numbers[key-48];
            }
            
        }
        if(key>=65 && key<=90){
            if(e.shiftKey){
                equation.innerHTML+=greeks[key-65];
            }else{
                equation.innerHTML+=letters[key-65];
            }
        }
        if(key==187){
            if(e.shiftKey){
                equation.innerHTML+="+";
            }else{
                equation.innerHTML+="=";
            }
        }
        if(key==189){
            equation.innerHTML+="-";
        }  
        if(key==191){
            equation.innerHTML+="÷";
        }
    }
};