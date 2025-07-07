import { cookies, headers } from "next/headers";
import {type NextRequest } from "next/server";

export async function GET(request:NextRequest){
    // normal non next 
    // const requestHeaders = new Headers(request.headers)
    // console.log(requestHeaders.get('Authorization'))
    
    // normal non next
    // const cookie = request.cookies.get('theme')
    // console.log(cookie)

    const headersList = await headers()
    console.log(headersList.get('Authorization'))


    const cookieListStore = await cookies()

    cookieListStore.set("resultsPerPage","20")

    console.log(cookieListStore.get('theme'))
    console.log(cookieListStore)
    return new Response('Hello Profile from backend api',{
        headers:{"Content-type":"text/html",
            "Set-cookie":"theme=dark"
        },
    })
}