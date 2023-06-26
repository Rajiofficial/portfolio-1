import React from 'react'
import {Link} from "react-scroll"
import "./head.css"

function Header() {


  return (
    <div className='header'>
        <div className='head-left'>
        <h3>developer</h3> 
        </div>
        <div className="head-right">
            <Link className='size' to="about" duration={500}><h4 className='ss'>About me</h4></Link>
            <Link className='size' to="skills" duration={500}><h4 className='ss'>Skills</h4></Link>
            <Link className='size' to="project" duration={500}><h4 className='ss'>Project</h4></Link>
            <Link className='size' to="experience" duration={500}><h4 className='ss'>Experience</h4></Link>
            <Link className='size' to="contact" duration={500}><h4 className='ss'>Contact</h4></Link>
            <a className='size' href="https://github.com/Rajiofficial" target={"_blank"} rel="noreferrer"  duration={500}>  <h4 className='headrightbutton'>Join with me</h4></a>
         </div>
    
            


    </div>
  )
}

export default Header