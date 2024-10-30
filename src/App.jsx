import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TopBar } from './TopBar'
import { MainBox } from './MainBox'
import { Ourdeals } from './Ourdeals'
import { MainBox1 } from './MainBox1'
import { AsianPaints } from './AsianPaints'
import { Asianpaints1 } from './Asianpaints1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopBar />
      <MainBox1 />
      <Ourdeals />
      <AsianPaints />
      <Asianpaints1 />
    </>
  )
}

export default App
