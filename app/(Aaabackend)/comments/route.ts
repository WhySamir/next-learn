import { NextRequest } from "next/server";
// extract query and middlware both  standard Request object and adds extra features like Access to cookies, geo, ip, nextUrl
import { commentData } from "./data";

export async function GET(request:NextRequest){
    const searchParams = request.nextUrl.searchParams;
    const query= searchParams.get("query")
    const filteredComments = query? commentData.filter((comment)=>comment.text.includes(query)):commentData
    return Response.json(filteredComments)
}

export async function POST(req:Request){
    const comment =await req.json()
    const newComment = {
        id:commentData.length +1,
        text:comment.text
    }
    //JSON.stringify convert obj in json format string
    return new Response(JSON.stringify(newComment),{
        headers:{"Content-Type":"application/json"},
        status:201
    })

}