import React from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/mobimg1.jpg'
import img5 from '../assets/img5.jpg'

import './Banner.css'

const Banner = () => {
  return (
   <>
   
    <div className='banner-container'>
      
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />

    </div>
   
   </>
  )
}

export default Banner