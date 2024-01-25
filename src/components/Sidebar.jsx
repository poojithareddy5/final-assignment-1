import React, { useState } from 'react'
import { FaAlignRight } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";

import { AiFillDatabase } from "react-icons/ai";
import User from '../assets/img/user.jpg'
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = ({setLogoutPop}) => {
  const logOutEvent = () => {
    setLogoutPop(true)
  }
  
  return (
    <>
    
    <div className='sidebar-container' >
      <div className='sidebar-heading' >
        <h3>ADMINS</h3>
      </div>
      <div className='sidebar-photo-container' >
        <img src={User} alt='user-photo' />
        <h2>SHANNU</h2>
      </div>
      <div className='sidebar-menu' >
        <li>
          <Link to='/' className='nav-link'>
            <FaHome />
            <span>Dashboard</span>
          </Link>
        </li>
      </div>

      <div className='sidebar-menu'>
        <span>Pages</span>
        <li>
          <Link to='store' className='nav-link'>
            <AiFillDatabase />
            <span>Stores</span>
          </Link>
        </li>
        
        {/* <li>
          <Link to='storeOwner' className='nav-link'>
            <FaClipboardList />
            <span>Products Details</span>
          </Link>
        </li> */}
        <li>
          <Link to='orderDetails' className='nav-link'>
            <FaQuestionCircle />
            <span>Order Details</span>
          </Link>
        </li>
        
      </div>
      <button onClick={logOutEvent} className='logoutBtn' >logout</button>
    </div>
    </>
    
  )
}

export default Sidebar;