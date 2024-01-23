import React from 'react';
import './home.css';
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/documents/resume.pdf'

import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <>
        <div className="container-fluid home-container" id='home'>
            <div className="container home-content">
                <Fade>
                    <h2>Hi, my name is <span>Anchal Kumari</span></h2>
                </Fade>
                
                <h4 className='typewriter d-block'>
                    <p>I am a&nbsp;</p>
                    <div>
                    <Typewriter
                        options={{
                            strings: ['Full Stack Developer!', 'MERN stack Developer!', 'Spring developer!'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    </div>
                </h4>
                <div className="home-btns">
                    <a className="btn" title='Click to download my resume' href={Resume} download='Anchal_Kumari_Resume.pdf'>Resume</a>
                    <a className="btn" href='#'>Hire Me</a>
                </div>

            </div>
        </div>
    </>
  )
}

export default Home