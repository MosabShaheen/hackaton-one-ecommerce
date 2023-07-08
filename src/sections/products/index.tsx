"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { getProduct } from "@/lib/dataFetch";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/lib/createSanity";

export default async function Products() {
  const products = await getProduct();
  return (
    <div className=" container mx-auto">
      <div className="my-40 px-0 sm:px-10 -z-50">
        <p className="uppercase text-center font-bold text-xs leading-4 tracking-widest text-[#0062f5]">
          products
        </p>
        <h2 className="capitalize text-center font-bold text-[32px] leading-10 tracking-wide text-[#212121] mt-3 mb-4">
          check what we have
        </h2>
        <Swiper
          spaceBetween={0}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
        >
          {products.map((product: any) => (
            <SwiperSlide key={product._id}>
              <Link className="mb-8 hover:scale-110 duration-700 ease-in-out" href={`/product-detail/${product._id}`} key={product._id}>
                <Image
                  width="400"
                  height="200"
                  alt="product img"
                  src={urlForImage(product.img).url()}
                />
                <p className="font-semibold leading-6 tracking-wide text-[#212121] text-[1.05rem] mt-3">
                  {product.name}
                </p>
                <p className="font-semibold leading-6 tracking-wide text-[#212121] text-[1.25rem] mt-3">
                  ${product.price}
                </p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
