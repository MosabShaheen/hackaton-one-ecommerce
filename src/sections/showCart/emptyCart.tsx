"use client"
export default function EmptyCart(){
    return(
        <div className="flex flex-col justify-center items-center mt-10">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-9xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 22h14c1.103 0 2-.897 2-2V9a1 1 0 0 0-1-1h-3V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4a1 1 0 0 0-1 1v11c0 1.103.897 2 2 2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-4 3h2v2h2v-2h6v2h2v-2h2l.002 10H5V10z"></path></svg>
            <p className="font-bold text-2xl text-black tracking-wide text-center">Your Shopping Bag is Empty</p>
        </div>
    )
}