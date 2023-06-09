'use client'
import { FC } from "react";

interface MyComponentProps {
    data: any;
    row: any;
  }

const ShowCart: FC<MyComponentProps>  =  ({data},{row}) => {
    
    console.log(row)
  return (
    <div className="flex-1 sm:flex-[2] md:flex-[3]">
      <div className="flex items-center justify-between">
        <p className="font-light text-xl leading-6 text-[#212121] py-1">
          {data.name}
        </p>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
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
      </div>
      <p className="font-semibold text-lg text-[#666666] mt-2">{data.type}</p>
      <p className="font-semibold text-md text-[#363636] mt-2">{` Size`}</p>
      <p className="font-bold text-[0.9rem] leading-5 tracking-wider text-[#212121] capitalize mt-2">
        Delivery Estimation
      </p>
      <p className="font-bold text-[0.9rem] leading-5 tracking-wider text-[#FFC700] capitalize mt-3">
        5 Working Days
      </p>
      <div className="mt-4 flex justify-between items-center">
        <p className="font-bold text-xl leading-7 text-[#212121] tracking-widest">
          $ {data.price}
        </p>
        <div className="flex gap-3 items-center">
          <button className="w-9 h-9 rounded-full bg-white border border-gray-100 shadow-md hover:shadow-lg text-3xl font-light flex items-center justify-center">
            -
          </button>
          <p>1</p>
          <button className="w-9 h-9 rounded-full bg-white border border-gray-100 shadow-md hover:shadow-lg text-3xl font-light flex items-center justify-center">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowCart;
