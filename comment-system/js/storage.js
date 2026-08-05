

export function saveComments(comments){
    localStorage.setItem("comments",JSON.stringify(comments))
}

export function loadComments(){
  return  JSON.parse( localStorage.getItem('comments')) || []
}