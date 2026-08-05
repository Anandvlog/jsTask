import { startTimer } from "./timerService.js";

const button=document.querySelector("#otp-button")
const countdown=document.querySelector("#countdown");

button.addEventListener('click',(e)=>{
    console.log("click");
    startTimer(button,countdown)
})
