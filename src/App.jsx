import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './Signup/Signup'
import Login from './Login/Login'

function App() {
  const [form, setForm] = useState(0)

  return (
    <>
      <Login />
    </>
  )
}

export default App
