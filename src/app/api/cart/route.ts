import { NextRequest, NextResponse } from "next/server";
import { db, cartTable } from "@/lib/drizzle";
import {v4} from "uuid"
import { cookies } from "next/headers";
import { sql, db as verceldb } from "@vercel/postgres";

// export const GET = async (request: NextRequest) => {
//     const setCookies =  cookies()
//     const userId = setCookies.get("user_id")?.value
    
//     try{
//         const res = await sql`SELECT * FROM cart WHERE user_id = ${userId}`
//         const result = await res
//         return NextResponse.json({result})
//     }
//     catch (error) {
//         console.log(error)
//         return NextResponse.json({message: "Something went wrong"})
//     }
// }

export const POST = async (request: NextRequest) => {
    const uid = v4()
    const setCookies =  cookies()
    const checkCookies = setCookies.get("user_id")?.value
    let user:any;
    if(!checkCookies){
        setCookies.set("user_id", `${uid}`)
        user = setCookies.get("user_id")?.value
    }
    else{
        user = setCookies.get("user_id")?.value
    }
    const req = await request.json()
    try{
        const res = await db.insert(cartTable).values({
            product_id: req.product_id,
            user_id: user,
            quantity: req.quantity,
            size: req.size
        }).returning()
        return NextResponse.json({res})
    }
    catch (error) {
        console.log(error)
        return NextResponse.json({message: "Something went wrong"})
    }
}