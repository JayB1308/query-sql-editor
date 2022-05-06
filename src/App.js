import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import FileEditor from './pages/FilesEditor/FileEditor';
import Sidebar from './components/Sidebar/Sidebar';
function App() {
  return (
   <>
   <Navbar />
   <div className="container">
   <Sidebar />
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/file/:id" element={<FileEditor/>} />
    </Routes>
   </BrowserRouter>
   </div>
   </>
  );
}

export default App;
