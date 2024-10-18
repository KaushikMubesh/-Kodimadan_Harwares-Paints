import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TopBar } from './TopBar'
import { MainBox } from './MainBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopBar />
      <MainBox />
    </>
  )
}

export default App
