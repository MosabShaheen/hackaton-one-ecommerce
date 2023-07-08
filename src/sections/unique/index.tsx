import Image from "next/image";

export default function Unique(){
    return(
        <div className="container mx-auto">
            <div className="mb-20 sm:px-10 px-0 mt-[-50px] sm:my-20 overflow-hidden">
                <div className="flex justify-center pb-8 md:justify-end px-1 sm:px-5 md:px-0">
                    <h1 className="font-bold text-[1.75rem] sm:text-[2.75rem] leading-[40px] sm:leading-[55px] tracking-wide text-[#212121] md:w-[50%]">
                        Unique and Authentic Vintage Designer Jewellery
                    </h1>
                </div>
                <div className="md:grid md:grid-cols-[50%_50%]">
                    <div className="w-full relative justify-center items-center">
                        <div className="absolute font-extrabold text-[4rem] sm:text-[6.875rem] leading-[110px] opacity-[0.07] text-[#212121] z-10">
                            Different from others
                        </div>
                        <div className="grid grid-cols-[50%_50%] h-full">
                            <div className="w-[70%] z-20 h-full pt-2">
                                <p className="font-semibold text-base sm:text-lg leading-5 tracking-wide text-[#212121] mb-4">Using Good Quality Materials</p>
                                <p className="font-light text-sm sm:text-base leading-3 tracking-wider text-[#212121]">Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
                            </div>
                            <div className="w-[70%] z-20 h-full pt-2">
                                <p className="font-semibold text-base sm:text-lg leading-5 tracking-wide text-[#212121] mb-4">100% Handmade Products</p>
                                <p className="font-light text-sm sm:text-base leading-3 tracking-wider text-[#212121]">Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
                            </div>
                            <div className="w-[70%] z-20 h-full pt-2">
                                <p className="font-semibold text-base sm:text-lg leading-5 tracking-wide text-[#212121] mb-4">Modern Fashion Design</p>
                                <p className="font-light text-sm sm:text-base leading-3 tracking-wider text-[#212121]">Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
                            </div>
                            <div className="w-[70%] z-20 h-full pt-2">
                                <p className="font-semibold text-base sm:text-lg leading-5 tracking-wide text-[#212121] mb-4">Discount for Bulk Orders</p>
                                <p className="font-light text-sm sm:text-base leading-3 tracking-wider text-[#212121]">Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex mt-3 md:mt-0 items-center sm:flex-row flex-col">
                        <Image width='300' height='400' src="/feature.png" alt="feature"/>
                        <div className="sm:ml-4 sm:mt-0 mt-4">
                            <p className="font-light text-base leading-7 text-justify tracking-wider text-[#212121] pt-2">
                                {`This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.`}
                            </p>
                            <button className=" capitalize mt-5 p-4 text-base bg-[#212121] font-semibold text-[#fff] leading-4 ">See all products</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}