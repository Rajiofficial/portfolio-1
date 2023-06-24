import React, { useEffect } from 'react'
import { Element } from 'react-scroll'
import "./project.css"
import ProjectMap from './projectmap'
import Aos from 'aos'


const project=[
  {img:"travel.png",
  title:" front end travel app",
  desc:"travel the all country using to react.js",
  github:"https://github.com/Rajiofficialt",
  netlify:"https://6496d752142800555feb4538--graceful-kashata-e96961.netlify.app/",
  link:"https://6496d752142800555feb4538--graceful-kashata-e96961.netlify.app/"},

  {img:"e-commers.png",
  title:" front-end Real E-Commers website reactjs",
  desc:"create account to follow others real time online chat using socket io",
  github:"https://github.com/Rajiofficial",
  netlify:"https://amazing-concha-ad2d8d.netlify.app/",
  link:"https://amazing-concha-ad2d8d.netlify.app/"},
 
  {img:"img1.png",
  title:" Full stack Youtube reactjs",
  desc:"ui for spotify ",
  github:"https://github.com/Rajiofficial/spotifyclone",
  netlify:"https://effulgent-manatee-d344f0.netlify.app/",
  link:"https://effulgent-manatee-d344f0.netlify.app/"
},


  {img:"Crud.png",
    title:"CRUD operation",
    desc:"this project just only front end crud operation using fake api",
    github:"https://github.com/Rajiofficial/digival",
  netlify:"https://tourmaline-alfajores-efc148.netlify.app/",
  link:"https://tourmaline-alfajores-efc148.netlify.app/"
},

{img:"pizza portfolio.jpg",
title:"pizza app",
desc:"this project just only front end crud operation using fake api",
github:"https://github.com/Rajiofficial/pizza",
netlify:"https://lively-eclair-0723e2.netlify.app/",
link:"https://lively-eclair-0723e2.netlify.app/"
},
{img:"stackoverflow.png",
title:"stackoverflow frontend project",
desc:"this project stackoverflow frontend project ui ",
github:"https://github.com/Rajiofficial/stackoverflow",
netlify:"https://symphonious-choux-161d76.netlify.app/",
link:"https://symphonious-choux-161d76.netlify.app/"
},
{img:"contact manager.png",
title:"contact manager ui design",
desc:"this project stackoverflow frontend project ui ",
github:"https://github.com/Rajiofficial/contact-manage-app",
netlify:"https://calm-meringue-37d725.netlify.app/",
link:"https://calm-meringue-37d725.netlify.app/"
},
]


function Project() {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
   
  return (
    <Element name='project' className='projectcontainer'>
      <h1>Projects</h1>
      {/* <h2>Credentials</h2>
      <p>Admin log in: manjugopi610@gmail.com</p>
      <p>Password: 333</p>
      <p>User log in: christgopi333@gmail.com</p>
      <p>Password: 333</p> */}
      <div data-aos="flip-left" className='projectcontainerproject'>
      {
         project.map((mm,i)=><ProjectMap key={i} mmm={mm}/>)
      }
      </div>
   
  
    </Element>
  )
}

export default Project