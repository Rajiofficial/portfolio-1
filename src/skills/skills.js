import React, { useEffect } from 'react'
import { Element } from 'react-scroll'
import "./skills.css"
import {LinearProgress} from "@mui/material"
import pic from './skills.png'
import "./skills.css"
import Aos from 'aos'

function Skills() {
   useEffect(()=>{
      Aos.init({duration:1000})
    },[])
  return (
   <div className='border'>

   
    <Element className='skillcontainer' id="skills">

    <div className='skillimg'>
        <img className='imgpic' src={pic}/>

    </div>
    <div data-aos="zoom-in-left" className='skillcontainer-text'>
        <h2>SKILLSET</h2>
        <div className='skillcontainer-skillset'>
            <h5>Html</h5>
            <div className='skillcontainer-slider skillcontainer-slider1'>
            <LinearProgress variant="determinate" value={100} />
            </div>
         </div>
         <div className='skillcontainer-skillset'>
            <h5>Css</h5>
            <div className='skillcontainer-slider skillcontainer-slider1'>
            <LinearProgress variant="determinate" value={90} />
            </div>
         </div>
         <div className='skillcontainer-skillset'>
            <h5>Bootstrap</h5>
            <div className='skillcontainer-slider skillcontainer-slider1'>
            <LinearProgress variant="determinate" value={80} />
            </div>
         </div>
         <div className='skillcontainer-skillset'>
            <h5>React js</h5>
            <div className='skillcontainer-slider skillcontainer-slider1'>
            <LinearProgress variant="determinate" value={90} />
            </div>
         </div>

         <div className='skillcontainer-skillset'>
            <h5>Node js</h5>
            <div className='skillcontainer-slider skillcontainer-slider2'>
            <LinearProgress variant="determinate" value={50} />
            </div>
         </div>

         <div className='skillcontainer-skillset'>
            <h5>Mongo db</h5>
            <div className='skillcontainer-slider skillcontainer-slider3'>
            <LinearProgress variant="determinate" value={90} />
            </div>
         </div>
         <div className='skillcontainer-skillset'>
            <h5>Mysql</h5>
            <div className='skillcontainer-slider skillcontainer-slider3'>
            <LinearProgress variant="determinate" value={80} />
            </div>
         </div>

         <div className='skillcontainer-skillset'>
            <h5>React Redux</h5>
            <div className='skillcontainer-slider skillcontainer-slider4'>
            <LinearProgress variant="determinate" value={80} />
            </div>
         </div>
    </div>
    </Element>
    </div>
  
  )
}

export default Skills