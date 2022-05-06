import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {files} from "../../data/files";
import "./FileEditor.css";
import {BsFillPlayFill} from "react-icons/bs";
import {AiOutlineSelect} from "react-icons/ai";
import {AiOutlineCopy} from "react-icons/ai";
import {BiCut} from "react-icons/bi";
import {FaFileCsv} from "react-icons/fa";
const FileEditor = () => {

    let {id} = useParams();
    const [file,setFile] = useState({});


    useEffect(() =>{
      const fileid = files.find(ele => ele.key === id);
      setFile(fileid);
    },[file,id]);

  return (
   <div className="file-editor">
    <h3>{file.filename}</h3>
      <div className="action-bar">
      <div className="file-menu">
          <button>File</button>
          <button>Edit</button>
          <button>View</button>
      </div>
      <div className="query-actions">
        <button><BsFillPlayFill className='query-icons'/> Run</button>
        <button><AiOutlineSelect className='query-icons'/> Select All</button>
        <button><AiOutlineCopy className='query-icons'/> Copy</button>
      </div>
      </div>
      <div className="edit-area">
        <textarea cols="30" rows="10" placeholder='Write your query here' id="query-area" value={file.query}>
        </textarea>
      </div>
      <div className="result-area">
        <div className="result-bar">
          <button><AiOutlineSelect className='query-icons'/>Select All</button>
          <button><AiOutlineCopy className='query-icons'/>Copy</button>
          <button><BiCut  className='query-icons'/>Cut</button>
          <button><FaFileCsv className='query-icons'/>Copy To CSV</button>
        </div>
        <div className="result-screen">
        <table>
        <thead>
          <tr>
          <th>ID</th>
          <th>Customer</th>
          <th>Company</th>
          <th>Title</th>
          <th>Region</th>
          <th>City</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>ALFKI	</td>
          <td>Maria Anders</td>
          <td>Alfreds Futterkiste</td>
          <td>Sales Representative</td>
          <td>IM</td>
          <td>Berlin</td>
        </tr>
        <tr>
          <td>ALFKJ	</td>
          <td>Francisco Chang</td>
          <td>Ana Trujillo Emparedados y helados</td>
          <td>Sales Representative</td>
          <td>IM</td>
          <td>Madrid</td>
        </tr>
        <tr>
          <td>ALFKK	</td>
          <td>Martín Sommer</td>
          <td>Antonio Moreno Taquería</td>
          <td>Owner</td>
          <td>IM</td>
          <td>Ohio</td>
        </tr>
        <tr>
          <td>ALFKL	</td>
          <td>Thomas Hardy</td>
          <td>Around the Horn</td>
          <td>Sales Representative</td>
          <td>IM</td>
          <td>London</td>
        </tr>
        <tr>
        <td>BERGS</td>
        <td>Christina Berglund</td>
        <td>Berglunds snabbköp</td>
        <td>Order Administrator</td>
        <td>IM</td>
        <td>Luleå</td>
      </tr>
        </tbody>
        </table>
        </div>
      </div>
   </div>
  )
}

export default FileEditor