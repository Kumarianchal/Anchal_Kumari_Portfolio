import { React, useState } from 'react';
import './mainLayout.css';
import SideLayout from './SideLayout';
import Home from '../../pages/home/Home';
import About from '../../pages/about/About';
import TechStack from '../../pages/techstack/TechStack';
import WorkExperience from '../../pages/workExperience/WorkExperience';
import Education from '../../pages/education/Education';
import Project from '../../pages/project/Project';
import Contact from '../../pages/contact/Contact';
import Footer from './Footer'
import ScrollToTop from "react-scroll-to-top";



const MainLayout = () => {

    const [toggle, setToggle] = useState(true)

const handleToggle = () =>{
    setToggle(!toggle);
}
  return (
    <>
    <div className="app">
        
        <div className="side-container">
          <SideLayout toggle={toggle} handleToggle={handleToggle}/>
        </div>
        <div className= {toggle ? "main-container main-container-toggle" : "main-container"}>
          <Home/>
          <About/>
          <TechStack/>
          <WorkExperience/>
          <Education/>
          <Project/>
          <Contact/>
        </div>
       
    </div>

    <div>
        <Footer/>
    </div>
    <ScrollToTop smooth='true' color="white" style={{backgroundColor: "#1e1e2c", borderRadius: "30px"}}/>
    </>
  )
}

export default MainLayout