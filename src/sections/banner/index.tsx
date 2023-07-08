import Image from "next/image";
import Link from "next/link";

export default function Banner(){
    return (
        <div className="container mx-auto sm:px-10 px-1 overflow-hidden">
            <div className="flex items-center gap-16 mt-10 px-8">
                <div>
                    <span className="bg-[#e1edff] rounded-md text-[#0000FF] font-semibold px-5 py-2">Sale 70%</span>
                    <h1 className="font-bold text-[3rem] sm:text-[3.5rem] tracking-wide text-[#212121] leading-[55px] my-10">An Industrial Take on Streetwear</h1>
                    <p className="sm:w-[70%] text-base leading-6 text-[#666]">{"Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits."}</p>
                    <div className="my-10">
                        <Link href="/all-products">
                            <button className="sm:w-[35%] p-4 text-base bg-[#212121] font-semibold text-[#fff] flex gap-2 leading-4 justify-center items-center">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="text-2xl font-bold" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                            {`Start Shopping`}
                            </button>
                        </Link>
                    </div>
                    <div className="sm:flex sm:justify-between sm:items-center grid grid-cols-[50%_50%] justify-center gap-2">
                        <Image height='100' width="90" alt="Bazaar" className="justify-self-center" src="/brand1.png"/>
                        <Image height='100' width="90" alt="Bustle" className="justify-self-center" src="/brand2.png"/>
                        <Image height='100' width="90" alt="Versace" className="justify-self-center" src="/brand3.png"/>
                        <Image height='100' width="90" alt="Instyle" className="justify-self-center" src="/brand4.png"/>
                    </div>
                </div>
                <div className="p-4 bg-pink-100 rounded-full items-center md:block hidden">
                <Image width="1200" height="1200" src="/hero.png" alt="Lady" className="aspect-square"/>
            </div>
            </div>
        </div>
    )
}