
export function renderStudents(students){
    const studentContainer=document.querySelector(".studentContainer")
    studentContainer.innerHTML="";
students.forEach((student)=>{
    
    const div=document.createElement("div");
    const p1=document.createElement('p');
    const p2=document.createElement('p');
    const p3=document.createElement('p');
   

    p1.textContent=student.name;
    p2.textContent=student.age;
    p3.textContent=student.marks;
    div.append(p1);
    div.append(p2);
    div.append(p3);

    studentContainer.append(div);
 
})
}