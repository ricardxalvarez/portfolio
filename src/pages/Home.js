import React from 'react'
import About from '../components/about'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import Projects from '../components/projects'
import Slider from '../components/slider'

const Home = () => {
  return (<>
    <Navbar/>
    <Hero/>
    <Slider/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
  </>
  )
}

export default Home