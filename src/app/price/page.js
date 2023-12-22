import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import PriceCard from '../component/Price'
import Footer from '../component/Footer'

export default function Price() {
  return (
    <div>
        <Navbar/>
        <Hero title="Our PRICING" message="Price from US"/>
        <PriceCard/>
        <Footer/>
    </div>
  )
}
