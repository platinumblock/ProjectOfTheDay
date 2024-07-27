var alphabet = "abcdefghijklmnopqrstuvwxyz";
function code(){
    document.getElementById('code').innerHTML+=alphabet[Math.floor(Math.random() * alphabet.length)]+" ";
    setTimeout(() => {
        code();
      }, "10");
}
code();