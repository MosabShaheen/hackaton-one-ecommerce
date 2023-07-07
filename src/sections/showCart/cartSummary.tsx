"use client";
import { cache, useEffect, useState } from "react";

const CartSummary = () => {
  const [loading, setLoading] = useState(false)
  const [cartValue, setCartValue] = useState(0);
  const [priceValue, setPriceValue] = useState(0);
  useEffect(() => {
    setLoading(true)
    const getData = async () => {
        const response = await fetch("/api/cart", {
            method: "GET",
            cache: "no-cache"
        })
        const res = await response.json()
        setCartValue(res.quantity)
        setPriceValue(res.price)
    }
    getData();
    setLoading(false)
  }, [cartValue, priceValue]);
  const handleChackout = async () => {
    const products = {
        product:1,
        name:"Stripe product",
        price:400,
    }
    const response = await fetch("/api/stripe-session",
    {
      method: 'POST',
      headers: {"Content-type":"application/json"},
      cache: "no-cache",
      body: JSON.stringify(products)
    }
    )
  }

  console.log(cartValue)
  return (
    <div className="flex-1">
      <p className="font-bold text-xl text-black tracking-normal">
        Order Summary
      </p>
      <div className="flex justify-between items-center mt-4">
        <p>Quantity</p>
        <p className={loading ? "animate-pulse bg-muted h-[24px] w-full bg-gray-300": ""}>{cartValue} Product/s</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p>Price</p>
        <p className={loading ? "animate-pulse bg-muted h-[24px] w-full bg-gray-300": ""}>$ {priceValue}</p>
      </div>
      <button  className="text-sm font-medium leading-4 bg-[#212121] text-[#fff] px-4 py-3 items-center mt-4 w-full">
        Process to Checkout
      </button>
    </div>
  );
};

export default CartSummary;
