"use client";
import Image from "next/image";
import { urlForImage } from "@/lib/createSanity";
import { FC } from "react";
import { useState } from "react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DetailProduct: FC<{ product: any }> = ({ product }) => {
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1)
  const handleIncrement = () => {
    setQuantity((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevCount) => prevCount - 1);
    }
  }
  const data = {
    product_id : product._id,
    quantity: quantity,
    price: product.price,
    size: size
  }
  const handleAddToCart = async() => {
    if(data.size==""){
        toast.error("Please select size");
    }
    else{
    const send = async () => {
        const response = await fetch("/api/cart", {
            method: "POST",
            body: JSON.stringify(data)
        })
        const result = response.json()
        return(result)
    }
    toast.promise(
       send,
       {
        pending: 'Adding to Cart ...',
        success: `${product.name} Added to the Cart 👌`,
        error: `${product.name} can not Added 🤯`
      },
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
         theme: "light",
        }
    ).then(()=> {
      window.location.reload()
    })
    }
  }
  const [button, setButton] = useState({
    "id1": false,
    "id2": false,
    "id3": false,
    "id4": false,
    "id5": false,
  })
  const notify = () => toast("Wow so easy!");
  return (
    <div className="mt-20 px-10 overflow-hidden">
      <div className="flex gap-6 flex-col lg:flex-row">
        <div className="flex-[2] flex justify-between gap-6 lg:gap-8">
          <div className="flex flex-col gap-4">
            <Image
              className="cursor-pointer"
              src={urlForImage(product.img).url()}
              width="100"
              height="200"
              alt="gallery img"
            />
          </div>
          <Image
            width="600"
            height="200"
            alt="product img"
            src={urlForImage(product.img).url()}
          />
        </div>
        <div className="h-[70%] flex flex-col gap-10 mt-16 flex-1">
          <div>
            <p className="font-normal sm:font-medium lg:font-normal text-[1.625rem] sm:text-[2rem] lg:text-[1.625rem] leading-8 tracking-wide text-[#212121]">
              {product.name}
            </p>
            <p className="font-semibold text-xl sm:text-3xl lg:text-xl opacity-20">
              {product.type}
            </p>
          </div>
          <div>
            <p className="font-bold text-base lg:text-[0.9rem] leading-5 tracking-wider text-[#212121] uppercase">
              Select Size
            </p>
            <div className="flex gap-4 mt-5">
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
              <button
                onClick={() => {toast.success("Extra Small Size is Selected!")
                setSize("XS")
                setButton({
                    "id1": true,
                    "id2": false,
                    "id3": false,
                    "id4": false,
                    "id5": false,
                  })}}

                className={button.id1?
                    "selectedSize": "size"}
              >
                SX
              </button>
              <button
                onClick={() => {toast.success("Small Size is Selected!")
                setSize("S")
                setButton({
                    "id1": false,
                    "id2": true,
                    "id3": false,
                    "id4": false,
                    "id5": false,
                  })}}
                  className={button.id2?
                    "selectedSize": "size"}
              >
                S
              </button>
              <button
                onClick={() => {toast.success("Medium Size is Selected!")
                setSize("M")
                setButton({
                    "id1": false,
                    "id2": false,
                    "id3": true,
                    "id4": false,
                    "id5": false,
                  })}}
                  className={button.id3?
                    "selectedSize": "size"}
              >
                M
              </button>
              <button
                onClick={() => {toast.success("Large Size is Selected!")
                setSize("L")
                setButton({
                    "id1": false,
                    "id2": false,
                    "id3": false,
                    "id4": true,
                    "id5": false,
                  })}}
                  className={button.id4?
                    "selectedSize": "size"}
              >
                L
              </button>
              <button
                onClick={() => {toast.success("Extra Large Size is Selected!")
                setSize("XL")
                setButton({
                    "id1": false,
                    "id2": false,
                    "id3": false,
                    "id4": false,
                    "id5": true,
                  })}}
                  className={button.id5?
                    "selectedSize": "size"}
              >
                XL
              </button>
            </div>
          </div>
          <div className="flex gap-8 items-center">
            <p className="font-bold text-lg lg:text-base leading-5 tracking-wider text-black">
              Quatity:
            </p>
            <div className="flex gap-3 items-center">
              <button onClick={handleDecrement} className="w-9 h-9 rounded-full bg-white border border-gray-100 shadow-md hover:shadow-lg text-3xl font-light flex items-center justify-center">
                -
              </button>
              <p>{quantity}</p>
              <button onClick={handleIncrement} className="w-9 h-9 rounded-full bg-white border border-gray-100 shadow-md hover:shadow-lg text-2xl font-light flex items-center justify-center">
                +
              </button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={handleAddToCart} className="text-xs sm:text-sm font-medium leading-4 bg-[#212121] text-[#fff] px-2 subsc:w-[50%] lg:w-auto lg:px-4 py-[0.65rem] flex gap-2 items-center justify-center">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-xl prodsc:text-2xl font-bold"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span>Add to Cart</span>
            </button>
            <span className="font-bold text-2xl leading-7 text-[#212121] tracking-widest">
              ${product.price}
            </span>
          </div>
        </div>
      </div>
      <div className="lg:px-10 mt-24 mb-24 sm:mb-36 md:mb-56">
        <div className="relative border-b-2 border-[#c4c4c4]">
          <p className="font-extrabold text-[4rem] sm:text-[6rem] md:text-[7.5rem] leading-[151px] text-[#f2f3f7] opacity-70">
            Overview
          </p>
          <p className="font-bold text-2xl leading-6 text-[#212121] mb-1 md:mb-8 sm:mb-12 absolute top-[45%]">
            Product Information
          </p>
        </div>
        <div className="flex mt-10">
          <p className="uppercase font-bold text-base text-[#666] leading-5 tracking-wider flex-1">
            Product Detail
          </p>
          <p className="font-light text-base text-[#666] leading-[26px] text-justify tracking-wider flex-[2]">
            {product.details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
