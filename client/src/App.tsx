import { useState } from 'react'

import reactLogo from './assets/react.svg'
import './App.css'
import Cards from './components/cards/Cards'
import Generate from './components/cards/Generate'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
