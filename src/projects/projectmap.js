
import React,{useState} from 'react';
import "./project.css";
import GitHubIcon from '@mui/icons-material/GitHub';

function ProjectMap({mmm:{img,title,desc,link,github,mongo,netlify}}) {
  
    const [show,setshow]=useState(false);
    

  return (
    <>
   <a href={link} target={"_blank"} rel="noreferrer">
        <div className='project' onMouseEnter={()=>setshow(true)} onMouseLeave={()=>setshow(false)}>
       
            {   show ? 
                 <div>
                  <h3>{title}</h3>
                  <div className='wrap'>{desc}</div>
                </div>
                :<><img src={require(`./${img}`)} alt=""/>
              </>

            }
           
             <div className='links'>
                <div><a href={github} target={"_blank"} rel="noreferrer">< GitHubIcon  className="giticon"/></a></div>
                <div><a href={mongo} target={"_blank"} rel="noreferrer"><img  className="icon" src={require(`./${"mongo.png"}`)} alt=""/></a></div>
                <div><a href={netlify} target={"_blank"} rel="noreferrer"><img  className="icon" src={require(`./${"netlify.png"}`)} alt=""/></a></div>
              </div>
        </div>
        </a>
    
    </>
    
  )
}

export default ProjectMap