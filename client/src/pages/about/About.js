import React from 'react'
import './about.css'
import {Fade} from  "react-awesome-reveal";

const About = () => {
  return (
    <>
        <div className="container-fluid about-container" id='about'>
            <div className="row">
                
                <div className="col-md-6 col-sm-12 col-xs-12">
                    <Fade>
                    <img src = "project-pics\about-pic.jpeg" alt="about-pic"></img>
                    </Fade>
                </div>
                
                <div className="col-md-6 col-sm-12 col-xs-12">
                    <h3>About me</h3>
                    <p>
                    I'm an enthusiastic learner who enjoys solving actual world problems.  I am bachelor of technology graduate in computer science. I'm more interested in the backend development. 
                    I was part of a great team while working as a software developer intern at Amazon. It gave me complete overview of how software development lifecycle works.  I'm persistent and devoted to my work. I'm looking forward to learning new technical skills and taking over the responsibility for my work. In my free time, I also enjoy playing badminton and reading a novel. In my career, I've been looking for good opportunities to succeed.
                   
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default About