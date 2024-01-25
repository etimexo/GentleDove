import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Work from './Components/Work'
import Services from './Components/Services'
import "./globals.css"


export default function () {
  return (
    <div className='main-page'>
      <Home />
      <About />
      <Work />
      <Services />
    </div>
  )
}
