//sleep fucntion
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
//get timer element and set the time
let timer = document.getElementById("timer");
let minutes =60;
let seconds = 0;


if(seconds < 10)
    timer.textContent=minutes + ":" + "0" +seconds;
else
    timer.textContent=minutes + ":" + seconds;

async function countdown(){
    //countdown
    while(minutes >0 || seconds>0){
    //resets seconds and decrements minutes
        if(seconds==0)
            minutes--,seconds=59, 
            timer.textContent=minutes + ":" + seconds;
        
        await sleep(1000)
        
        seconds--;

        if(seconds < 10)
            timer.textContent=minutes + ":" + "0" +seconds;
        else
            timer.textContent=minutes + ":" + seconds;
    }
}

countdown();