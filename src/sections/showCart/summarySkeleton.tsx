import React from "react";

export default function CartSummarySkelton() {
  return (
    <div className="flex-1">
      <p className="font-bold text-xl text-black tracking-normal">
        Order Summary
      </p>
      <div className="flex justify-between items-center mt-4">
        <p>Quantity</p>
        <p className="animate-pulse bg-muted h-[24px] w-full bg-gray-300"></p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p>Price</p>
        <p className="animate-pulse bg-muted h-[24px] w-full bg-gray-300">$ </p>
      </div>
      <button
        disabled
        className="text-sm font-medium leading-4 bg-[#212121] text-[#fff] px-4 py-3 items-center mt-4 w-full"
      >
        Process to Checkout
      </button>
    </div>
  );
}
