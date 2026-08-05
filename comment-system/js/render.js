import { loadComments, saveComments } from "./storage.js";

export function  renderComments(comments){
    const container=document.querySelector("#commentsContainer");
    container.innerHTML="";
    comments.map((comment)=>{
       const card=document.createElement("div");
       const p=document.createElement("p");
       const button=document.createElement("button");
       p.textContent=`${comment.text}`
       button.textContent="Reply";

       card.append(p);
       card.append(button);

       //render reply
       comment.replies.map((reply)=>{

             const replyCard=document.createElement("div");
        const p=document.createElement("p");
        p.textContent=reply.text;

       replyCard.append(p);

       card.append(replyCard)
        })

        container.append(card);

       button.addEventListener('click',()=>{
        console.log(comment.id);

        const input=document.createElement("input");
        const sendButton=document.createElement("button");
        sendButton.textContent="Send";

        card.append(input)
        card.append(sendButton)

        //push replies to the selected comment object
        sendButton.addEventListener('click',()=>{
            comment.replies.push({
            id:Date.now(),
            text: input.value
        })
       
        saveComments(comments)
        renderComments(comments)
         
        })
      
       

       })

       
    })
}