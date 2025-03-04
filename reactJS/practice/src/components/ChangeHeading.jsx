import React, { useState } from 'react'

const ChangeHeading = () => {
    const[heading, setHeading] =useState('Hello World')
    const handleHeadingChange =() =>{
        setHeading("Hello CHANDAN")
    }

  return (
    <div className='container bg-warning' style={{height:"400px"}}>
      <h1>{heading}</h1>
      <button className='btn btn-outline-danger' onClick={()=>{setHeading("Hello React")}}>Change Hedaing</button>
      <button className='btn btn-primary' onClick={handleHeadingChange} >Change heading</button>
    </div>
  )
}

export default ChangeHeading
