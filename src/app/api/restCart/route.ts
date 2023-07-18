import { NextRequest, NextResponse } from "next/server";
import { db, cartTable } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";

export const DELETE = async (request: NextRequest) => {
    const setCookies = cookies();
    const userId = setCookies.get("user_id")?.value as string;
    try {
      await db
        .delete(cartTable)
        .where(eq(cartTable.user_id, userId))
        .execute();
  
      return NextResponse.json({ message: "Item deleted successfully" });
    } catch (error) {
      return NextResponse.json({ message: "Something went wrong" });
    }
  };