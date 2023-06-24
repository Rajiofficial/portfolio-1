import React, { useState } from 'react'
import {Link} from "react-scroll"
import "./head.css"
import {AiFillCloseCircle} from 'react-icons/ai'
import {RxDragHandleDots2} from 'react-icons/rx'

function Header() {
  const[active,setActive]=useState("head-right")
  const shownav=()=>{
    setActive('head-right activeNavbar')
}
const removenav=()=>{
    setActive('head-right')
}
  return (
    <div className='header'>
        <div className='head-left'>
        <h3>developer</h3> 
        </div>
        <div className={active}>
            <Link to="about" duration={500}><h4>About me</h4></Link>
            <Link to="skills" duration={500}><h4>Skills</h4></Link>
            <Link to="project" duration={500}><h4>Project</h4></Link>
            <Link to="experience" duration={500}><h4>Experience</h4></Link>
            <Link to="contact" duration={500}><h4>Contact</h4></Link>
            <a href="https://github.com/Rajiofficial" target={"_blank"} rel="noreferrer"  duration={500}>  <h4 className='headrightbutton'>Join with me</h4></a>
         </div>
         <div onClick={removenav} className="closenavbar">
                <AiFillCloseCircle className='icon'/>
            </div>

            
        <div onClick={shownav} className="toggleNavbar">
            <RxDragHandleDots2 className='icon'/>
        </div>

    </div>
  )
}

export default Header