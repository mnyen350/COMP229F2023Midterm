import { useState } from 'react'
import './App.css'
import Multiple from './components/Multiple/Multiple'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Multiple />
    </>
  )
}

export default App
