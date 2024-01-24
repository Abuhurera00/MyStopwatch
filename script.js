const startTime = document.getElementById('start-time');
const  stopTime = document.getElementById('stop-time');
const resetTime = document.getElementById('reset-time');
const secondsDisplay = document.getElementById('sec');
const tnsDisplay = document.getElementById('tns');
let interval;
let sec = 0;
let tns = 0;


startTime.onclick = ()=>{
    interval = setInterval(() => {
        tns++


        if(tns > 99){
            tns = 00;
            sec++;
            secondsDisplay.innerHTML = `0${sec}`
        }
        if(sec >9){
            secondsDisplay.innerHTML = sec
        }
        if(tns < 10){
            tns = `0${tns}`
        }
        tnsDisplay.innerHTML = tns;
    }, 10);
}
stopTime.onclick = ()=>{
    clearInterval(interval);
}
resetTime.onclick = ()=>{
    clearInterval(interval)
    tns = 00
    sec = 00
    tnsDisplay.innerHTML = `0${tns}`
    secondsDisplay.innerHTML = `0${sec}`
}

