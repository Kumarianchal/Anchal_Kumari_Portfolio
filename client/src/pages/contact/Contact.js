import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import './contact.css'

import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { BiPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { useState } from 'react';

const Contact = () => {

    //using axios to hit backend apis from frontend

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const notify = () => toast.error("Provide all details to send email notification!");

    //handle submit button
    const  handleSendNotificationButton = async (e) =>{
        //prevent default form behaviour to prevent page from reloading
        e.preventDefault()

        try{
            if(!name || !email || !message){
                notify();
            } else{
                const res = await axios.post("/api/v1/portfolio/sendEmail", {
                    name,
                    email,
                    message
                })
                if(res.data.success){
                    toast.success(res.data.message)
                    setName("")
                    setEmail("")
                    setMessage("")
                } else{
                    toast.error(res.data.messsage)
                }
            }
        } catch(error){
            console.log(error);
        }
    }

  return (
    <>
        <div className="container-fluid contact-container" id='contact'>
            <h2 className='text-center text-uppercase'>Contact Details</h2>
            <hr></hr>
            <div className='text-center'>Contact me if you liked my profile 😀</div>

            <div className="row mt-5">
                <div className="col-md-6">
                    <div className="card card1 border-0">
                        <img src='project-pics/contact2.jpg' alt='contact-us'></img>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card card2 border-0">
                        <div className="row contact-icons mt-5">
                         
                                <a href='https://www.linkedin.com/in/anchal-kumari-5b3792204/'><span><AiFillLinkedin/></span><span>anchal-kumari-5b3792204</span></a>
                                <hr></hr>
                                <a href='https://github.com/Kumarianchal'><span><AiOutlineGithub/></span><span>Kumarianchal</span></a>
                                <hr></hr>
                                <a href='#'><span><BiPhone/></span><span>(+91) 9334962292</span></a>
                                <hr></hr>
                                <a href='#'><span><AiOutlineMail/></span><span>anchalkumaria39it@gmail.com</span></a>
                           
                            
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className='mail'>
                    <h4>Mail a Company</h4>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Company Name</label>
                            <input type="text" className="form-control" id="name" value={name} onChange={(e) =>{setName(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Company Email address</label>
                            <input type="email" className="form-control" id="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label"></label>
                            <textarea className="form-control" id="message" placeholder='Write your message..' value={message} onChange={(e) => {setMessage(e.target.value)}}/>
                        </div>
                        
                        <button className="btn btn-primary" onClick={handleSendNotificationButton}>Send Email Notification</button>
                    </form>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact