import { useState } from 'react'

import './App.css'
import MyRoutes from './MyRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyRoutes/>
    </>
  )
}

export default App
