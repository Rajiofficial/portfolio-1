import React from 'react'
import {Link} from "react-scroll"
import "./head.css"

function Header() {
  return (
    <div className='header'>
        <div className='head-left'>
        <h3>developer</h3> 
        </div>
        <div className='head-right'>
            <Link to="about" smooth={true} duration={500}><h4>About me</h4></Link>
            <Link to="skills" smooth={true} duration={500}><h4>Skills</h4></Link>
            <Link to="project" smooth={true} duration={500}><h4>Project</h4></Link>
            <Link to="experience" smooth={true} duration={500}><h4>Experience</h4></Link>
            <Link to="contact" smooth={true} duration={500}><h4>Contact</h4></Link>
            <a href="https://github.com/Rajiofficial" target={"_blank"} rel="noreferrer" smooth={true} duration={500}>  <h4 className='headrightbutton'>Join with me</h4></a>
         </div>
    </div>
  )
}

export default Header