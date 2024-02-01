import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import DarkModeToggle from './components/DarkMode'
import TypingText from './components/Type'
import Hamburger from './components/Hamburger';
import Footer from './components/Footer';
import DocumentVerify from './pages/DocumentVerify';
import PhotoUpload from './pages/PhotoUpload';
import Terms from './pages/Terms';
import Portal from './pages/Portal';
import ProtectedRoute from './components/ProtectedRoute';
import Chatbot from './components/Chatbot';
import ITasset from './pages/ITasset';
import Feedback from './pages/Feedback';
import Settings from './pages/Settings';
import About from './pages/About';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Chatbot/>
      {/* <DarkModeToggle/> */}
      {/* <Hamburger/> */}
      {/* <DarkModeToggle/>
      <TypingText/> */}
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/documentverify' element={<DocumentVerify/>}/>
        <Route path='/photoupload' element={<PhotoUpload/>}/>
        <Route path='/term' element={<Terms/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/it' element={<ITasset/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/portal' element={<Portal/>}/>
      </Routes>
        <Footer/>
      </Router>
      
    </>
  )
}

export default App
