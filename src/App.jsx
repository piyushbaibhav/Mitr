import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import DarkModeToggle from './components/DarkMode'
import TypingText from './components/Type'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      {/* <DarkModeToggle/>
      <TypingText/> */}
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>

      </Router>
      
    </>
  )
}

export default App
