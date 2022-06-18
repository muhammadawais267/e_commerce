import React from 'react'
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { productDetail, Data } from '../data';
import Case from '../assests/images/Case13.png'
import Case1 from '../assests/images/Case12.png'
import Case2 from '../assests/images/Case12.png'
import Case3 from '../assests/images/Case4.png'
import Case4 from '../assests/images/Case5.png'
import ReactImageGallery from 'react-image-gallery';

import './Detail.css'


const ProductDetail = () => {
    const images = [{
        orignal:Case,
        thumbnail:Case
    },
    {
        orignal:Case1,
        thumbnail:Case1
    },
    {
        orignal:Case2,
        thumbnail:Case2
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
                    <ReactImageGallery items={images}/>
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
                    <div ><Button className='add-btn'>Add to Cart</Button></div>
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
    </div>
  )
}

export default ProductDetail