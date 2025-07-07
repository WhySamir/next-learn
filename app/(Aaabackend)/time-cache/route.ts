//caching it only works with GET Method
export const dynamic =  "force-static"
//will display same time even after reload
export const revalidate =10

export async function GET(){
    return Response.json({time:new Date().toLocaleTimeString()})
}