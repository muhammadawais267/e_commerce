import axios from 'axios';
import React, { useState } from 'react'
import {Form, Col, Row, Button, Container} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import './Cart.css'

const Userdetails = () => {


  

  // const onFormSubmit = (e)=>{

  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('photo', file)
  //   const config = {
  //     headers:{
  //       "content-type":'multerpart/form-data'
  //     }
  //   };
  //   const url = 'http://localhost:5000/Api/posts/upload'
  //   axios.post(url, formData, config).then((response)=>{
  //     alert("Image Uploaded")
  //   })
  //   .catch((err)=>{
  //     console.log("error", err)
  //   })
  // }


  const [formData, setFormData] =useState({
    name:'',
    price:'',
    description:'',
  })
  const resetForm = ()=>{
    setFormData({
      name:'',
      price:'',
      description:'',
    })
  }

  const [fileVaue, setFileValue] = useState('')
  const {name, price ,description} =formData;
  const onChange = e=> {
    setFormData({...formData, [e.target.name]: e.target.value })
  };
  
  const handleImageChange = (e) => {
    setFileValue( e.target.files[0])
console.log(e.target.files[0])

  }
  

  const handleSubmit = async (event) => {
    event.preventDefault();


    
    const config = {
      headers: {
        "Content-Type": "application/json",
        
        // "origin":"http://localhst:3000"
      }
    };
    
    const productInfo = JSON.stringify(formData);

    const data = new FormData();

    data.append('name', name)
    data.append('price', price)
    data.append('description', description)
    data.append('file', fileVaue)

    console.log("datta", data)
    const res = await axios.post('http://localhost:5000/api/products/add', data, config);
    console.log("resss", res)
    resetForm();
    if(res.status === 200 ){
      toast('Your Form Successfully Submit!', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
    }
    if(res.status ===! 200){
        toast('You Cannot submit dublicate Username',{
            position:"bottom-center",
            autoClose:5000,
            hideProgressBar:false,
      
        })
    }

    console.log("res===>>>", res)
  };

    // const notify = () => toast.success("Thank You",{
    //     position: "top-center",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,

    // });

    
  return (
    <div>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
            {/* Same as */}
            <ToastContainer />
        <Container>
        <Form onSubmit={handleSubmit} style={{width:'100%'}}>
      <Row className="mb-3">
        <Form.Group style ={{backgroundColor:'#fff'}} as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
           name='name'
           type="text" 
           value={name}
           onChange = {e=> onChange(e)} 
           placeholder="Enter Name" 
           required/>
        </Form.Group>
        <Form.Group style ={{backgroundColor:'#fff'}} as={Col} controlId="formGridEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control 
          type="number"
          name='price'
          value={price}
          onChange ={e=> onChange(e)} 
          placeholder="Enter Price" 
          required/>
        </Form.Group>

        <Form.Group style ={{backgroundColor:'#fff'}} as={Col} controlId="formGridPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control 
          type="text" 
          name ='description'
          value={description}
          onChange = {e=> onChange(e)}
          placeholder="Description" 
          required/>
        </Form.Group>
      <Form.Group style ={{backgroundColor:'#fff'}} as={Col} controlId="formGridPassword">
          <Form.Label>Select Image</Form.Label>
          <Form.Control 
          type="file" 
          name ='photo'
          // value={description}
        onChange={handleImageChange}
          placeholder="Description" 
          required/>
      
        </Form.Group>
        
      </Row>

      

     

      

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button style= {{padding:'10px 30px', backgroundColor:'#ff9858', color:'#fff', border:'none'}} variant="primary" type="submit">
        Add Product
      </Button>
    </Form>
    </Container>
    </div>
  )
}

export default Userdetails