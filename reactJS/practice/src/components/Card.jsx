import React from 'react'
import Button from './Button'
import './Card.css'

const Card = ({product}) => {
    console.log(product);   //props.product = productBat
  return (
    <div style={{width:"18rem"}} className='cardOne'>
        <img src={product.image} alt="img not shown" className='ImgCard'/>
        <h3 className='headingCard'>{product.pname}</h3>
        <p className='textCard'>Price : {product.price}</p>
        <p className='textCard'> In Stock</p>
        <Button />
    </div>
  )
}

export default Card
