import React from 'react'
import Home from './Components/Home'
import "./globals.css"
import About from './Components/About'

export default function () {
  return (
    <div className='main-page'>
      <Home />
      <About />
    </div>
  )
}
