import './App.css';
import Header from './header/head';
import Skills from './skills/skills';
import Topcontainer from './topcontainer/topcontainer';
import Project from './projects/project';
import Experience from './exp/experience';
import Contact from './contact/contact';

function App() {
  console.log("fwrfedsedf")
  return (
    <div className="Apps">
    
      <Header/>
      <Topcontainer/>
      <Skills/>
      <Project/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
