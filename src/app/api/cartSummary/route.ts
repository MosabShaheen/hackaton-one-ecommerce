import { NextRequest, NextResponse } from "next/server";
import { db, cartTable } from "@/lib/drizzle";
import { eq, and, desc, sql } from "drizzle-orm";
import { cookies } from "next/headers";
import { v4 } from "uuid";

export const GET = async (request: NextRequest) => {
  const setCookies = cookies();
  const userId = setCookies.get("user_id")?.value as string;
  try {
    const res = await db
      .select()
      .from(cartTable)
      .where(eq(cartTable.user_id, userId))
      .orderBy(desc(cartTable.id) );

    return NextResponse.json({ res });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" });
  }
};
