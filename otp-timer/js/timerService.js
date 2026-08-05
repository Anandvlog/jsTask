
 const OTP_DURATION=30;
 let remainTime=OTP_DURATION;
 let intervalId=null;


export function startTimer(button,countdown){
    remainTime=OTP_DURATION;
    button.disabled=true;
   intervalId= setInterval(()=>{
    updateTimer(button,countdown)
    
    },1000)
}

function stopTimer(button){
    clearInterval(intervalId);
    intervalId=null;
    button.disabled=false;
    button.textContent="Resend OTP"

}

function updateTimer(button,countdown){
        remainTime--;
        countdown.textContent=`CountDown: ${remainTime}`
        if(remainTime === 0){
            stopTimer(button)
        } 
    
}