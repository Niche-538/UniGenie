import React from "react";
import "./landing.css";
import {
    Button,
    Container,
    Nav,
    Navbar,
    OverlayTrigger,
    Popover,
} from "react-bootstrap";

const Navigation_nonMain = () => {
    return (
        <Navbar style={{ backgroundColor: "white" }} expand={false}>
            <Container fluid>
                <Navbar.Brand
                    style={{
                        fontSize: 40,
                        color: "#4a54f1",
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
                            href="/StudentHomePage"
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
                            href="/Dashboard"
                            variant="outline-white"
                            style={{
                                outline: "white",
                                color: "black",
                                backgroundColor: "transparent",
                            }}
                        >
                            Dashboard
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

                <Nav className="px-3 ms-auto me-5 my-3 flex-row justify-content-end text-center align-items-center">
                    <Nav.Item className="mx-2 px-2 justify-content-center text-center align-items-center">
                        <OverlayTrigger
                            trigger="click"
                            placement="bottom"
                            overlay={
                                <Popover id="popoverPositionedBottom">
                                    <Popover.Header as="h3">
                                        Signed in as: John Doe
                                    </Popover.Header>
                                    <Popover.Body>
                                        <Nav
                                            variant="pills"
                                            className="flex-column"
                                        >
                                            <Nav.Link
                                                href="/ProfileSettingsPage"
                                                className="rounded border mb-3 mx-2 px-2 text-start"
                                            >
                                                My Profile
                                            </Nav.Link>
                                            <Nav.Link
                                                href="/ProfilePage"
                                                className="rounded border mb-3 mx-2 px-2 text-start"
                                            >
                                                My Preferences
                                            </Nav.Link>
                                            <Nav.Link
                                                href="/"
                                                className="rounded border mx-2 px-2 text-start"
                                            >
                                                Log Out
                                            </Nav.Link>
                                        </Nav>
                                    </Popover.Body>
                                </Popover>
                            }
                        >
                            <Button className="profile-person-bg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-person"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                </svg>{" "}
                            </Button>
                        </OverlayTrigger>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation_nonMain;
