import React from 'react'
import img from './imgs/hero.jpg'
import './Hero.css'

const Hero = () => {
  return (
    <>
    <div className='hero' id='home'>
        <div className='content'>
            <p>Call us </p>
            <p>91-82400-49566</p>
            <p>Beacause Money</p>
            <p>Doesn`t come with instructions</p>
            <button href='/' className='button'>Free consultation</button>
        </div>


        {/* <img src={img} alt="hero"/> */}
    </div>
    </>
  )
}

export default Hero