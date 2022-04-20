import React from "react";
import {
    Button,
    Container,
    Nav,
    Navbar,
    OverlayTrigger,
    Popover,
} from "react-bootstrap";

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
                    <Nav.Item className="px-2 justify-content-center text-center align-items-center">
                        <Button
                            href="/"
                            variant="outline-white"
                            style={{
                                outline: "white",
                                color: "black",
                                backgroundColor: "transparent",
                            }}
                        >
                            Home
                        </Button>
                    </Nav.Item>
                    <Nav.Item className="px-2 justify-content-center text-center align-items-center">
                        <Button
                            variant="outline-white"
                            href="/Explore"
                            style={{
                                outline: "white",
                                color: "black",
                                backgroundColor: "transparent",
                            }}
                        >
                            Explore
                        </Button>
                    </Nav.Item>
                    <Nav.Item className="px-2 justify-content-center text-center align-items-center">
                        <OverlayTrigger
                            trigger="click"
                            placement="bottom"
                            overlay={
                                <Popover
                                    style={{ maxWidth: 500 }}
                                    id="popoverPositionedBottom"
                                >
                                    <div className="row" style={{ width: 500 }}>
                                        <div
                                            className="col"
                                            style={{ width: "40%" }}
                                        >
                                            <Popover.Header
                                                className="border-0"
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                                as="h3"
                                            >
                                                Country
                                            </Popover.Header>
                                            <Popover.Body>
                                                <Nav>
                                                    <Nav.Link
                                                        href="/US"
                                                        className="mx-2 px-2"
                                                    >
                                                        United States
                                                    </Nav.Link>
                                                    <Nav.Link
                                                        href="/UK"
                                                        className="mx-2 px-2"
                                                    >
                                                        United Kingdom
                                                    </Nav.Link>
                                                    <Nav.Link
                                                        href="/Canada"
                                                        className="mx-2 px-2"
                                                    >
                                                        Canada
                                                    </Nav.Link>
                                                </Nav>
                                            </Popover.Body>
                                        </div>
                                        <div
                                            className="col"
                                            style={{ width: "60%" }}
                                        >
                                            <Popover.Header
                                                className="border-0"
                                                style={{
                                                    backgroundColor: "white",
                                                }}
                                                as="h3"
                                            >
                                                Courses
                                            </Popover.Header>
                                            <Popover.Body>
                                                <Nav>
                                                    <Nav.Link
                                                        href="/CS"
                                                        className="mx-2 px-2"
                                                    >
                                                        Computer Science
                                                    </Nav.Link>
                                                    <Nav.Link
                                                        href="/MBA"
                                                        className="mx-2 px-2"
                                                    >
                                                        MBA
                                                    </Nav.Link>
                                                    <Nav.Link
                                                        href="/Mech"
                                                        className="mx-2 px-2"
                                                    >
                                                        Mechanical Engineering
                                                    </Nav.Link>
                                                </Nav>
                                            </Popover.Body>
                                        </div>
                                    </div>
                                </Popover>
                            }
                        >
                            <Button
                                variant="outline-white"
                                style={{
                                    outline: "white",
                                    color: "black",
                                    backgroundColor: "transparent",
                                }}
                            >
                                Resources
                            </Button>
                        </OverlayTrigger>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;
