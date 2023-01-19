import React from 'react'
import "./topcontent.css"
import raji from'./pp 02 (2).JPG' ;
//lm;lml;lm
function Topcontent() {
  return (
    <div className='Apps'>
        <div className='topcontent'>


          <div className='profileimg' > <div className='inner'><img  src={raji} alt=""></img></div></div>


          <div className="topcontent-container">
              <h1>Raji A</h1>
              <span>Dob{" : "}26:01:1999</span>
              <span className='span'>email{" : "}rajfernanto764@gmail.com</span>
             
               <p>front-end developer( React.js)</p>
               <a href="https://drive.google.com/file/d/1XO19BxUrwM2HiHpGCoGYutP2-gx38jlA/view?usp=share_link" target={"_blank"} rel="noreferrer">
                <button className='downloadbutt'>Resume</button>
               </a>
               {/*<a href="https://github.com/manju9323" target={"_blank"} rel="noreferrer" smooth={true} duration={500}><button className='downloadbutt'>My work</button>    </a>*/}
                <div className="ico">
                <div className='ico1'><a href="https://github.com/Rajiofficial" target={"_blank"} rel="noreferrer"><img className='git' src={require(`./${"git.png"}`)} alt=""/></a></div>
          <div className='ico2'><a href="https://www.naukri.com/mnjuser/homepage" target={"_blank"} rel="noreferrer"><img className='link' src={require(`./${"naukri.png"}`)} alt=""/></a></div>
                </div>
                <div className='About'>
                  <h1>About</h1>
                    <p>       I am RAJI A I completed <i>MSC(COMPUTER SCIENCE)</i> in the year 2022
                    then i have completed in<i> full stack development in GUVI IIT </i> 
                    </p>

                </div>
           
             


            </div>
        </div>
    </div>
  )
}

export default Topcontent