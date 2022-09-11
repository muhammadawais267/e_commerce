import React, {useEffect} from 'react'
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
// import { productDetail, Data } from '../data';
// import Case from '../assests/images/Case13.png'
// import Case1 from '../assests/images/Case12.png'
// import Case2 from '../assests/images/Case12.png'
// import Case3 from '../assests/images/Case4.png'
// import Case4 from '../assests/images/Case5.png'
import ReactImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import {ADD} from '../redux/Actions/product'



import './Detail.css'
import axios from 'axios';



const ProductDetail = () => {
  const {id} = useParams();

  const config = {
    headers: {
      "Content-Type": "application/json",
      
      "origin":"http://localhst:3000"
    }
  };
  const getSingleProduct = async ()=>{
    console.log("iddd", id)
    const res = await axios.get(`http://localhost:5000/api/products/getsingleproduct/${id}`)
    console.log("Product Data", res.data)


  }

  useEffect(() => {
    getSingleProduct()
    // dispatch(getSingleProduct())
  }, [])
  
  // const dispatch = useDispatch();
  // const send =(e)=>{
  //   dispatch(ADD(e))
  // }
  // const products= useSelector((state)=>state.product.products);
  // const productsDetail= useSelector((state)=>state.product.productDetails);
  // const getData = useSelector((state)=>state.product.additems)
  
// console.log("id==>>", id)
// console.log("id=sdjbsd=>>", products.map(product => typeof(product.id)))
// let product = products.filter(product => product.id === id)
// console.log("producta", product)
  // console.log(useParams)
 
  // const catData1 = products.slice(10, 16);
  // const ImageData = productsDetail.slice(0,1)


  
   
  return (
    <div>
      Hello World
         {/* <Container >
            <Row style = {{width:'100%'}}>

                <Col lg={6} md={6} sm ={12}>
                    <ReactImageGallery
                    thumbnailPosition='left'
                    showPlayButton = {false} 
                    showFullscreenButton = {false}
                    showBullets = {false}
                    items={product[0].thumbnails}/>
                  

                </Col>


                
                <Col className='product-desc' lg= {6} md= {6 } sm= {12}>
                   
                            <div>
                            <div className="price">
                  <h3>{product[0].price}</h3>
                  <del>{product[0].del}</del>
                  
                </div>
                  <p style={{color:'lightgray'}}>free shipping</p>
                  <p >Select device:</p>
                  <Dropdown>
                    <Dropdown.Toggle
                    className='devices'

                      id="dropdown-basic"
                    >Iphone x</Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <div className='case-color'>
                    <h6>
                        Case Color
                    </h6>
                    <p>White</p>
                  </div>
                  <div className='colors'>
                    <div className='color1'></div>
                    <div className='color2'></div>
                    <div className='color3'></div>
                    <div className='color4'></div>
                    <div className='color5'></div>
                    <div className='color6'></div>
                    <div className='color7'></div>
                    <div className='color'></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  
                       
                       <div ><Button onClick={()=>send(product[0])} className='add-btn'>Add to Cart</Button></div>
                    
                    <div ><Button className='costimize-btn'>Costomize</Button></div>
                    </div>
                
                
                  </Col>

            </Row>
      </Container>
      <Container>
<Row>
    <h1>Description</h1>
    
            <div>
                <p>{product[0].description}</p>
            </div>
       
</Row>

      </Container>
      <Container>
        <Row style ={{width:'100%'}}>
          <h1>General Characterists</h1>
          <Col lg ={6} md ={6} sm= {12}>
            <h6>Material : <span className='product-char'>Lather</span></h6>
            <h6>Case Features : <span className='product-char'>Protective</span></h6>
            <h6>Manufacturer : <span className='product-char'>Pakistan</span></h6>
            <h6>Item height : <span className='product-char'>14.5cm</span></h6>
          </Col>
          <Col lg ={6} md ={6} sm= {12}>
          <h6>Type of cases :<span className='product-char'> Protective Bumper</span> </h6>
            <h6>Equipment : <span className='product-char'>Case</span></h6>
            <h6>Packing height : <span className='product-char'>16cm</span></h6>
            <h6>Phone Manufacturer : <span className='product-char'>Iphone</span></h6>
          </Col>
          
            
        </Row>
      </Container>

<Container>
  
    <Row className="row-img">
    <h1>You may like also</h1>
          {catData1.map((data, key) => {
            return (
              <Col lg={2} md={3} sm={6}>
                <Link to='/'>
                  <img className="same-product" src={data.img} alt=""></img>
                </Link>

                <p className="text-precentage">-30%</p>
                <div className="price">
                  <h3>{data.price}</h3>
                  <del>{data.del}</del>
                </div>
                <p className="cat-name">{data.description}</p>
              </Col>
            );
          })}
          
        </Row>
  
</Container>
<Container>
  
    <Row className="row-img">
  
          {catData1.map((data, key) => {
            return (
              <Col lg={2} md={3} sm={6}>
                <Link to = '/'>
                  <img className="same-product" src={data.img} alt=""></img>
                </Link>

                <p className="text-precentage">-30%</p>
                <div className="price">
                  <h3>{data.price}</h3>
                  <del>{data.del}</del>
                </div>
                <p className="cat-name">{data.description}</p>
              </Col>
            );
          })}
          
        </Row>
  
</Container> */}
    </div>
  )
}

export default ProductDetail