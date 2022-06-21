import React from 'react'
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { productDetail, Data } from '../data';
// import Case from '../assests/images/Case13.png'
// import Case1 from '../assests/images/Case12.png'
// import Case2 from '../assests/images/Case12.png'
// import Case3 from '../assests/images/Case4.png'
// import Case4 from '../assests/images/Case5.png'
import ReactImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';

import './Detail.css'


const ProductDetail = () => {
  // const stockData = Data.slice(0, 5);
  // const imgData = Data.slice(5, 10);
  // const catdata = Data.slice(8, 12);
  const catData1 = Data.slice(10, 16);
    const images = [{
      original:'/assests/images/Case13.png',
        thumbnail:'/assests/images/Case13.png'
    },
    {
      original:'/assests/images/Case13.png',
        thumbnail:'/assests/images/Case13.png'
    },
    {
      original:'/assests/images/Case13.png',
        thumbnail:'/assests/images/Case13.png'
    }
]
    const ImageData = productDetail.slice(0,1)
    // const images = [Case, Case1,Case2,Case3];
    console.log(images)
    let params = useParams();
    const {name} = params
    console.log(name)
  return (
    <div>
         <Container >
            <Row style = {{width:'100%'}}>

                <Col lg={6} md={6} sm ={12}>
                    <ReactImageGallery
                    thumbnailPosition='left'
                    showPlayButton = {false} 
                    showFullscreenButton = {false}
                    showBullets = {false}
                    items={images}/>
                    {/* <img className='cat-img' src={images} alt = ""></img> */}

                </Col>


                
                <Col className='product-desc' lg= {6} md= {6 } sm= {12}>
                    {ImageData.map((data, key)=>{
                        return(
                            <div>
                            <div className="price">
                  <h3>{data.price}</h3>
                  <del>{data.del}</del>
                  
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
                    <div ><Link to='/cart'><Button className='add-btn'>Add to Cart</Button></Link></div>
                    <div ><Button className='costimize-btn'>Costomize</Button></div>
                    </div>
                
                )
                
                })}
                  </Col>

            </Row>
      </Container>
      <Container>
<Row>
    <h1>Description</h1>
    {ImageData.map((data,key)=>{
        return(
            <div>
                <p>{data.description}</p>
            </div>
        )
    })}
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
                <Link to="/addtocart">
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
                <Link to="/addtocart">
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
    </div>
  )
}

export default ProductDetail