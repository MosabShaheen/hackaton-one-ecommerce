
import { cookies } from "next/headers";
import {sql} from "@vercel/postgres"
import ShowCart from "@/sections/showCart";


export default async function Cart() {
  const setCookies = cookies();
  const userId = setCookies.get("user_id")?.value;
  const { rows } = await sql`SELECT * FROM cart WHERE user_id = ${userId}`;
  
  return <ShowCart rows={rows}/>
}

