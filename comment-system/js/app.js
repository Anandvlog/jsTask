import { addComment } from "./commentService.js";
import { renderComments } from "./render.js";
import { comments } from "./state.js";
import { saveComments } from "./storage.js";

const form=document.querySelector("#form");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const commentData=new FormData(form);
    console.log(commentData.get('comment'));
    
    addComment(commentData.get('comment'))
    saveComments(comments)
    renderComments(comments)

    form.reset()
    
})

