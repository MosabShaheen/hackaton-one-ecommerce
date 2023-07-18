import { NextRequest, NextResponse } from "next/server";
import { db, cartTable } from "@/lib/drizzle";
import { eq, and, desc, sql } from "drizzle-orm";
import { cookies } from "next/headers";
import { v4 } from "uuid";

export const GET = async (request: NextRequest) => {
  try {
    const setCookies = cookies();
    const userId = setCookies.get("user_id")?.value as string;
    const result = await db
      .select({
        price: sql<number>`sum(cart.quantity * cart.price)`,
        quantity: sql<number>`sum(cart.quantity)`,
      })
      .from(cartTable)
      .where(eq(cartTable.user_id, userId));
    return NextResponse.json(result[0], { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" });
  }
}

export const POST = async (request: NextRequest) => {
  const uid = v4();
  const setCookies = cookies();
  const checkCookies = setCookies.get("user_id")?.value;
  let user: any;
  if (!checkCookies) {
    setCookies.set("user_id", `${uid}`);
    user = setCookies.get("user_id")?.value;
  } else {
    user = setCookies.get("user_id")?.value;
  }
  const req = await request.json();
  try {
    const res = await db
      .insert(cartTable)
      .values({
        product_id: req.product_id,
        user_id: user,
        quantity: req.quantity,
        price: req.price,
        size: req.size,
        name: req.name,
        imageurl: req.imageURL,
      })
      .returning();

    return NextResponse.json({ res });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" });
  }
};

export const PATCH = async (request: NextRequest) => {
  const setCookies = cookies();
  const userId = setCookies.get("user_id")?.value as string;
  const req = await request.json();
  try {
    await db
      .update(cartTable)
      .set({ quantity: req.quantity })
      .where(and(eq(cartTable.user_id, userId), eq(cartTable.id, req.id)));
    return NextResponse.json({ message: "Item deleted successfully" });
  } catch (error) {
    return NextResponse.json({ response: "failed" }, { status: 500 });
  }
};

export const DELETE = async (request: NextRequest) => {
  const setCookies = cookies();
  const userId = setCookies.get("user_id")?.value as string;
  const itemId = request.headers.get("itemId") as any;
  try {
    await db
      .delete(cartTable)
      .where(and(eq(cartTable.user_id, userId), eq(cartTable.id, itemId))) // Include the product_id in the where clause
      .execute();

    return NextResponse.json({ message: "Item deleted successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" });
  }
};
