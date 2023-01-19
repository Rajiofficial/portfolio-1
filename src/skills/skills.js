import React from 'react'
import { Element } from 'react-scroll'
import "./skills.css"
import {LinearProgress} from "@mui/material"
import "./skills.css"


function Skills() {
  return (
   <div className='border'>

   
    <Element className='skillcontainer' id="skills">

    <div className='skillimg'>
        <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydGZvbGlvJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>

    </div>
    <div className='skillcontainer-text'>
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