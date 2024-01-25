import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";

const Navbar = () => {
  return (
    <header className='navbar-container' >
      <nav>
        <div className='search-container' >
          <input type='search' placeholder='Search' />
          <IoIosSearch />
        </div>
        <div className='icon-container' >
          <IoIosNotifications />
          <IoIosSettings />
          <FaUser />
        </div>
      </nav>
    </header>
  )
}

export default Navbar