
import { env } from "@/env";
import { cookies } from "next/headers"

const authUrl = env.AUTH_URL 


export const userService = {
    getSession : async function (){
        try {
            const cookieStore = await cookies();
            console.log(cookieStore.toString())

            const res = await fetch(`${authUrl}/get-session`, {
                headers: {
                    cookie: cookieStore.toString()
                },
                cache: 'no-store'
            })

            const session = await res.json();
            if(session === null){
                return {data : null , error : {message : 'No session data found'}}
            }
            return {data : session , error : null};
        } catch (error) {
            return {data : null , error : {message : 'Failed to fetch session data', error : error}}
        }
    }
}