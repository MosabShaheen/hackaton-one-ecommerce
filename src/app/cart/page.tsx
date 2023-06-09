import { sql } from "@vercel/postgres";
import { cookies } from "next/headers";
import { urlForImage } from "@/lib/createSanity";
import Image from "next/image";
import ShowCart from "@/sections/showCart";
import { createSanity } from "@/lib/createSanity";
import { FC } from "react";

export default async function Cart() {
  const setCookies = cookies();
  const userId = setCookies.get("user_id")?.value;
  const { rows } = await sql`SELECT * FROM cart WHERE user_id = ${userId}`;
  
  // const filterProduct = products.map((product:any)=>{
  //   const id = product._id
  //   const filterRow = rows.filter((row:any)=>{
  //     <div key={row.id}>
  //     </div>
  //   })
  //   console.log(idNeeded)
  //   return filterRow
  // })
  // const filter = () => {

  // }
  // const showproduct = ()=>{
  //   rows.map((row:any)=>{
  //     <div key={row.id}>
  //       {products.filter((product:any)=>product._id == row.product_id)}
  //     </div>
  //   })
  // }
  // const getProducts = rows.map((row:any)=>{
  //   return(
  //   <div key={row.id}>
  //     <FetchProduct />
  //   </div>
  //   )
  // })
  // const fetchProduct = (id:any) =>{
  //   const products =  createSanity.fetch(`*[_type == "products"&& _id == "${id}]`)
  //   console.log(products)
  //   return(
  //     <div>
        
  //     </div>
  //   )
  // }
  
  return (<>
  
    <div className="container mx-auto">
      {
        // getProducts
      }
      {/* <div className="mt-20 px-10 mb-52 overflow-hidden">
        <p className="font-bold text-2xl text-black tracking-wide">
          Shopping Cart
        </p>
        <div className="flex gap-8 justify-between flex-col lg:flex-row">
        {rows.map((row:any)=>(
        
          <div key={row.id} className="flex-[3]">
            {data.map((data:any) => (
            <div key={data._id}  className="flex gap-4 mt-4 hover:shadow-lg ease-in-out duration-150 flex-col sm:flex-row">
                
                <Image width="300" height="200" alt={`${data.name}`} src={urlForImage(data.img).url()} />
                <ShowCart data={data} row={row}  />
            </div>
            ))}
            
          </div>
          ))}
        </div>
      </div> */}
    </div>
    </>
  );
}
