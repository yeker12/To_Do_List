const clock = document.querySelector("#clock");

function timeDisplay(){
    const today = new Date();
    const hours = String(today.getHours());
    const minutes = String(today.getMinutes());
    const seconds = String(today.getSeconds());
    clock.innerText = `${hours.padStart(2,"0")}:${minutes.padStart(2,"0")}:${seconds.padStart(2,"0")}`;
}

timeDisplay();
setInterval(timeDisplay,1000);
const a = "2";

