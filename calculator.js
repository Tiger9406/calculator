function num(val){
    if(current!="0"){
        current+=val;
    }
    else{
        current=val;
    }
    update();
}
function oper(op){
    operation=op;
    previous=current;
    current=0;
    update();
}

function equals(){
    if(operation==null){
        return;
    }
    else if(operation=="+"){
        let temp=previous;
        previous=current;
        current=String(Number(temp)+Number(current));
    }
    else if(operation=="-"){
        let temp=previous;
        previous=current;
        current=String(Number(temp)-Number(current));
    }
    else if(operation=="*"){
        let temp=previous;
        previous=current;
        current=String(Number(temp)*Number(current));
    }
    else if(operation=="/"){
        let temp=previous;
        previous=current;
        current=String(Number(temp)/Number(current));
    }
    update();
    operation=null;
}

function a_clear(){
    previous = null;
    current="0";
    update();
}

function clear(){
    current = "0";
    update();
}

function update(){
    current_display.textContent=current;
    previous_display.textContent=previous;
}

let current="5";
let previous=null;
let operation=null;

const current_display=document.querySelector("#current");
const previous_display=document.querySelector("#previous");

update();

function handleClick(event){
    if(event.target.classList.contains('number')){
        num(event.target.textContent);
    }
    else if(event.target.classList.contains('operation')){
        console.log("hi");
        oper(event.target.textContent);
    }
    else if(event.target.id=="equals"){
        equals();
    }
    else if(event.target.id=="a-clear"){
        a_clear();
    }
    else if(event.target.id=="clear"){
        clear();
    }
}

document.querySelector("#input").addEventListener("click", handleClick);