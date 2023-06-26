import React, { useEffect } from 'react'
import {Element} from "react-scroll"
import "./contact.css"
import Aos from 'aos'
//https://mail.google.com/mail/u/0/#inbox?compose=new
function Contact() {

  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <Element  className='contact' id="con">
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"  className='contacts'>
        <h3 className='can'>Contact</h3>
         <div className='contactspan'>
            <p>Name:<span> Raji A</span></p>
            <p className='email'>Email:<span> rajfernanto764@gmail.com</span></p>
            <p>Phone:<span> 9600968726</span></p>
            <p className='git'>github Username:<span> https://github.com/Rajiofficial </span></p>
         </div>
        <div className='ico'>
        {/* <div><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#in" target={"_blank"} rel="noreferrer"><img src={require(`./${"Gmail.png"}`)} alt=""/></a></div> */}
          <div><a href="https://github.com/Rajiofficial" target={"_blank"} rel="noreferrer"><img src={require(`./${"git.png"}`)} alt=""/></a></div>
          <div><a href="https://www.naukri.com/mnjuser/homepage" target={"_blank"} rel="noreferrer"><img src={require(`./${"./naukri.png"}`)} alt=""/></a></div>
          <div><a href="https://in.indeed.com/?from=gnav-homepage/" target={"_blank"} rel="noreferrer"><img src={require(`./${"linked.png"}`)} alt=""/></a></div>
          <div><a href="https://www.guvi.in/rajfernanto76402" target={"_blank"} rel="noreferrer"><img src={require(`./${"guvi.png"}`)} alt=""/></a></div>
          
        </div>
        </div>
    </Element>
   
  )
}

export default Contact