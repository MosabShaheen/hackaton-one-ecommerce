import { urlForImage } from "@/lib/createSanity";
import { getProduct } from "@/lib/dataFetch";
import Image from "next/image";
import Link from "next/link";


export default async function AllProduct(){
  const products = await getProduct()
  return (
    <div className="container mx-auto">
      <div className="px-10 flex justify-center mt-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product:any)=>(
          <Link href={`/productDetail/${product._id}`} key={product._id}>
          <Image width="300" height="200" alt="product img" src={urlForImage(product.img).url()}/>
          <p className="font-semibold leading-6 tracking-wide text-[#212121] text-[1.05rem] mt-3">{product.name}</p>
          <p className="font-semibold leading-4 tracking-wide text-[#888] text-base mt-2">{product.type}</p>
          <p className="font-semibold leading-6 tracking-wide text-[#212121] text-[1.25rem] mt-3">${product.price}</p>
          </Link>
          ))
        }
        </div>
      </div>
    </div>
  )
}