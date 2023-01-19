import React from 'react'
import {Element} from 'react-scroll'
import Topcontent from '../topcontent/topcontent'
import "./topcontainer.css"

function Topcontainer() {
  return (
   <Element name="about" className='top-container'>
    
      <Topcontent/>
    
     </Element>
  )
}

export default Topcontainer