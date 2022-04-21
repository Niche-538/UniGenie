import React, { useState } from "react";
import axios from "axios";
import bcrypt from "bcryptjs";
import {
    Button,
    Container,
    Modal,
    Row,
    Form,
    FloatingLabel,
    Col,
} from "react-bootstrap";
import { Field, Formik } from "formik";
// import authHeader from "./AuthHeader";
// import Login from "./Login";
// const salt = bcrypt.genSaltSync(10);

const LP = () => {
    //const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [first_name, setFName] = useState();
    const [last_name, setLName] = useState();
    const [email, setEmail] = useState();
    const [hpassword, setPass] = useState();
    const [confirm_password, setCPass] = useState();
    //const hashedPassword=bcrypt.hashSync(password,'$2a$10$CwTycUXWue0Thq9StjUM0u');
    const handleSubmit = (e) => {
        e.preventDefault();
        const password = bcrypt.hashSync(
            hpassword,
            "$2a$10$CwTycUXWue0Thq9StjUM0u"
        );
        const registrationInfo = { first_name, last_name, email, password };
        if (confirm_password !== hpassword) {
            alert("Passwords don't match");
            return false;
        }

        alert("User registered successfully");

        fetch("http://localhost:8080/signup", {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
                "cache-control": "no-cache",
                "Access-Control-Request-Headers": "*",
                "Access-Control-Request-Method": "*",
            },
            body: JSON.stringify(registrationInfo),
        }).then(() => {
            console.log(registrationInfo);
        });

        handleClose();
    };

    function validateUsername(value) {
        let error;

        if (!value) {
            error = "Required";
        } else if (value === "admin") {
            error = "Ha ha! Nice try!";
        }

        return error;
    }

    function validatePassword(value) {
        let error;

        if (!value) {
            error = "Required";
        }

        return error;
    }

    // const API_URL = "http://localhost:8080/";

    // const login = (email, password) => {
    //     return axios
    //         .post(API_URL + "login", { email, password })
    //         .then((response) => {
    //             if (response.data.accessToken) {
    //                 localStorage.setItem("user", JSON.stringify(response.data));
    //             }
    //             console.log("Hey");
    //             console.log("Hello" + response);
    //             console.log("Hi" + authHeader());
    //             return response.data;
    //         });
    // };

    return (
        <Container>
            {/* <Login /> */}
            <div className="wrapper">
                <div className="logo">
                    <img
                        src="https://as2.ftcdn.net/v2/jpg/02/34/61/79/1000_F_234617921_p1AGQkGyEl8CSzwuUI74ljn6IZXqMUf2.jpg"
                        alt=""
                    />
                </div>
                <div className="text-center my-4 name"> UniGenie </div>
                <div className="p-3 mt-3">
                    <Formik
                        initialValues={{
                            userName: "",
                        }}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        {({ errors, touched, isValidating }) => (
                            <Form>
                                <Field
                                    name="userName"
                                    type="text"
                                    id="userName"
                                    placeholder="Username"
                                    validate={validateUsername}
                                    className="align-items-center form-field far"
                                    style={{
                                        height: "40px",
                                        width: "258px",
                                    }}
                                />
                                {errors.userName && touched.userName && (
                                    <div>{errors.userName}</div>
                                )}
                                <Field
                                    name="password"
                                    type="password"
                                    id="pwd"
                                    placeholder="Password"
                                    validate={validatePassword}
                                    className="align-items-center form-field fas"
                                    style={{
                                        height: "40px",
                                        width: "258px",
                                    }}
                                />
                                {errors.password && touched.password && (
                                    <div>{errors.password}</div>
                                )}
                            </Form>
                        )}
                    </Formik>
                </div>
                <Button
                    type="submit"
                    variant="primary"
                    className="btn mt-3"
                    href="/StudentHomePage"
                    // onClick={login}
                >
                    <h6>Login</h6>
                </Button>
                <Button
                    type="submit"
                    variant="primary"
                    className="btn mt-3"
                    href="#"
                    onClick={handleShow}
                >
                    <h6>Register</h6>
                </Button>
                {/* <form className="p-3 mt-3">
                    <div className="form-field d-flex align-items-center">
                        <span className="far fa-user"></span>
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            placeholder="Username"
                        />
                    </div>

                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-key"></span>
                        <input
                            type="password"
                            name="password"
                            id="pwd"
                            placeholder="Password"
                        />
                    </div>
                    <Button
                        type="submit"
                        variant="primary"
                        className="btn mt-3"
                        href="/StudentHomePage"
                        // onClick={login}
                    >
                        <h6>Login</h6>
                    </Button>
                    <Button
                        type="submit"
                        variant="primary"
                        className="btn mt-3"
                        href="#"
                        onClick={handleShow}
                    >
                        <h6>Register</h6>
                    </Button>
                </form> */}
                <div className="text-center fs-6">
                    {" "}
                    <a href="#">Forget password?</a>{" "}
                </div>
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
                    <Form
                        className="my-3 bg-body rounded"
                        onSubmit={handleSubmit}
                    >
                        <Row className="mb-3 mx-2 g-3">
                            <Col>
                                <FloatingLabel
                                    controlId="floatingInput2"
                                    label="First name"
                                >
                                    <Form.Control
                                        name="first_name"
                                        style={{ borderRadius: "25px" }}
                                        type="text"
                                        placeholder="First name"
                                        required
                                        onChange={(e) =>
                                            setFName(e.target.value)
                                        }
                                    />
                                </FloatingLabel>
                            </Col>
                            <Col>
                                <FloatingLabel
                                    controlId="floatingInput3"
                                    label="Last name"
                                >
                                    <Form.Control
                                        name="last_name"
                                        style={{ borderRadius: "25px" }}
                                        type="text"
                                        placeholder="Last name"
                                        required
                                        onChange={(e) =>
                                            setLName(e.target.value)
                                        }
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
                                    style={{ borderRadius: "25px" }}
                                    type="text"
                                    name="email"
                                    placeholder="name@example.com"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingPassword2"
                                label="Password"
                                className="mb-3 mx-3"
                            >
                                <Form.Control
                                    name="hpassword"
                                    style={{ borderRadius: "25px" }}
                                    type="password"
                                    placeholder="Password"
                                    required
                                    onChange={(e) => setPass(e.target.value)}
                                />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingPassword3"
                                label="Re-enter password"
                                className="mb-3 mx-3"
                            >
                                <Form.Control
                                    name="confirm_password"
                                    style={{ borderRadius: "25px" }}
                                    type="password"
                                    placeholder="Password"
                                    required
                                    onChange={(e) => setCPass(e.target.value)}
                                />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="text-center">
                            <Button
                                style={{ width: "8rem", borderRadius: "25px" }}
                                variant="secondary"
                                onClick={handleClose}
                            >
                                Close
                            </Button>
                            <Button
                                style={{
                                    width: "8rem",
                                    background: "#6C63FF",
                                    borderRadius: "25px",
                                }}
                                type="submit"
                                variant="success"
                                href="/ProfileSettingsPage"
                                onClick={handleSubmit}
                                // color="#6C63FF"
                            >
                                Sign Up
                            </Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
    );
};
export default LP;
