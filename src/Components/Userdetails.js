import React from 'react'
import {Form, Col, Row, Button, Container} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';

const Userdetails = () => {
    const notify = () => toast.success("Thank You",{
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,

    });

    
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
        <Form style={{width:'100%'}}>
      <Row className="mb-3">
        <Form.Group style ={{backgroundColor:'#fff'}} as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group style ={{backgroundColor:'#fff'}} as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control placeholder="Enter Number" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group style ={{backgroundColor:'#fff'}} as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group style ={{backgroundColor:'#fff'}} as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group style ={{backgroundColor:'#fff'}} as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={notify}>
        Submit
      </Button>
    </Form>
    </Container>
    </div>
  )
}

export default Userdetails