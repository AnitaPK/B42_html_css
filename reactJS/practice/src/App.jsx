import React from 'react'
import './App.css'
import haederImage from './assets/headerImage.jpg'
import GreetingFunction from './components/GreetingFunction'
import GreetingClass from './components/GreetingClass'
import Card from './components/Card'


const productBat = {pname:"Bat", image:"https://images-na.ssl-images-amazon.com/images/I/81lqk9RzPpL._AC_SL1500_.jpg", price:80000,inStock:true}

const productIPhone = {pname:"IPhone", image:"https://www.injuredgadgets.com/media/catalog/product/cache/f5f60fa9fc0a3ee21fef23bc6a5073cb/r/e/rev-iph16plus-utlv_1_1.jpg", price:180000,inStock:true}


function App() {

  return (
    <>
    key in list , lifeCylcle, useState,
    <Card product={productBat}/>
    <Card product={productIPhone} />
      <h2>Learning React..   </h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, eos. Animi ipsum distinctio cum illum blanditiis aliquid perspiciatis itaque placeat?</p>

      <img src={haederImage} alt="image not showing" className="imageclass" />
{/* classBased component, inlineCSS, diff functionBased & ClassBased */}

<GreetingFunction data="Rohit Sharma" age={37} />
<GreetingFunction data="Virat Kohli" age={36} />
<GreetingFunction data="MS Dhoni" age={42} />
<hr></hr>
<GreetingClass data="Rohit Sharma Hitman" age={37} />

    </>
  )
}

export default App
