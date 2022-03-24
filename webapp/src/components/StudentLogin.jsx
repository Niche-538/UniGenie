import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

const StudentLogin = () => {
      return(
        <Form>
        <Form.Group
            className="row g-3 mb-3 my-auto align-items-center justify-content-center"
            controlId="formBasicEmail"
        >
            <Form.Group className="col-xl-1">
                <Form.Label>Email Address</Form.Label>
            </Form.Group>
            <Form.Group className="col-xl-3">
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    Please enter the same email registered with us.
                </Form.Text>
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
                    type="password"
                    placeholder="Enter password"
                />
            </Form.Group>
        </Form.Group>

        <Form.Group
            className="row mb-3 align-items-center justify-content-center"
            controlId="formBasicCheckbox"
        >
            <Form.Group className="col-xl-1">
                <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
        </Form.Group>

        <Form.Group className="text-center">
            <Button
                variant="primary"
                type="submit"
                href="/UniversityApplications"
            >
                Login
            </Button>{" "}
            <Button
                variant="primary"
                type="submit"
                href="/StudentSignup"
            >
                Signup
            </Button>{" "}
        </Form.Group>
    </Form>
      ); 
};
export default StudentLogin;