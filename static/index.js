
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

anime({
    targets: '#styleboxwelmsg4',
    width: '100%',
    easing :'easeInOutQuad',
    direction: 'alternate',
    duration :10000,
    loop: true,
});
anime({
    targets :'#styleboxwelmsg3',
    translateX : 100,
    duration : 2000,
    loop :true,
    direction: 'alternate',
})
anime({
    targets :'#styleboxwelmsg2',
    translateX : 100,
    duration : 2000,
    loop :true,
    direction: 'alternate',
    delay : '1000',
})
anime({
    targets :'#styleboxwelmsg1',
    translateX : 100,
    duration : 2000,
    loop :true,
    direction: 'alternate',
    delay : '2000',
})