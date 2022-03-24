import React, { Component, useState } from "react";
import { Button, Form } from "react-bootstrap";


const AdminSignup = () => {
    const[first_name,setFName] = useState();
    const[last_name,setLName] = useState();
    const[email,setEmail] = useState();
    const[password,setPass] = useState();
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const registrationInfo = {first_name, last_name, email, password};
    
        fetch('http://localhost:8080/signup', {
          method:'POST',
          mode: 'no-cors',
          headers: {'Content-Type': 'application/json',
          'cache-control': 'no-cache',
          'Access-Control-Request-Headers':'*',
          'Access-Control-Request-Method':'*' },
          body: JSON.stringify(registrationInfo)
        }).then(() => {
          console.log(registrationInfo);
        })
      }


    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group
            className="row g-3 mb-3 my-auto align-items-center justify-content-center"
            controlId="formFirstName"
        >
            <Form.Group className="col-xl-1">
                <Form.Label>First Name</Form.Label>
            </Form.Group>
            <Form.Group className="col-xl-3">
                <Form.Control
                    onChange={(e)=> setFName(e.target.value)} 
                    type="first_name"
                    placeholder="Enter first name"
                />
            </Form.Group>
        </Form.Group>

        <Form.Group
            className="row g-3 mb-3 align-items-center justify-content-center"
            controlId="formLastName"
        >
            <Form.Group className="col-xl-1">
                <Form.Label>Last Name</Form.Label>
            </Form.Group>
            <Form.Group className="col-xl-3">
                <Form.Control
                    onChange={(e)=> setLName(e.target.value)}
                    type="last_name"
                    placeholder="Enter last name"
                />
            </Form.Group>
        </Form.Group>

        <Form.Group
            className="row g-3 mb-3 align-items-center justify-content-center"
            controlId="formBasicEmail"
        >
            <Form.Group className="col-xl-1">
                <Form.Label>Email Address</Form.Label>
            </Form.Group>
            <Form.Group className="col-xl-3">
                <Form.Control
                    onChange={(e)=> setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter email address"
                />
            </Form.Group>
        </Form.Group>

        <Form.Group
            className="row g-3 mb-3 align-items-center justify-content-center"
            controlId="formBasicPassword"
        >
            <Form.Group className="col-xl-1">
                <Form.Label>Password</Form.Label>
            </Form.Group>
            <Form.Group className="col-xl-3">
                <Form.Control
                    onChange={(e)=> setPass(e.target.value)}
                    type="password"
                    placeholder="Enter password"
                />
            </Form.Group>
        </Form.Group>

        <Form.Group className="text-center">
            <Button variant="primary" type="submit" href={'/AdminFunc'}>
                Signup
            </Button>
        </Form.Group>
    </Form>
    );
   };
export default AdminSignup;
