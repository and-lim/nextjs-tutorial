import Image from 'next/image'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Article from './component/Article'
import Price from './component/Price'
import Footer from './component/Footer'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero title="Manage your Business to the next level" />
    <Article/>
    <Price/>
    <Footer/>
    </>
  )
}
