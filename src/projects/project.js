import React from 'react'
import { Element } from 'react-scroll'
import "./project.css"
import ProjectMap from './projectmap'


const project=[
  {img:"youtube.png",
  title:" Full stack Youtube reactjs+mongodb firebase googleauth",
  desc:"upload,subscribe,likes,comments section is here and wait for 30sec to start server",
  github:"https://github.com/manju9323/youtubereact",
  mongo:"https://github.com/manju9323/youtubenode",
  netlify:"https://youtubeplacereact.netlify.app/",
  link:"https://youtubeplacereact.netlify.app/"},

  {img:"e-commers.png",
  title:" front-end Real E-Commers website reactjs",
  desc:"create account to follow others real time online chat using socket io",
  github:"https://github.com/manju9323/chatsreact",
  mongo:"https://github.com/manju9323/chatnode",
  netlify:"https://amazing-concha-ad2d8d.netlify.app/",
  link:"https://amazing-concha-ad2d8d.netlify.app/"},
 



  {img:"Crud.png",
    title:"CRUD operation",
    desc:"this project just only front end crud operation using fake api",
    github:"https://github.com/manju9323/jayamcrud",
  mongo:"",
  netlify:"https://tourmaline-alfajores-efc148.netlify.app/",
  link:"https://tourmaline-alfajores-efc148.netlify.app/"},

]


function Project() {
   
  return (
    <Element name='project' className='projectcontainer'>
      <h1>Projects</h1>
      {/* <h2>Credentials</h2>
      <p>Admin log in: manjugopi610@gmail.com</p>
      <p>Password: 333</p>
      <p>User log in: christgopi333@gmail.com</p>
      <p>Password: 333</p> */}
      <div className='projectcontainerproject'>
      {
         project.map((mm,i)=><ProjectMap key={i} mmm={mm}/>)
      }
      </div>
   
  
    </Element>
  )
}

export default Project