import React, { useState } from "react";
import {
    Button,
    Col,
    Container,
    FloatingLabel,
    Form,
    Modal,
    Row,
} from "react-bootstrap";

const LandingPage = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container className="rounded">
            <div className="row g-3 mb-3 mx-auto my-auto align-items-center justify-content-center">
                <Form className="my-5 bg-body rounded">
                    <Form.Group>
                        <FloatingLabel
                            controlId="floatingInput1"
                            label="Email address"
                            className="my-2 mx-3"
                        >
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingPassword1"
                            label="Password"
                            className="my-2 mx-3"
                        >
                            <Form.Control
                                type="password"
                                placeholder="Password"
                            />
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group className="text-center d-grid">
                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            className="mb-3 mx-3 rounded-4"
                            href="/StudentHomePage"
                        >
                            Log In
                        </Button>
                    </Form.Group>

                    {/* <div className="align-items-center my-4 mx-3 border-bottom border-1 text-center"></div> */}

                    <Form.Group className="text-center d-grid">
                        <Button
                            variant="success"
                            size="lg"
                            className="mb-3 mx-3 rounded-4"
                            onClick={handleShow}
                        >
                            Create new account
                        </Button>
                    </Form.Group>
                </Form>
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
                                    type="password"
                                    placeholder="Password"
                                />
                            </FloatingLabel>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="align-items-center text-center justify-content-center">
                    <Button
                        style={{ width: "8rem" }}
                        variant="secondary"
                        onClick={handleClose}
                    >
                        Close
                    </Button>
                    <Button
                        style={{ width: "10rem" }}
                        type="submit"
                        variant="success"
                        href="/ProfilePage"
                    >
                        Sign Up
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default LandingPage;
