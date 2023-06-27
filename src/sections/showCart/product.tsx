"use client";

import { createSanity } from "@/lib/createSanity";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { urlForImage } from "@/lib/createSanity";
import { useDispatch } from "react-redux";
import { addToCart, updateTotalPrice } from "@/store/slice/cartSlice";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product: FC<{ row: any }> = ({ row }) => {
  const dispatch = useDispatch();
  const allPrice = row.price * row.quantity;

  useEffect(() => {
    dispatch(updateTotalPrice(allPrice));
    dispatch(addToCart(row.quantity));
  }, [dispatch, row.quantity, allPrice]);

  const [products, setProducts] = useState<any[]>([]);
  const [quantity, setQuantity] = useState(row.quantity);
  const [save, openSave] = useState(false)
  const id = row.product_id;
  const handleIncrement = () => {
    setQuantity(quantity + 1)
    openSave(true);
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      openSave(true)
    }
  };
  const handleSave = async () => {
    openSave(false)
    const response = await fetch("api/cart", {
        method: 'PATCH',
        body: JSON.stringify(
          {
          id: row.id,
          quantity: quantity
          }
          ),
        cache: 'no-store',
    })
    if(response.ok) {
      window.location.reload()
    }  
  }
  const deleteData = {
    item_id: row.id,
  };

  const handleDelete = async () => {
  
      const response = await fetch(`/api/cart`, {
        method: "DELETE",
        headers: { itemId: deleteData.item_id.toString() },
        cache: 'no-store',
      });
      console.log(response)
      if (response.ok) {
        window.location.reload();
      }
  };

  useEffect(() => {
    const getProduct = async () => {
      const got = await createSanity.fetch(
        `(*[_type == "products" && _id == "${id}"])` // Added closing parenthesis here
      );
      setProducts(got);
    };
    getProduct();
  }, [id]);
  return (
    <>
      {products.map((product) => (
        <div
          key={product._id}
          className="flex gap-4 mt-4 hover:shadow-lg ease-in-out duration-150 flex-col sm:flex-row"
        >
          <Image
            width="200"
            height="100"
            alt={`${product.name}`}
            src={urlForImage(product.img).url()}
          />
          <div className="flex-1 sm:flex-[2] md:flex-[3]">
            <div className="flex items-center justify-between">
              <p className="font-light text-xl leading-6 text-[#212121] py-1">
                {product.name}
              </p>
              {
                save === false?
                <button onClick={handleDelete}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="text-2xl cursor-pointer"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z"></path>
                  </g>
                </svg>
              </button>
              : 
                <button onClick={handleSave} className="uppercase text-white bg-red-700 hover:bg-red-800 ease-in-out duration-150 font-medium px-2 py-1 text-sm rounded-md">
                  Save
                </button>
              }
              

            </div>
            <p className="font-semibold text-lg text-[#666666] mt-2">
              {product.type}
            </p>
            <p className="font-semibold text-md text-[#363636] mt-2">{`${row.size} Size`}</p>
            <p className="font-bold text-[0.9rem] leading-5 tracking-wider text-[#212121] capitalize mt-2">
              Delivery Estimation
            </p>
            <p className="font-bold text-[0.9rem] leading-5 tracking-wider text-[#FFC700] capitalize mt-3">
              5 Working Days
            </p>
            <div className="mt-4 flex justify-between items-center">
              <p className="font-bold text-xl leading-7 text-[#212121] tracking-widest">
                ${product.price}
              </p>
              <div className="flex gap-3 items-center">
                <button
                  onClick={handleDecrement}
                  className="w-9 h-9 rounded-full bg-white border border-gray-100 shadow-md hover:shadow-lg text-3xl font-light flex items-center justify-center"
                >
                  -
                </button>
                <p>{quantity}</p>
                <button
                  onClick={handleIncrement}
                  className="w-9 h-9 rounded-full bg-white border border-gray-100 shadow-md hover:shadow-lg text-3xl font-light flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Product;
