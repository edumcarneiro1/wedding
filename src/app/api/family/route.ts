export async function GET(req:Request){
    return new Response("Family",{
        status:200,
        headers:{ "Content-Type": "application/json" }
    })
}