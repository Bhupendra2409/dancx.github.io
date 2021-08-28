
let navstatus = false;
let togglefun = function(){
    let toggle = document.getElementById('toggle');
    let nav = document.getElementById('navbar');
    let togbar = document.getElementById("togbar");
    let closeicon = document.getElementById("closeicon");

    if(!navstatus){
        togbar.style.height = "max-content";
        togbar.style.transition = "0.2s ease";
        closeicon.style.height="5rem";
        navstatus=true; 
    }
    else{
        togbar.style.height = "0";
        closeicon.style.height="0";
        togbar.style.transition = "0.2s ease";
        navstatus=false;
    }
}