import React, { useEffect, useState } from 'react'

const CountWithUseEffect = () => {
    const [count, setCount] = useState(0)

function handleIncreament(){
    setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
}

    useEffect(()=>{
        handleIncreament();
        console.log("*****Happy HoLI*********")``
    },[setCount])



console.log(count);
  return (
    <div style={{fontSize:"40px",color:"white"}}>
      hello
      {count}
      <button onClick={handleIncreament}>Increament</button>
    </div>
  )
}

export default CountWithUseEffect
