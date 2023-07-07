import React from "react";

export default function CartProductSkelton() {
  return (
    <>
      <div className="flex-[3]">
        <div className="flex gap-4 mt-4 hover:shadow-lg ease-in-out duration-150 flex-col sm:flex-row">
          <div className="animate-pulse rounded-md w-full h-44 bg-gray-400"></div>
          <div className="flex-1 sm:flex-[2] md:flex-[3]">
            <div className="animate-pulse rounded-md bg-gray-200 h-6 w-1/2"></div>
            <div className="animate-pulse rounded-md bg-gray-200 h-6 w-1/4"></div>
            <div className="animate-pulse rounded-md bg-gray-200 h-6 w-1/4"></div>
          </div>
        </div>
        <div className="flex gap-4 mt-4 hover:shadow-lg ease-in-out duration-150 flex-col sm:flex-row">
          <div className="animate-pulse rounded-md w-full h-44 bg-gray-400"></div>
          <div className="flex-1 sm:flex-[2] md:flex-[3]">
            <div className="animate-pulse rounded-md bg-gray-200 h-6 w-1/2"></div>
            <div className="animate-pulse rounded-md bg-gray-200 h-6 w-1/4"></div>
            <div className="animate-pulse rounded-md bg-gray-200 h-6 w-1/4"></div>
          </div>
        </div>
      </div>
      <div className="flex-1">
      <p className="font-bold text-xl text-black tracking-normal">
        Order Summary
      </p>
      <div className="flex justify-between items-center mt-4">
        <p>Quantity</p>
        <p className= "animate-pulse bg-muted h-[24px] w-full bg-gray-300"></p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p>Price</p>
        <p className="animate-pulse bg-muted h-[24px] w-full bg-gray-300">$ </p>
      </div>
      <button disabled className="text-sm font-medium leading-4 bg-[#212121] text-[#fff] px-4 py-3 items-center mt-4 w-full">
        Process to Checkout
      </button>
    </div>
    </>
  );
}
