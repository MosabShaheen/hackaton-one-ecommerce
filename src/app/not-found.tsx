/**
 * Not found componet to be rendered as a replacement of 404 not found
 */
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <section className='flex h-full items-center dark:bg-gray-900 dark:text-gray-100 sm:px-16 sm:py-4'>
      <div className='container mx-auto my-8 flex flex-col items-center justify-center space-y-8 px-5 text-center sm:max-w-md'>
      <Image height='100' width="90" alt="404" className="justify-self-center" src="/404.png"/>
        <p className='text-3xl'>{`ERROR`}</p>
        <p className='text-lg text-gray-600'>
          Page Not Found
        </p>

        <Link
          rel='noopener noreferrer'
          href='/'
          className='rounded bg-[#212121] px-8 py-3 font-semibold text-white'
        >
          Back to homepage
        </Link>
      </div>
    </section>
  );
}