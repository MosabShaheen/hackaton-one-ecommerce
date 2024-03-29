"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [tab, setTab] = useState(true);
  const [cartValue, setCartValue] = useState(0);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await fetch("/api/cart", {
          method: "GET",
          cache: "no-cache"
        });

        if (response.ok) {
          const data = await response.json();
          setCartValue(data.quantity);
        }
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartData();
  }, [cartValue]);

  return (
    <header className="container mx-auto">
      <nav className="flex mx-auto justify-between items-center py-4 sm:px-10">
        <div className="py-10">
          <Link href="/">
            <Image src="/Logo.png" alt="Logo" width={158} height={27} />
          </Link>
        </div>

        {/* Desktop navigation links */}
        <div className="hidden lg:flex gap-20">
          <Link className="font-sora text-base tracking-wide" href="/female">
            Female
          </Link>
          <Link className="font-sora text-base tracking-wide" href="/male">
            Male
          </Link>
          <Link className="font-sora text-base tracking-wide" href="/kids">
            Kids
          </Link>
          <Link className="font-sora text-base tracking-wide" href="/all-products">
            All Products
          </Link>
        </div>

        {/* Mobile navigation toggle */}
        <div className="-mr-1 lg:hidden">
          <button
            className="relative z-10 flex h-8 w-8 items-center justify-center focus:outline-none"
            aria-label="Toggle Navigation"
            type="button"
            onClick={() => setTab(!tab)}
          >
            {tab ? (
              <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 20 20"
              aria-hidden="true"
              className="text-3xl cursor-pointer"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            ) : (
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="text-3xl cursor-pointer"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path>
              </svg>
            )}
          </button>
          
          {/* Mobile navigation menu */}
          {tab === false && (
            <div className="fixed h-screen bg-white w-screen left-0 bottom-0 top-20 z-50">
              <div className="flex items-center justify-center h-full">
                <div className="flex flex-col items-center h-[40%] justify-between">
                  <Link
                    className="font-sora text-lg tracking-wide"
                    href="/female"
                    onClick={() => setTab(true)}
                  >
                    Female
                  </Link>
                  <Link
                    className="font-sora text-lg tracking-wide"
                    href="/male"
                    onClick={() => setTab(true)}
                  >
                    Male
                  </Link>
                  <Link
                    className="font-sora text-lg tracking-wide"
                    href="/kids"
                    onClick={() => setTab(true)}
                  >
                    Kids
                  </Link>
                  <Link
                    className="font-sora text-lg tracking-wide"
                    href="/all-products"
                    onClick={() => setTab(true)}
                  >
                    All Products
                  </Link>
                  <Link
                    className="font-sora text-lg tracking-wide rounded-full bg-[#F1F1F1] p-3 relative"
                    href="/cart"
                    onClick={() => setTab(true)}
                  >
                    <svg
              stroke="currentColor"
              fill="none"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="22"
              width="22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
                fill="currentColor"
              ></path>
              <path
                d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
                fill="currentColor"
              ></path>
              <path
                d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
                fill="currentColor"
              ></path>
            </svg>
                    <p className="absolute top-0 right-2 text-xs px-1 bg-red-600 rounded-full text-white">
                      {cartValue}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Desktop search bar */}
        <div className="items-center border border-gray-300 rounded-md gap-1 px-2 py-1 hidden lg:flex">
        <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            version="1.1"
            id="search"
            x="0px"
            y="0px"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		z"
              ></path>
            </g>
          </svg>
          <input
            className="text-sm w-72 border-none px-1 focus:outline-none"
            type="text"
            placeholder="What are you looking for"
          />
        </div>

        {/* Desktop cart icon */}
        <div className="items-center gap-3 hidden lg:flex">
          <Link className="rounded-full bg-[#F1F1F1] p-3 relative" href="/cart">
          <svg
              stroke="currentColor"
              fill="none"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="22"
              width="22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
                fill="currentColor"
              ></path>
              <path
                d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
                fill="currentColor"
              ></path>
              <path
                d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
                fill="currentColor"
              ></path>
            </svg>
            <span className={`absolute top-0 right-2 text-xs px-1 bg-red-600 rounded-full text-white`}>
              {cartValue}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
