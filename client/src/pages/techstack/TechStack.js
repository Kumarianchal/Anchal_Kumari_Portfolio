import React from 'react'
import './techStack.css'
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaReact } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { SiThealgorithms } from "react-icons/si";
import { SiSpring } from "react-icons/si";

export const techStackUtils = [
    {
        id: 0,
        name: 'React',
        icon: FaReact
    },
    {
        id: 1,
        name: 'NodeJS',
        icon: FaNodeJs
    },
    {
        id: 2,
        name: 'HTML',
        icon: AiOutlineHtml5
    },
    {
        id: 3,
        name: 'CSS',
        icon: FaCss3Alt
    },
    {
        id: 4,
        name: 'Javascript',
        icon: DiJavascript
    },
    {
        id: 5,
        name: 'Java',
        icon: FaJava
    },
    {
        id: 6,
        name: 'Spring Framework',
        icon: SiSpring
    },
    {
        id: 7,
        name: 'Data Structures and Algorithms',
        icon: SiThealgorithms
    }
];
const TechStack = () => {
  return (
    <>
        <div className="container-fluid techstack-container" id='techstack'>
            <h2 className='text-center text-uppercase'>Technical Skills</h2>
            <hr></hr>
            <div className='text-center'>I have knowledge and experience in the following technologies 👇</div>
            <div className="row">
                {techStackUtils.map(tech => (
                    
                    <div className="col-md-3 col-sm-4 col-xs-6 techstack" key={tech.id}>
                        <p><tech.icon/></p>
                        <h3>{tech.name}</h3>
                    </div>
                    
                ))}
                
            </div>
            
        </div>
        
    </>
  )
}

export default TechStack