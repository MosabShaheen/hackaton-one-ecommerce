"use client";
import Product from "@/sections/showCart/product";
import CartSummary from "@/sections/showCart/cartSummary";
import { useEffect, useState } from "react";
import EmptyCart from "./emptyCart";
import CartProductSkelton from "./productSkeleton";

const ShowCart = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  
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
        console.log("Error fetching cart summary", error);
      });
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <div className="mt-20 px-10 mb-52 overflow-hidden">
          <p className="font-bold text-2xl text-black tracking-wide">
            Shopping Cart
          </p>
          <div>
            {loading ? (
              <div className="flex gap-8 justify-between flex-col lg:flex-row">
                <CartProductSkelton />
              </div>
            ) : (
              <div>
                {rows.length !== 0 ? (
                  <div className="flex gap-8 justify-between flex-col lg:flex-row">
                    <div className="flex-[3]">
                      {rows.map((row: any) => (
                        <Product key={row.id} row={row} />
                      ))}
                    </div>
                    <CartSummary />
                  </div>
                ) : (
                  <EmptyCart />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowCart;
