import React from 'react'
import './project.css'

import { Fade } from "react-awesome-reveal";

const Project = () => {
  return (
    <>
        <div className="container-fluid project-container" id='project'>
            <h2 className='text-center text-uppercase'>Projects</h2>
            <hr></hr>
            <div className='text-center'>Following is the list of projects I have worked upon. 👇</div>
            <div className="row">
                <div className="col-md-4 col-sm-12 col-xs-12 my-5">
                    <Fade>
                    <div className="card rounded">
                        <div className="card-image">
                            <span className="card-notify-badge">
                                Java Full Stack
                            </span>
                            <img src='project-pics\ecom.jpg' alt=''></img>
                        </div>
                        <div className="card-image-overly">
                            <span className='card-detail-badge'>Java</span>
                            <span className='card-detail-badge'>Spring</span>
                            <span className='card-detail-badge'>Hibernate</span>
                            <span className='card-detail-badge'>ORM</span>
                        </div>
                        <div className="card-body">
                            <div className="project-title">
                                <h4>MyJewel Ecommerce Website</h4>
                            </div>
                            <div className="project-desc">
                                Developed a full-fledged e-commerce platform using Spring Framework, Servlets, JSP, Spring Security, and Spring Data JPA.
                                Implemented features such as user authentication, product catalog, shopping cart, order processing, and payment integration.
                            </div>
                            <div className='project-link'>
                                <a href='https://github.com/Kumarianchal'>View</a>
                            </div>
                        </div>
                    </div>
                    </Fade>
                </div>
              
                <div className="col-md-4  col-sm-12 col-xs-12 my-5">
                   
                    <div className="card rounded">
                        <div className="card-image">
                            <span className="card-notify-badge">
                                MERN Stack
                            </span>
                            <img src='project-pics\mern.jpg' alt=''></img>
                        </div>
                        <div className="card-image-overly">
                            <span className='card-detail-badge'>NodeJS</span>
                            <span className='card-detail-badge'>Express</span>
                            <span className='card-detail-badge'>React</span>
                            <span className='card-detail-badge'>MongoDB</span>
                        </div>
                        <div className="card-body">
                            <div className="project-title">
                                <h4>INotebook React App</h4>
                            </div>
                            <div className="project-desc">
                            
                            Developed a react application  to create, view, edit notes using React , Node JS, Express and MongoDB.
                            </div>
                            <div className='project-link'>
                                <a href='https://github.com/Kumarianchal'>View</a>
                            </div>
                        </div>
                    </div>
                   
                </div>
               
                <div className="col-md-4  col-sm-12 col-xs-12 my-5">
                    <Fade>
                    <div className="card rounded">
                        <div className="card-image">
                            <span className="card-notify-badge">
                                Spring Boot
                            </span>
                            <img src='project-pics\spring_boot.jpg' alt=''></img>
                        </div>
                        <div className="card-image-overly">
                            <span className='card-detail-badge'>Spring Boot</span>
                            <span className='card-detail-badge'>Web Sockets</span>
                            <span className='card-detail-badge'>Java</span>
                            
                        </div>
                        <div className="card-body">
                            <div className="project-title">
                                <h4>Real-Time Chat Application</h4>
                            </div>
                            <div className="project-desc">
                                Designed and developed a real-time messaging application using Spring Boot and Spring WebSockets.
                                Implemented features like a chat room, notification system, and real-time updates.
                                Showcased proficiency in building interactive, event-driven systems.
                            </div>
                            <div className='project-link'>
                                <a href='https://github.com/Kumarianchal'>View</a>
                            </div>
                        </div>
                    </div>
                    </Fade>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Project