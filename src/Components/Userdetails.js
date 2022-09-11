import axios from 'axios';
import React, { useState } from 'react'
import {Form, Col, Row, Button, Container} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import './Cart.css'

const Userdetails = () => {

  const [formData, setFormData] =useState({
    name:'',
    email:'',
    password:'',
    address:'',
    contact:'',
    state:'',
    city:'',
    zip:''
  })
  const resetForm = ()=>{
    setFormData({
      name:'',
      email:'',
      password:'',
      address:'',
      contact:'',
      state:'',
      city:'',
      zip:''
    })
  }
  const {name, email, password, address, contact, state, city, zip} =formData;
  const onChange = e=> {
    setFormData({...formData, [e.target.name]: e.target.value })
  };
  
  // const onSubmit = async e => {
  //   e.preventDefault();
  //   // const newUser = {
  //   //   name,
  //   //   email,
  //   //   password,
  //   //   city,
  //   //   state,
  //   //   zip,
  //   //   address
  //   // }
  //   try{
  //     const config = {
  //       headers:{
  //         'Content-Type' :'application/json'
  //       }
  //     }
  //     const body = JSON.stringify(formData)
  //     const res = await axios.post('/api/users' , body, config)
  //     console.log(res.data);

  //   }
  //   catch(err){
  //     console.error(err.message)

  //   }

  // }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const contactInfo = JSON.stringify(formData);
    const res = await axios.post('/api/contact', contactInfo, config);
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
          <Form.Label>Email</Form.Label>
          <Form.Control 
          type="email"
          name='email'
          value={email}
          onChange ={e=> onChange(e)} 
          placeholder="Enter email" 
          required/>
        </Form.Group>

        <Form.Group style ={{backgroundColor:'#fff'}} as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
          type="password" 
          name ='password'
          value={password}
          onChange = {e=> onChange(e)}
          placeholder="Password" 
          required/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control
        type = 'text'
        name = 'address'
        value={address}
        onChange = {e=> onChange(e)} 
        placeholder="Enter Address" 
        required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control
        type='number'
        name = 'contact'
        value={contact}
         onChange = {e=> onChange(e)}
         placeholder ='Enter Contact Number'
         required/>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group style ={{backgroundColor:'#fff'}} as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control 
          type='text'
          name ='city'
          value={city}
          onChange = {e=> onChange(e)}
          placeholder = "Enter City"
          required
          />
        </Form.Group>

        <Form.Group style ={{backgroundColor:'#fff'}} as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control
          type='text'
          name='state'
          placeholder='Enter Sate'
          value={state}
           onChange = {e=> onChange(e)}
           required
          />

          
          {/* <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select> */}
        </Form.Group>

        <Form.Group style ={{backgroundColor:'#fff'}} as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control 
          type='number'
          name = 'zip'
          value={zip}
           onChange = {e=> onChange(e)}
           required/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button style= {{padding:'10px 30px', backgroundColor:'#ff9858', color:'#fff', border:'none'}} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
    </div>
  )
}

export default Userdetails