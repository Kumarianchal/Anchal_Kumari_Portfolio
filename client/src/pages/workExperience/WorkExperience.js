import React from 'react'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork } from "react-icons/md";
import './workExperience.css'

const WorkExperience = () => {
  return (
    <>
        <div className="container-fluid workexp-container" id='workexp'>
            <h2 className='text-center text-uppercase'>Work Experience</h2>
            <hr></hr>
            <div className='text-center'>Following are my work experiences 👇</div>

            <div>
            <VerticalTimeline>
                
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jan,2023 - June,2023"
                    iconStyle={{ background: '#f29f67', color: '#fff' }}
                    icon={<MdWork />}
                >
                    <h3 className="vertical-timeline-element-title">Software Development Engineer Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle">Amazon, Bangalore</h4>
                    <p>
                    Successfully created the App Crawler project from scratch using Java and Appium testing framework leveraging the power of AWS cloud services such as CDK, S3, SQS, and ECS.  System design concepts and effective design patterns were used in the project's design.
                    Instrumental in streamlining deployments by proactively resolving issues, resulting in significant time savings of approximately 100 hours per month that were previously consumed by manual tasks.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Jul,2021 - Aug,2021"
                    iconStyle={{ background: '#1e1e2c', color: '#fff' }}
                    icon={<MdWork />}
                >
                    <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle">Sparks Foundation, Remote</h4>
                    <p>
                    Contributed to the development of a cyclone relief website with an integrated payment gateway to receive donations.
                    Used front-end development tools like HTML, CSS, and JavaScript for backend.
                    </p>
                </VerticalTimelineElement>
                
            </VerticalTimeline>
            </div>
        </div>
    </>
  )
}

export default WorkExperience