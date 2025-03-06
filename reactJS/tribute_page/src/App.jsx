import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import HeaderImage from './components/HeaderImage'
import Achivements from './components/Achivements'

function App() {

  return (
    <>
      <Header />
      <HeaderImage />
      <Achivements />
    </>
  )
}

export default App
