import React from 'react'
import imageHeader from '../assets/headerImage.jpg'
import './HeaderImage.css'

const HeaderImage = () => {
  return (
    <div className='customContainer'>
      <img src={imageHeader} alt="Header Image" className='imgHeader'/>
    </div>
  )
}

export default HeaderImage