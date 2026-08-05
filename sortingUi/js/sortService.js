import { students } from "./state.js";
export function sortStudents(type){
    const studenCopy=[...students];

    if(type === "name"){
        return studenCopy.sort((a,b)=>a.name.localeCompare(b.name));
    }else if(type === "age"){
        return studenCopy.sort((a,b)=>a.age-b.age);
    }else if(type=== "marks"){
        return  studenCopy.sort((a,b)=>b.marks-a.marks);
    }else{
        return studenCopy;
    }
}