import React from 'react';
import './sideLayout.css';
import Menu from '../menus/Menu';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

const SideLayout = ({toggle, handleToggle}) => {

  return (
    <>
        <div className="sidebar-section">
            <div className = {toggle ? "sidebar sidebar-toggle" : "sidebar" }>
                <div className="sidebar-toggle-icons">
                    <p onClick={handleToggle}>
                        {
                            toggle?<AiOutlineDoubleLeft size={30}/>:<AiOutlineDoubleRight size={30}/>
                        }    
                    </p>
                   
                </div>
                <Menu toggle={toggle}/> 
            </div>
        </div>
       
    </>
  )
}

export default SideLayout