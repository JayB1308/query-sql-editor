import React from 'react';
import "./Sidebar.css";
import {AiOutlineVerticalLeft} from "react-icons/ai";
import {AiFillDatabase} from "react-icons/ai";
import {BiSupport} from "react-icons/bi";
import {AiFillSetting} from "react-icons/ai";
import {BiHelpCircle} from "react-icons/bi";
const Sidebar = () => {
  return (
    <div className="sidebar">
        <ul className="side-links">
            <li className="sidebar-item">All Files <AiOutlineVerticalLeft className="settings-icon" /></li>
            <li className="sidebar-item">Databases <AiFillDatabase className="settings-icon" /></li>
            <li className="sidebar-item">Support <BiSupport className='settings-icons'/></li>
            <li className="sidebar-item">Settings <AiFillSetting className='settings-icons'/></li>
            <div className="help">
            Want to learn more? <BiHelpCircle id="help-icon" />
            </div>
        </ul>
    </div>
  )
}

export default Sidebar