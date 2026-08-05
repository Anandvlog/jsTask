
import { renderContent } from "./render.js";
import { getTabContent } from "./tabService.js";

const buttons=document.querySelectorAll("button");


buttons.forEach((button)=>{
button.addEventListener('click',()=>{
    const content = getTabContent(button.id);
    renderContent(content)
    console.log(button.id);
    
})
})

