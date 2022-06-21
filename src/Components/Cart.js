import React, { useState } from 'react'
import { Container , Row, Col} from 'react-bootstrap'
import { productDetail } from '../data'
import './Cart.css'

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = ()=>{
    if(quantity>=10)
    return
    const qty =quantity+1;
    setQuantity(qty)
  }
  const decreaseQuantity = ()=>{
    if(quantity<=1)
    return
    const qty = quantity-1;
    setQuantity(qty)
  }

  
const [price, setPrice] = useState(0);
let totalAmount = ()=>{
  const amount= price+quantity;
  setPrice(amount)
}
  
  return (
    <div>

   
        <Container >
        <Row style={{width:'100%', marginLeft:'10px'}}>
    
        <h1>Shopping Cart</h1>
          <Col lg = {2} md = {3} sm = {6}>Item</Col>
          <Col lg = {2} md = {3} sm = {6}>Description</Col>
          <Col lg = {2} md = {3} sm = {6}>Price</Col>
          <Col lg = {2} md = {3} sm = {6}>Quantity</Col>
          <Col lg = {2} md = {3} sm = {6}>Subtotal</Col>
        
  
        </Row>
          </Container>
          <Container>

        <Row style = {{width:"100%"}}>
        <Col lg = {2} md = {3} sm = {6}>
          {productDetail.map((data,key)=>{
            return(
              <div>
                <img className='product-img' src={data.img} alt= ''></img>
              </div>
            )
          })}
        </Col>
        <Col lg = {2} md = {3} sm = {6}>
        {productDetail.map((data,key)=>{
            return(
              <div>
                <p>{data.description}</p>
              </div>
            )
          })}
        </Col>
        <Col lg = {2} md = {3} sm = {6}>
        {productDetail.map((data,key)=>{
            return(
              <div>
                <h4>{data.price}</h4>
              </div>
            )
          })}
        </Col>
        <Col className='quantity' lg = {2} md = {3} sm = {6}>
          <button className='decrease-qty' onClick={decreaseQuantity} >-</button>
          <input type = 'number' value={quantity}></input>
          <button className='increase-qty' onClick={increaseQuantity}>+</button>
        </Col>
        <Col lg = {2} md = {3} sm = {6}>
          <p>{totalAmount}</p>
        </Col>


        </Row>
          </Container>
      </div>
  )
}

export default Cart