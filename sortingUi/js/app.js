import { renderStudents } from "./render.js";
import { sortStudents } from "./sortService.js";
import { students } from "./state.js";
const select=document.querySelector("#sortSelect")

renderStudents(students);

select.addEventListener('change',(e)=>{
    const sorted=sortStudents(e.target.value);
    renderStudents(sorted)
})


