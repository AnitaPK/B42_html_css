import React from 'react'
import TotalPopulation from '../components/TotalPopulation'
import TotalCountries from '../components/TotalCountries'
import Continent from '../components/Continent'

const Dashboard = () => {
  return (
    <div>
      <h1 style={{color:"blue", textAlign:"center"}}>Dashboard</h1>
      <TotalPopulation />
      <TotalCountries />
      <Continent />
    </div>
  )
}

export default Dashboard
