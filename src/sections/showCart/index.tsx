"use client";
import { FC } from "react";
import Product from "@/sections/showCart/product";
import CartSummary from "@/sections/showCart/cartSummary";
import { useEffect, useState } from "react";
import EmptyCart from "./emptyCart";

const ShowCart: FC<{ rows: any }> = ({ rows }) => {
  return (
    <>
      <div className="container mx-auto">
        <div className="mt-20 px-10 mb-52 overflow-hidden">
          <p className="font-bold text-2xl text-black tracking-wide">
            Shopping Cart
          </p>
          {rows.length == 0 ? (
            <EmptyCart />
          ) : (
            <div className="flex gap-8 justify-between flex-col lg:flex-row">
              <div className="flex-[3]">
                {rows.map((row: any) => (
                  <Product key={row.id} row={row} />
                ))}
              </div>
              <CartSummary />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ShowCart;
