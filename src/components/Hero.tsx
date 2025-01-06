import React from 'react'
import Navbar from './Navbar'
import "../app/styles/hero.css";

const Hero = () => {
  return (
    <div id="hero"
      className='hero-container'>
      <Navbar />
      <div className='hero-container'>
        <div className='hidden lg:block'></div>
        <div className='hero-text'><div> 
          <p data-aos="zoom-out-left">I&apos;m</p>
          <p data-aos="zoom-out-left">Faria</p>
          <p data-aos="zoom-out-left">Usman</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hero