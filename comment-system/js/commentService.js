import { comments } from "./state.js"
export function addComment(text){
    const obj={
        id:Date.now(),
        text,
        replies:[]
    }
    comments.push(obj)
    
    console.log(obj);
    
}