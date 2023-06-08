import Image from "next/image";

export default function Promotion(){
    return(
        <div className="container px-10 mx-auto my-40">
            <p className="text-center font-bold text-xs leading-4 tracking-widest text-[#0062f5]">PROMOTIONS</p>
            <h2 className="text-center font-bold text-2xl sm:text-[32px] leading-10 tracking-wide text-[#212121] mt-3 mb-4">Our Promotions Event</h2>
            <div className="grid md:grid-cols-2 grid-cols-1 md:space-x-5 lg:space-x-5 px-8">
                <div className="flex flex-col justify-between gap-4 flex-1">
                    <div className="flex items-center justify-between bg-[#d6d6d8] px-8 text-[#212121] tracking-wider flex-1">
                        <div className="flex-1">
                            <h3 className="uppercase font-bold text-xl sm:text-3xl leading-9 text-[#212121]">{`get up to`} <span className="font-[800] text-2xl sm:text-4xl sm:leading-[45px]">60%</span></h3>
                            <p className="font-normal text-sm sm:text-lg leading-6 tracking-wide sm:w-[70%]">For the summer reason</p>
                        </div>
                        <div className="flex-1">
                            <Image height='200' width='282' alt="promotion01.png" className="h-full aspect-square" src="/promotion01.png"/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-0 text-[#fff] bg-[#212121] flex-1 py-6 overflow-hidden">
                        <h3 className="uppercase font-[800] text-4xl leading-[45px]"> Get 30% off</h3>
                        <p className="font-normal text-lg leading-6 tracking-wide uppercase mb-1 mt-4">use promo code</p>
                        <button className="font-bold text-lg leading-5 tracking-[0.25em] bg-[#474747] px-10 py-2 rounded-lg">DINEWEEKENDSALE</button>
                    </div>
                </div>
                <div className="flex mt-4 lg:mt-0 md:mt-0 sm:mt-0 gap-4 items-center justify-center flex-1 flex-col sm:flex-row">
                    <div className=" flex flex-col justify-between pt-7 bg-[#EFE1C7] flex-1 w-full sm:w-auto">
                        <div className="ml-5">
                            <p className="font-normal text-base leading-6 tracking-tighter">Flex Sweatshirt</p>
                            <div>
                                <span className="line-through">$100.00</span>
                                <span className="font-semibold text-lg leading-6 mr-[10px]">$75.00</span>
                            </div>
                        </div>
                        <div className="mt-4 pt-9 flex justify-center ">
                            <Image height='362' width='282' className="w-[280px] h-[340px]" src='/promotion02.png' alt="promotion02.png"/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between pt-7 bg-[#919181] flex-1 w-full sm:w-auto">
                        <div className="ml-5">
                            <p className="font-normal text-base leading-6 tracking-tighter">Flex Sweatshirt</p>
                            <div>
                                <span className="line-through">$100.00</span>
                                <span className="font-semibold text-lg leading-6 mr-[10px]">$75.00</span>
                            </div>
                        </div>
                        <div className="mt-4 pt-9 flex justify-center">
                            <Image height='362' width='282' className="w-[280px] h-[340px]" src='/promotion03.png' alt="promotion03.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}