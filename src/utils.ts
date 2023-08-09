import { UnauthorizedException } from "next-api-decorators"
import { getServerSession } from "next-auth"
import { authOptions } from "./pages/api/auth/[...nextauth]"
import { NextApiRequest, NextApiResponse } from "next"

export async function checkAuth (req:NextApiRequest, res:NextApiResponse) {
    const session = await getServerSession(req, res, authOptions)
    if (!session) {
        return false
    }
    return true
}

export async function clearCachePost (){
    try {
        await fetch(`${process.env.API_CLOUDFLARE_URL}/${process.env.API_CLOUDFLARE_ZONE_ID}/purge_cache`,{
            method : 'POST',
            body : JSON.stringify({
              "files": [ process.env.BASE_URL + "/api/post" ]
            }),
            headers:{
              'Authorization' : 'Bearer ' + process.env.API_CLOUDFLARE_TOKEN,
              'Content-Type': 'application/json'
            }
        })
        return true
    } catch (error) {
        console.error(error)
    }
    return false
}