"use client";
import { useEffect, useState } from "react";
import { getStripePromise } from "@/lib/stripe";

const CartSummary = () => {
  const [loading, setLoading] = useState(false);
  const [cartValue, setCartValue] = useState(0);
  const [priceValue, setPriceValue] = useState(0);
  const [rows, setRows] = useState([]);
  
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const response = await fetch("/api/cart", {
        method: "GET",
        cache: "no-cache",
      });
      const res = await response.json();
      setCartValue(res.quantity);
      setPriceValue(res.price);
    };
    getData();
    setLoading(false);
  }, [cartValue, priceValue]);


  useEffect(() => {
    setLoading(true);
    fetch("/api/cartSummary")
      .then((response) => response.json())
      .then((data) => {
        setRows(data.res);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((error) => {
        alert("Error fetching data");
      });
  }, []);


  const handleChackout = async () => {
    const stripe = await getStripePromise();
    const response = await fetch("/api/stripe-session", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(rows),
    });
    const data = await response.json();
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }
  };

  return (
    <div className="flex-1">
      <p className="font-bold text-xl text-black tracking-normal">
        Order Summary
      </p>
      <div className="flex justify-between items-center mt-4">
        <p>Quantity</p>
        <p
          className={
            loading ? "animate-pulse bg-muted h-[24px] w-full bg-gray-300" : ""
          }
        >
          {cartValue} Product/s
        </p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p>Price</p>
        <p
          className={
            loading ? "animate-pulse bg-muted h-[24px] w-full bg-gray-300" : ""
          }
        >
          $ {priceValue}
        </p>
      </div>
      <button
        onClick={handleChackout}
        className="text-sm font-medium leading-4 bg-[#212121] text-[#fff] px-4 py-3 items-center mt-4 w-full"
      >
        Process to Checkout
      </button>
    </div>
  );
};

export default CartSummary;
