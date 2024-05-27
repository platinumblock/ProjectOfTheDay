function handle(e){
    if(e.keyCode === 13){
        localStorage.setItem("city",document.getElementById("search").value);
        window.location.href="search.html";
    }
}