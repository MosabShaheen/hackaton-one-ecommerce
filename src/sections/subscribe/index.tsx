export default function Subscribe(){
    return(
        <div className="mt-40 relative">
            <p className="absolute font-extrabold text-[4rem] sm:text-[5.75rem] leading-[110px] opacity-[0.07] text-[#212121] text-center left-0 right-0">Newsletter</p>
            <p className="capitalize text-center font-bold text-[32px] leading-10 tracking-wide text-[#212121] mt-3">Subscribe our newsletter</p>
            <p className="font-normal text-base leading-7 text-[#212121] my-5 text-center">Get the latest information and promo offers directly</p>
            <div className="flex gap-3 justify-center items-center sm:flex-row flex-col">
                <input type="text" className="text-lg py-1 px-3 w-80 border border-gray-400 placeholder:text-sm" placeholder="Input email address"/>
                <button className=" capitalize p-2 text-sm bg-black font-semibold text-[#fff] leading-4">Get Started</button>
            </div>
        </div>
    )
}