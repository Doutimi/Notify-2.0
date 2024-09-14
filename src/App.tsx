import { useState } from 'react'
import './App.css'

import Home from './pages/home'
import Appointments from './pages/appointments'
import New from './pages/appointments/new/new'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Home/> */}
    <New/>
    </>
  )
}

export default App
