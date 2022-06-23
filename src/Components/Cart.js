import React, { useState } from 'react'
import { Container , Row,  Table} from 'react-bootstrap'
import { Delete } from '@mui/icons-material'
// import { productDetail } from '../data'
import { useSelector, useDispatch } from 'react-redux'
import { delData} from '../redux/Actions/product'
import './Cart.css'



const Cart = () => {
  const getData = useSelector((state)=>state.product.additems);
  const dispatch = useDispatch();
  

  
  
  // const products = useSelector((state)=>state.product.products);
  // console.log("Products", products);
  
  
  const del = (id) => {
    dispatch(delData(id));
  };

  // console.log("img", img, "description",description, "price", price)
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

  
// const [price, setPrice] = useState(0);
// let totalAmount = ()=>{
//   const amount= price+quantity;
//   setPrice(amount)
// }
  
  return (
    <div>

   
        <Container >
        <Row style={{width:'100%', marginLeft:'10px'}}>
    
        <Table>
          <thead>
            {/* <th></th> */}
            <th>Item</th>
            <th>Description</th>
            <th>Price</th>
            <th>quantity</th>
            <th>Subtotal</th>
            
          </thead>
          <tbody>
            {
              getData.map((e)=>{
                return(
                  <>
                  <tr>
                    <td>
                      <img src={e.img} alt = '' style={{width:'5rem', height:'5rem'}}></img>

                    </td>
                    <td>
                      <p>{e.description}</p>
                    </td>
                    <td><p>{e.price}</p></td>
                    <td><p>{e.quantity}</p>
                    </td>
                    <td>
                      <p>300$</p>

                    </td>
                    <td style={{color:'red'}} >

                    <Delete 
                    onClick = {()=>del(e.id)}/>
                    </td>
                    {/* <td><p>{e.price}</p></td> */}
                  </tr>
                  </>
                )
              })
            }
          </tbody>
        </Table>
        
  
        </Row>
          </Container>
          
      </div>
  )
}

export default Cart