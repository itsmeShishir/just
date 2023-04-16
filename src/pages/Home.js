import React from 'react'
import Header from '../components/header'
import Slider from '../components/slider'
import NewArrival from '../components/NewArrival'
import Hero from '../components/Hero'
import Testominial from '../components/Testominial'
import Footer from '../components/footer'

function Home() {
  return (
    <>
    <Header />
    <Hero />
    <NewArrival />
    <Testominial/>
    <Footer />
    </>
  )
}

export default Home