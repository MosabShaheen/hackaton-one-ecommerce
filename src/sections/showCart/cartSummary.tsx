"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect } from "react";

const CartSummary = () => {
  const cartValue = useSelector((state: RootState) => state.cart.totalQuantity);
  const priceValue = useSelector((state: RootState) => state.cart.totalPrice);
  // const cartSummary = async () => {
  //   const response = await fetch("/api/cartSummary", { method: "GET", cache: "no-store"})
  //   console.log(response)
  // }
  // useEffect(()=> {
  //   cartSummary()
  // })
  return (
    <div className="flex-1">
      <p className="font-bold text-xl text-black tracking-normal">
        Order Summary
      </p>
      <div className="flex justify-between items-center mt-4">
        <p>Quantity</p>
        <p>{cartValue} Product/s</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p>Price</p>
        <p>$ {priceValue}</p>
      </div>
      <button className="text-sm font-medium leading-4 bg-[#212121] text-[#fff] px-4 py-3 items-center mt-4 w-full">
        Process to Checkout
      </button>
    </div>
  );
};

export default CartSummary;
