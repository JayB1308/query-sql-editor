import React from 'react'
import query_logo from "../../images/query_image.png";
import "./Navbar.css";
import {AiFillEdit} from "react-icons/ai";
import {MdAccountCircle} from "react-icons/md";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
      <nav className="navbar"> 
      <div className="nav-image">
      <img src={query_logo} alt="logo"/>
      </div>
      <div className="nav-links">
        <ul className='nav-list'>
            <li className = "nav-items">Query Editor <AiFillEdit className='nav-icons'/></li>
            <li className = "nav-items">Account <MdAccountCircle className='nav-icons'/></li>
        </ul>
      </div>
      </nav>
  )
}

export default Navbar