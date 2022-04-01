import React, { useState } from "react";
import styles from "./landing.css";
import {Button,Col,
    Container,
    FloatingLabel,
    Form,
    Modal,
    Row,} from "react-bootstrap";
const LP = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   return(
       <Container>
    <div className="wrapper">
    <div className="logo"> <img src="https://as2.ftcdn.net/v2/jpg/02/34/61/79/1000_F_234617921_p1AGQkGyEl8CSzwuUI74ljn6IZXqMUf2.jpg" alt=""/> </div>
    <div className="text-center mt-4 name"> UniGenie </div>
    <form className="p-3 mt-3">
        <div className="form-field d-flex align-items-center"> 
            <span className="far fa-user"></span> 
            <input type="text" name="userName" id="userName" placeholder="Username"/> 
        </div>

        <div className="form-field d-flex align-items-center"> 
            <span className="fas fa-key"></span> 
            <input type="password" name="password" id="pwd" placeholder="Password"/> 
        </div> 
        <Button type="submit" variant="primary" className="btn mt-3" href="/StudentHomePage">
           <h6>Login</h6>
        </Button>
        <Button type="submit" variant="primary" className="btn mt-3" href="#" onClick={handleShow}>
        <h6>Register</h6>
        </Button>               
    </form>
    <div className="text-center fs-6"> <a href="#">Forget password?</a> </div>     
</div>
<Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
                rounded-4
                fullscreen="fullscreen-below-md"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Sign up. Your dreams lie beyond.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="my-3 bg-body rounded">
                        <Row className="mb-3 mx-2 g-3">
                            <Col>
                                <FloatingLabel
                                    controlId="floatingInput2"
                                    label="First name"
                                >
                                    <Form.Control
                                    style={{borderRadius:"25px"}}
                                        type="text"
                                        placeholder="First name"
                                    />
                                </FloatingLabel>
                            </Col>
                            <Col>
                                <FloatingLabel
                                    controlId="floatingInput3"
                                    label="Last name"
                                >
                                    <Form.Control
                                    style={{borderRadius:"25px"}}
                                        type="text"
                                        placeholder="Last name"
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Form.Group>
                            <FloatingLabel
                                controlId="floatingInput4"
                                label="Email address"
                                className="mb-3 mx-3"
                            >
                                <Form.Control
                                style={{borderRadius:"25px"}}
                                    type="email"
                                    placeholder="name@example.com"
                                />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingPassword2"
                                label="Password"
                                className="mb-3 mx-3"
                            >
                                <Form.Control
                                style={{borderRadius:"25px"}}
                                    type="password"
                                    placeholder="Password"
                                />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingPassword3"
                                label="Re-enter password"
                                className="mb-3 mx-3"
                            >
                                <Form.Control
                                style={{borderRadius:"25px"}}
                                    type="password"
                                    placeholder="Password"
                                />
                            </FloatingLabel>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="align-items-center text-center justify-content-center">
                    <Button
                        style={{ width: "8rem",borderRadius:"25px" }}
                        variant="secondary"
                        onClick={handleClose}
                    >
                        Close
                    </Button>
                    <Button
                        style={{ width: "10rem",background:"#6C63FF", borderRadius:"25px" }}
                        
                        type="submit"
                        variant="success"
                        href="/ProfilePage"
                        // color="#6C63FF"
                    >
                        Sign Up
                    </Button>
                </Modal.Footer>
            </Modal>
</Container>
   );

};
export default LP;