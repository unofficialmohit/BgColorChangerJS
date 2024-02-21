const start=document.querySelector('#start');
const stop=document.querySelector('#stop');
const body=document.querySelector('body');

let intervalId;
start.addEventListener('click',()=>{
console.log("Start Pressed");
if(!intervalId){
intervalId=setInterval(startColorChange,1000);
console.log("Start Worked");
}
});

stop.addEventListener('click',()=>{
console.log("Stop Pressed");
if(intervalId){
clearInterval(intervalId);
intervalId=null;
console.log("Stop Worked");
}
});

const startColorChange=function(){
    body.style.backgroundColor=randomColor();
}
const randomColor=function(){
    const colorID="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++)
    {
        color+=colorID[Math.floor(Math.random()*16)];
    }
    // console.log(color);
    return color;
}
