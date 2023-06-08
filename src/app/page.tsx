import Banner from '@/sections/banner'
import Promotion from '@/sections/promotion'
import Subscribe from '@/sections/subscribe'
import Unique from '@/sections/unique'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Banner />
      <Promotion/>
      <Unique/>
      <Subscribe/>
    </div>
  )
}
