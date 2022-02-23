import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Contact from '../components/contact'
import Skills from '../components/skills'
import LearnedFrom from '../components/learnedfrom'
import Hobbies from '../components/hobbies'
import OtherAbout from '../components/otherabout'
const MoreAbout = () => {
  return (<>
    <Navbar/>
    <OtherAbout/>
    <Skills/>
    <LearnedFrom/>
    <Hobbies/>
    <Contact/>
    <Footer/>
  </>
  )
}

export default MoreAbout