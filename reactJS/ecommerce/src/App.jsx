import { useState } from 'react'
import './App.css'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage.jsx'
import data from './data.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RegisterPage ></RegisterPage>

      <LoginPage />
      <HomePage data={data} />
    </>
  )
}

export default App
