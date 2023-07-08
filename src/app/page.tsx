import Banner from '@/sections/banner'
import Products from '@/sections/products'
import Promotion from '@/sections/promotion'
import Subscribe from '@/sections/subscribe'
import Unique from '@/sections/unique'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Banner />
      <Promotion/>
      <Products/>
      <Unique/>
      <Subscribe/>
    </div>
  )
}
