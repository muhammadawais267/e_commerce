import React, {useEffect, useState} from 'react'
import { Button, Container , Row,  Table} from 'react-bootstrap'
import { Delete } from '@mui/icons-material'
// import { productDetail } from '../data'
import { useSelector, useDispatch } from 'react-redux'
import { DLT ,ADD, REMOVE} from '../redux/Actions/product'
import './Cart.css'
import { Link } from 'react-router-dom'



const Cart = () => {
  const getData = useSelector((state)=>state.product.additems);
  const dispatch = useDispatch();



  const [price, setPrice] = useState(0);
  

  
  
  // const products = useSelector((state)=>state.product.products);
  // console.log("Products", products);
  
  
  const del = (id) => {
    dispatch(DLT(id));
  };

  const send =(e)=>{
    dispatch(ADD(e))
   }
   const remove = (item)=>{
    dispatch(REMOVE(item))
  }
  // console.log("img", img, "description",description, "price", price)
  // const [quantity, setQuantity] = useState(1);
  // const increaseQuantity = ()=>{
  //   if(quantity>=10)
  //   return
  //   const qty =quantity+1;
  //   setQuantity(qty)
  // }
  // const decreaseQuantity = ()=>{
  //   if(quantity<=1)
  //   return
  //   const qty = quantity-1;
  //   setQuantity(qty)
  // }

  
  const total = ()=>{
    let price = 0;
    getData.map((ele,k)=>{
        price = ele.price * ele.qnty + price
    });
    setPrice(price);
};
  useEffect(() => {
    total();
  }, [total]);
  
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
                    <td className='quantity'>
                      <Button className='decrease-qty' onClick={e.qnty <=1 ? ()=>del(e.id) : ()=>remove(e)}>-</Button>
                      {/* <p>{e.qnty}</p> */}
                      <input type='number' value = {e.qnty} />
                      <Button className='increase-qty' onClick={()=> send(e) }>+</Button>
                    </td>
                    <td>
                      <p>{price}</p>

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
        
          <Container className='check'>

        <Link to ='/userdetails'>
        <Button className = 'check-btn'>Check Out</Button>
        </Link>

          </Container>

      
          
      </div>
  )
}

export default Cart