import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="container mx-auto mt-40">
      <div className="md:grid md:grid-cols-4 md:justify-between px-10 flex flex-col md:gap-0">
        <div className="flex flex-col justify-between w-4/5">
          <Image src="/Logo.png" height="30" width="180" alt="Logo" />
          <p className="font-normal text-base py-5">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className="flex gap-4 mb-3">
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M24,4.3086 C23.117,4.7006 22.168,4.9646 21.172,5.0836 C22.188,4.4746 22.969,3.5096 23.337,2.3596 C22.386,2.9246 21.332,3.3336 20.21,3.5556 C19.312,2.5976 18.032,1.9996 16.616,1.9996 C13.897,1.9996 11.692,4.2046 11.692,6.9236 C11.692,7.3096 11.736,7.6856 11.82,8.0456 C7.728,7.8406 4.099,5.8806 1.671,2.9006 C1.247,3.6286 1.004,4.4736 1.004,5.3766 C1.004,7.0846 1.873,8.5926 3.195,9.4756 C2.388,9.4486 1.628,9.2276 0.964,8.8596 L0.964,8.9206 C0.964,11.3066 2.661,13.2966 4.914,13.7486 C4.501,13.8626 4.065,13.9216 3.617,13.9216 C3.299,13.9216 2.991,13.8906 2.69,13.8336 C3.317,15.7896 5.135,17.2136 7.29,17.2536 C5.604,18.5736 3.481,19.3606 1.175,19.3606 C0.777,19.3606 0.385,19.3376 0,19.2926 C2.179,20.6886 4.767,21.5046 7.548,21.5046 C16.605,21.5046 21.557,14.0016 21.557,7.4946 C21.557,7.2816 21.552,7.0696 21.543,6.8586 C22.505,6.1636 23.34,5.2966 24,4.3086"
                ></path>
              </svg>
            </div>
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.94474914,22 L9.94474914,13.1657526 L7,13.1657526 L7,9.48481614 L9.94474914,9.48481614 L9.94474914,6.54006699 C9.94474914,3.49740494 11.8713513,2 14.5856738,2 C15.8857805,2 17.0033128,2.09717672 17.3287076,2.13987558 L17.3287076,5.32020466 L15.4462767,5.32094085 C13.9702212,5.32094085 13.6256856,6.02252733 13.6256856,7.05171716 L13.6256856,9.48481614 L17.306622,9.48481614 L16.5704347,13.1657526 L13.6256856,13.1657526 L13.6845806,22"
                ></path>
              </svg>
            </div>
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M22.0367422,22 L17.8848745,22 L17.8848745,15.5036305 C17.8848745,13.9543347 17.85863,11.9615082 15.7275829,11.9615082 C13.5676669,11.9615082 13.237862,13.6498994 13.237862,15.3925291 L13.237862,22 L9.0903683,22 L9.0903683,8.64071385 L13.0707725,8.64071385 L13.0707725,10.4673257 L13.1276354,10.4673257 C13.6813927,9.41667396 15.0356049,8.3091593 17.0555507,8.3091593 C21.2599073,8.3091593 22.0367422,11.0753215 22.0367422,14.6734319 L22.0367422,22 Z M4.40923804,6.81585163 C3.07514653,6.81585163 2,5.73720584 2,4.40748841 C2,3.07864579 3.07514653,2 4.40923804,2 C5.73720584,2 6.81585163,3.07864579 6.81585163,4.40748841 C6.81585163,5.73720584 5.73720584,6.81585163 4.40923804,6.81585163 L4.40923804,6.81585163 Z M6.48604672,22 L2.32980492,22 L2.32980492,8.64071385 L6.48604672,8.64071385 L6.48604672,22 Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="text-lg text-[#666]">
            <h3 className="font-bold pb-4">Company</h3>
            <ul className="flex flex-col gap-3">
                <Link href="/#">About</Link>
                <Link href="/#">Terms of use</Link>
                <Link href="/#">Privacy Policy</Link>
                <Link href="/#">How it Works</Link>
                <Link href="/#">Contact Us</Link>
            </ul>
        </div>
        <div className="text-lg text-[#666]">
            <h3 className="font-bold pb-4">Support</h3>
            <ul className="flex flex-col gap-3">
                <Link href="/#">Support Carrer</Link>
                <Link href="/#">24H Service</Link>
                <Link href="/#">Quick Chat</Link>
            </ul>
        </div>
        <div className="text-lg text-[#666]">
            <h3 className="font-bold pb-4">Contact</h3>
            <ul className="flex flex-col gap-3">
                <Link href="/#">Whatsapp</Link>
                <Link href="/#">Support 24H</Link>
            </ul>
        </div>
      </div>
      <div className="mt-24 border-t-2  border-[#666] ">
        <div className="my-4 flex flex-col sm:flex-row justify-between items-center">
        <p>Copyright © 2023 Dine Market</p>
        <p>Design by. Weird Design Studio</p>
        <p>Code by. MosabShaheen on github</p>
        </div>
      </div>
    </footer>
  );
}
