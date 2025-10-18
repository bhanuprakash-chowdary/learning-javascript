var colourChange=document.getElementById("colour-changer");
let colours=["red","blue","yellow","green","pink"];

let counter=0;

function changeColour(){
    if(counter>=colours.length){
        counter=0;
    }
    colourChange.style.background=colours[counter];
    counter++;
}

let timer=setInterval(changeColour,2000);

colourChange.onclick=function(){
    clearInterval(timer);
    colourChange.innerHTML = "Stopped buddy .."
}





