import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DarkModeToggle from './components/DarkMode'
import TypingText from './assets/type'

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
