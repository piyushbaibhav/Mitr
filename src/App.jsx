import { useState } from 'react'
import reactLogo from './assets/react.svg'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import DarkModeToggle from './components/DarkMode'
import TypingText from './components/Type'
import Hamburger from './components/Hamburger';
import Footer from './components/Footer';
import DocumentVerify from './pages/DocumentVerify';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      {/* <DarkModeToggle/> */}
      <Hamburger/>
      {/* <DarkModeToggle/>
      <TypingText/> */}
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/documentverify' element={<DocumentVerify/>}/>
      </Routes>
        <Footer/>
      </Router>
      
    </>
  )
}

export default App
