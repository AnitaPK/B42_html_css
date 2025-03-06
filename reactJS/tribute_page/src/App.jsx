import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import HeaderImage from './components/HeaderImage'
import About from './components/Aboutus';
import Career from './components/Career';
import Achievements from './components/Achivements';
import Gallery from './components/Gallary';
import Footer from './components/Footer';
import './App.css';

function App() {

  return (
    <div className='App'>
      <Header />
      <HeaderImage />
      <About />
      <Career />
      <Achievements />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
