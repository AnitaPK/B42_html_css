import React from 'react'


function GreetingFunction(props){
    console.log(props)
    return(
        <h2>Greeting To {props.data} <span>{props.age}</span></h2>
    )
}


export default GreetingFunction