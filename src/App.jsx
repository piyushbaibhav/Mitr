import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import DarkModeToggle from './components/DarkMode'
import TypingText from './components/type'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DarkModeToggle/>
      <TypingText/>
      
    </>
  )
}

export default App
