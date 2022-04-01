import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
    return (
        <Navbar bg="light" expand={false}>
            <Container fluid>
                <Navbar.Brand
                    style={{
                        fontSize: 40,
                        color: "#6C63FF",
                        // fontFamily: "roboto",
                    }}
                    className="mx-3"
                    href="/"
                >
                  UniGenie
                </Navbar.Brand>

                <Nav className="px-3 ms-3 me-auto my-3 flex-row justify-content-center text-center align-items-center">
                    <Nav.Item className="mx-2 px-2 justify-content-center text-center align-items-center">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mx-2 px-2 justify-content-center text-center align-items-center">
                        <Nav.Link href="#action2">Explore</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mx-2 px-2 justify-content-center text-center align-items-center">
                        <Nav.Link href="#action3">Resources</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;
