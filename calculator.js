function a_clear(){

}

function clear(){

}

let current=0;
let previous=null;
let operation=null;

function handleClick(event){
    if(event.target.classList.contains('number')){
        // if clicked number
    }
    else if(event.target.classList.contains('operator')){
        // if clicked operator
    }
    else if(event.target.id=="equals"){
        // if clicked number
    }
    else if(event.target.id=="dot"){
        // if clicked number
    }
    else if(event.target.id=="a-clear"){
        // if clicked all-clear
    }
    else if(event.target.id=="clear"){
        // if clicked clear
    }
}

document.querySelector("#input").addEventListener("click", handleClick);