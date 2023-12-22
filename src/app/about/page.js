import React from 'react'
import styles from "./style.css"
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Article from '../component/Article'
import Footer from '../component/Footer'

export default function About() {
  return (
    <div>
        <Navbar/>
        <Hero title="About us" message="Our product profile"/>
        <Article/>
        <Footer/>
    </div>
  )
}
