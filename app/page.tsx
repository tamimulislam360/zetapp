// import { Button } from '../components/materialExport'
import Brands from '@/components/Brands/Brands'
import Earnings from '@/components/Earnings/Earnings'
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'
import Products from '@/components/Products/Products'
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs'
import { Button } from '@/components/materialExport'
import People from '@/components/people/People'
// import { Button } from '@material-tailwind/react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='overflow-x-hidden'>
      <Hero />
      <Brands />
      <Products />
      <People />
      <WhyChooseUs />
      <Earnings />
    </main>
  )
}
