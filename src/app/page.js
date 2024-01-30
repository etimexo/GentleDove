import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Work from './Components/Work'
import Services from './Components/Service'
import Contact from './Components/Contact'
import Code from './Components/Code'
import Footer from './Components/Footer'
import Skills from './Components/Skills'
import "./globals.css"


export default function page() {
  return (
    <div className='main-page'>
      <Home />
      <About />
      <Work />
      <Services />
      <Skills />
      <Contact />
      <Code />
      <Footer />
    </div>
  )
}
