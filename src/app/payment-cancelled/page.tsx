import Link from "next/link"
export default function Cancelled(){
    return(
        <section className='flex h-full items-center dark:bg-gray-900 dark:text-gray-100 sm:px-16 sm:py-4'>
      <div className='container mx-auto my-8 flex flex-col items-center justify-center space-y-8 px-5 text-center sm:max-w-md'>
        <p className='text-3xl text-red-600'>{`Payment Cancelled`}</p>
        <p className='text-lg text-gray-600'>
          {`You have cancelled the payment. Do you want to continue?`}
        </p>
        <Link
          rel='noopener noreferrer'
          href='/cart'
          className='rounded bg-[#212121] px-8 py-3 font-semibold text-white'
        >
          Back to Cart
        </Link>
        <Link
          rel='noopener noreferrer'
          href='/'
          className='rounded bg-[#ffffff] border border-black border-solid px-8 py-3 font-semibold text-black'
        >
          Go to Home
        </Link>
      </div>
    </section>
    )
}