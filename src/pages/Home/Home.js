import React from 'react'
import "./Home.css";
import {files} from "../../data/files"
import sql from "../../images/sql.png";
import {AiOutlinePlus} from "react-icons/ai";
import {FiEdit2} from "react-icons/fi";
import {AiFillDelete} from "react-icons/ai";
import { Link } from 'react-router-dom';
const Home = () => {

  return (
    <>
    <div className="home-container">
    <div className="quick-bar">
        <h2>Quick Access</h2>
        <button><AiOutlinePlus  className='add-icon'/>Add A New File</button>
    </div>
    <div className="file-container">
      {
        files.map((file) => {
          return (
            <div className="card" key={file.key}>
              <div className="card-image">
              <img src={sql} alt="file" />
              </div>
              <div className="card-body">
              <Link className='card-link' to={`file/${file.key}`}><p>{file.filename}</p></Link>
                <div className="card-buttons">
                    <FiEdit2  className='button-icon'/>
                    <AiFillDelete className='button-icon'/>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
    </div>
    </>
  )
}

export default Home