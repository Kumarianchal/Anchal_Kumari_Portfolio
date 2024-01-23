import React from 'react'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import {FaGraduationCap} from "react-icons/fa6";
import { MdOutlineCastForEducation } from "react-icons/md";

import './education.css'

const Education = () => {
  return (
    <>
        <div className="container-fluid education-container" id='education'>
            <h2 className='text-center text-uppercase'>Education</h2>
            <hr></hr>
            <div className='text-center'>Please take time to view my educational qualifications. 👇</div>

            <div>
            <VerticalTimeline>
                
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2019 - 2023"
                    iconStyle={{ background: '#f29f67', color: '#fff' }}
                    icon={<FaGraduationCap />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Technology</h3>
                    <h4 className="vertical-timeline-element-subtitle">Institute of Engineering and Management, Kolkata</h4>
                    <p>
                    Branch : Computer Science and Engineering
                    <br/>
                    CGPA : 9.4
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2017 - 2019"
                    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
                    icon={<MdOutlineCastForEducation />}
                >
                    <h3 className="vertical-timeline-element-title">High School(12th Board)</h3>
                    <h4 className="vertical-timeline-element-subtitle">British English High School, Gaya, Bihar</h4>
                    <p>
                    Stream : Science
                    <br/>
                    BOARD : CBSE
                    <br/>
                    Percentage : 93.4
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Until 2017"
                    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
                    icon={<MdOutlineCastForEducation />}
                >
                    <h3 className="vertical-timeline-element-title">Matriculation</h3>
                    <h4 className="vertical-timeline-element-subtitle">Creane Memorial High School, Gaya, Bihar</h4>
                    <p>
                    BOARD : CBSE
                    <br/>
                    CGPA : 10
                    </p>
                </VerticalTimelineElement>
                
            </VerticalTimeline>
            </div>
        </div>
    </>
    )
    }

export default Education