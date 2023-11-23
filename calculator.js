function num(val){
    current+=val;
    current_display.textContent=current;
}

function a_clear(){
    previous = null;
    current="0";
    current_display.textContent=current;
    previous_display.textContent=previous;
}

function clear(){
    current = "0";
    current_display.textContent=current;
}

let current="5";
let previous="100";
let operation=null;

const current_display=document.querySelector("#current");
current_display.textContent=current;
const previous_display=document.querySelector("#previous");
previous_display.textContent=previous;

function handleClick(event){
    if(event.target.classList.contains('number')){
        num(event.target.textContent);
    }
    else if(event.target.classList.contains('operator')){
        // if clicked operator
    }
    else if(event.target.id=="equals"){
        // if clicked number
    }
    else if(event.target.id=="a-clear"){
        a_clear();
    }
    else if(event.target.id=="clear"){
        clear();
    }
}

document.querySelector("#input").addEventListener("click", handleClick);