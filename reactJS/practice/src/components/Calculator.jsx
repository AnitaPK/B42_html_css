import React, { useState } from "react";

const Calculator = () => {
    const [num1, setNum1] =useState()
    const [num2, setNum2] =useState()
    const [result, setResult] =useState(0)
    function handleAddition (){
        setResult(parseInt(num1)+parseInt(num2))
    }
    const handleSubtraction =()=>{
        return parseInt(num1)-parseInt(num2)
    }
    function handleSub (){
        setResult(handleSubtraction)
    } 
  return (
    <div className="container bg-light w-25" style={{height:"300px"}}>
        <div className="w-25">
      <input type="number" className='form-control' onChange={(e)=>setNum1(e.target.value)}/>
      <input type="number" className='form-control' onChange={(e)=>setNum2(e.target.value)}/>
      <h5>{result}</h5>
      <div className="d-flex justify-content-around">
      <button className="btn btn-primary" onClick={handleAddition}>+</button> 
      <button className="btn btn-primary" onClick={handleSub}>-</button>
      <button className="btn btn-primary">*</button> 
      <button className="btn btn-primary">/</button>
      </div>
      </div>
    </div>
  );
};

export default Calculator;
