import React from 'react'
import './menu.css';
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcGraduationCap } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";
import { FcWorkflow } from "react-icons/fc";
import { FcGenericSortingDesc } from "react-icons/fc";
import { FcPhone } from "react-icons/fc";

import { Link } from 'react-scroll';
import { Slide, Zoom } from "react-awesome-reveal";

const Menu = ({toggle}) => {
  return (
    <>  
        {  toggle ? 
            (
                <>
                    <div className="navbar-profile-pic">
                        <Zoom>
                        <img src = "project-pics\profile-pic.jpeg" alt="profic-pic"></img>
                        </Zoom>
                    </div>
                    
                    <Slide left>
                    <div className="nav-items  wide-navbar">
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to='home' activeClass="active" spy={true} smooth={true} offset={0} duration={100}>
                                    <FcHome/> 
                                    <span className='nav-link-text'>Home</span>
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to='about' activeClass="active" spy={true} smooth={true} offset={0} duration={100}>
                                    <FcAbout/>
                                    <span className='nav-link-text'>About</span>
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to='techstack' activeClass="active" spy={true} smooth={true} offset={70} duration={100}>
                                    <FcWorkflow/> 
                                    <span className='nav-link-text'>Technical Skills</span>
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to='workexp' activeClass="active" spy={true} smooth={true} offset={70} duration={100}>
                                    <FcBriefcase/> 
                                    <span className='nav-link-text'>Work Experience</span>
                                </Link>    
                            </div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to='education' activeClass="active" spy={true} smooth={true} offset={70} duration={100}>
                                    <FcGraduationCap/> 
                                    <span className='nav-link-text'>Education</span>
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to='project' activeClass="active" spy={true} smooth={true} offset={70} duration={100}>
                                    <FcGenericSortingDesc/> 
                                    <span className='nav-link-text'>Projects</span>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to='contact' activeClass="active" spy={true} smooth={true} offset={70} duration={100}>
                                    <FcPhone/> 
                                    <span className='nav-link-text'>Contact</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    </Slide>
                </>
            ) :
            (
                <Slide left>
                <div className="nav-items  narrow-navbar">
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to='home' activeClass="active" spy={true} smooth={true} offset={0} duration={100}>
                                    <FcHome title='Home'/>
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to='about' activeClass="active" spy={true} smooth={true} offset={0} duration={100}>
                                    <FcAbout title='About'/>
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to='techstack' activeClass="active" spy={true} smooth={true} offset={70} duration={100}>
                                    <FcWorkflow title='Technical Skills'/> 
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to='workexp' activeClass="active" spy={true} smooth={true} offset={70} duration={100}>
                                    <FcBriefcase title='Work Experience'/>
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to='education' activeClass="active" spy={true} smooth={true} offset={70} duration={100}>
                                    <FcGraduationCap title='Education'/>
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to='project' activeClass="active" spy={true} smooth={true} offset={70} duration={100}>
                                    <FcGenericSortingDesc title='Projects'/>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to='contact' activeClass="active" spy={true} smooth={true} offset={70} duration={100}>
                                    <FcPhone title='Contact'/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    </Slide>
            )
        }
    </>
  )
}

export default Menu