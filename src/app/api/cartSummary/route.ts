import { NextRequest, NextResponse } from "next/server";
import { db, cartTable } from "@/lib/drizzle";
import { eq, sql } from "drizzle-orm";
import { getCoockies } from "../cart/route";

export async function GET(request: NextRequest) {
    const userId = await getCoockies()
    try {
        const result = db.select({
            price: sql<number>`sum(cartTable.quantity * cartTable.price)`,
            quantity: sql<number>`sum(cartTable.quantity)`
        }).from(cartTable).where(eq(cartTable.user_id, userId))
        return NextResponse.json(result, { status: 200 });
    }
    catch(error){
        console.log(error)
    }
}