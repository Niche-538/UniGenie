import React from "react";
import styles from "./landing.css";
import {
    Button,
    Container,
    Nav,
    Navbar,
    Offcanvas,
    OverlayTrigger,
    Popover,
} from "react-bootstrap";

const Navigation_nonMain = () => {
    return (
        <Navbar bg="light" expand={false}>
            <Container fluid>
                <Navbar.Toggle
                    className="me-3 ms-5"
                    aria-controls="offcanvasNavbar"
                />

                <Navbar.Offcanvas
                    // className="justify-content-start"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="start"
                >
                    <Offcanvas.Header closeButton className="mt-3 mx-3">
                        <Offcanvas.Title id="offcanvasNavbarLabel">
                            Dashboard
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 px-3 mx-3 mb-3">
                            <Nav.Link href="/UniversityApplications">
                                My Applications
                            </Nav.Link>
                            <Nav.Link href="#action2">My Documents</Nav.Link>
                            <Nav.Link href="#action3">My Tasks</Nav.Link>
                            <Nav.Link href="/">Log Out</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>

                <Navbar.Brand
                    style={{
                        fontSize: 40,
                        color: "#6C63FF",
                        fontFamily: "roboto",
                    }}
                    className="mx-3"
                    href="/StudentHomePage"
                >
                    UniGenie
                </Navbar.Brand>

                <Nav className="px-3 ms-3 me-auto my-3 flex-row justify-content-center text-center align-items-center">
                    <Nav.Item className="mx-2 px-2 justify-content-center text-center align-items-center">
                        <Nav.Link href="/StudentHomePage">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mx-2 px-2 justify-content-center text-center align-items-center">
                        <Nav.Link href="#action2">Explore</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mx-2 px-2 justify-content-center text-center align-items-center">
                        <Nav.Link href="#action3">Resources</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Nav className="px-3 ms-auto me-5 my-3 flex-row justify-content-end text-center align-items-center">
                    <Nav.Item className="mx-2 px-2 justify-content-center text-center align-items-center">
                        <Button className="notification-bg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-bell"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"></path>
                            </svg>
                        </Button>
                    </Nav.Item>
                    <Nav.Item className="mx-2 px-2 justify-content-center text-center align-items-center">
                        <Button className="chat-bg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-chat-dots"
                                viewBox="0 0 16 16"
                            >
                                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                            </svg>{" "}
                        </Button>
                    </Nav.Item>
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
