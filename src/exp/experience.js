import React, { useEffect } from 'react'
import "./experience.css"
import {Element} from "react-scroll"
import Aos from 'aos'

function Experience() {
   useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <Element name="experience">
      <div data-aos="zoom-in">
      <div data-aos="zoom-in" className='exp' >
        <h1>Personel Experience</h1>
   <div className='ex'>
    
    <div className='en'>
        <h4>Fresher</h4>
        <div>MERN stack developer</div>
    </div>

    <div className='en'>  <h4>12+</h4>
    <div>practice self project and deploy</div></div>

    <div className='en'>
    <h4>3 Months experience</h4>
    <div>apphub technology.pvt</div></div>
    </div>
    </div>
    </div>
    </Element>
    
    )
}

export default Experience