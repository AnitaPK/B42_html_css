import React, { useReducer, useState } from 'react'

const initialState = {count:0,name:''}
function reducer(state, action){
    switch(action.type){
        case 'INCREAMENT':
            console.log("before",state.count)
            return {count:state.count + 1} ;
        case 'DECREAMENT':
            console.log("before",state)
            return{...state, count:state.count-1}
        case 'ShowCountAndName':
            console.log(state);
            console.log(action.payload);
            return {...state, name:action.payload.n1, year:'2025'}
        default :
            return state;
    }
}
const CounterReducer = () => {
    const [name1,setName1] = useState('')
    const [name2,setName2] = useState('')

    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <p>Counter:{state.count}</p>
      <p>Name:{state.name}</p>
      <p>Year:{state.year}</p>
      <button onClick={()=>dispatch({type:'INCREAMENT'})}>Increament</button>
      <button onClick={()=>dispatch({type:'DECREAMENT'})}>Decreament</button>
      <input type='text' onChange={(e)=>setName1(e.target.value)}/>
      <input type='text' onChange={(e)=>setName2(e.target.value)}/>

<button onClick={()=>dispatch({type:'ShowCountAndName',payload:{n1:name1,n2:name2}})}>Show Count And Name</button>
    </div>
  )
}

export default CounterReducer
