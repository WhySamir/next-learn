import { commentData } from "../data"

export async function GET(_req:Request,{params}:{params:Promise<{id:string}>}){
const {id} = await params
 if (Number(id) === -1) {
    return new Response("Comment not found", { status: 404 });
  }

const comment = commentData.find((comment)=>{
    return (comment.id === Number(id))
}
)
if(!comment){
    return new Response("Comment not found", { status: 404 });
}
return  Response.json(comment)
}
export async function PATCH(req:Request,{params}:{params:Promise<{id:string}>}){
    const {id} =await  params
    const {text} = await  req.json();
    const commentIdx = commentData.findIndex((comment)=>comment.id===Number(id))
     if (commentIdx === -1) {
    return new Response("Comment not found", { status: 404 });
  }

    commentData[commentIdx].text = text;
    return  Response.json(commentData[commentIdx])

}

export async function DELETE(_req:Request,{params}:{params:Promise<{id:string}>}){
    const {id} = await params
    const deleteCommentIdx =  commentData.findIndex((comment)=>comment.id === Number(id))
    commentData.splice(deleteCommentIdx,1)
    return Response.json("deleted comment")

}