import React, { useState, useEffect } from "react";
// import { Button } from "react-bootstrap";
import axios from "axios";
import bcrypt from "bcryptjs/dist/bcrypt";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccessful } from "./auth";
import { updateUserData } from "./userData";
import {
    Button,
    Container,
    Modal,
    Row,
    Form,
    FloatingLabel,
    Col,
} from "react-bootstrap";
function Login() {
    let showSpinner = false;

    // // const [modal, setModal] = useState(false);
    // // const [token, setToken] = useState('');
    // // const userToken = useSelector(
    // //     (state: any) => state.isAuthenticated.usertoken
    // // );

    // const dispatch = useDispatch();

    // const [username, setUsername] = useState();
    // const [password, setPassword] = useState();

    const defaultData = {
        username: "",
        password: "",
    };

    // // const mockUserData = {
    // //     //   name: "R",
    // //     email: "R",
    // //     username: "R",
    // // };

    const [userData, setUserData] = useState(defaultData);

    // const setData = (username, password) => {
    //     setUserData({ ...userData, email: username });
    //     setUserData({ ...userData, password: password });
    // };

    // // Toggle for Modal
    // // const toggle = () => setModal(!modal);

    // const authenticateUser = (response) => {
        // dispatch(loginSuccessful(response));
    // };

    const updateEmail = (email:string) => {
        setUserData({ ...userData, username: email });
    };

    const updatePassword = (password:string) => {
        setUserData({ ...userData, password });
    };

    // const updateStateWithUserData = (userData) => {
    //     dispatch(updateUserData(userData));
    // };

    const login = () => {
        showSpinner = true;
        // setData();
        console.log(userData);
        axios
            .post(`http://localhost:8080/login`, userData)
            .then((res) => {
                // debugger;
                console.log(res.data);
                // authenticateUser(res.data);
                axios
                    .get(
                        `http://localhost:8080/studentHomePage/${userData.username}`,
                        // `http://localhost:8080/blogs`,
                        {
                            headers: { token: res.data.token },
                        }
                    )
                    .then((res) => {
                        if (res.data.ID != 0) {
                            const userResponse = {
                                //   name: res.data.Name,
                                email: res.data.username,
                                password: res.data.Password,
                            };
                            // updateStateWithUserData(userResponse);
                        } else {
                            // TO-DO: this needs to be handled in catch
                            alert("Auth failed");
                        }
                    })
                    .catch(() => {});
            })
            .catch(() => {
                alert("Auth failed, please check your user name and password");
            })
            .finally(() => {
                //setModal(false);
                showSpinner = false;
            });
    };

    useEffect((e) => {
        //e.preventDefault();
        login();
        //console.log("getData: Hello");
    }, []);

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
        <div className="wrapper">
            <div className="logo">
                <img
                    src="https://as2.ftcdn.net/v2/jpg/02/34/61/79/1000_F_234617921_p1AGQkGyEl8CSzwuUI74ljn6IZXqMUf2.jpg"
                    alt=""
                />
            </div>
            <div className="text-center mt-4 name"> UniGenie </div>
            <form className="p-3 mt-3">
                <div className="form-field d-flex align-items-center">
                    <span className="far fa-user"></span>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username"
                        // onChange={(e) => {
                        //     updateEmail(e.target.value);
                        // }}
                        // onChange={(e) => {
                        //     setUsername(e.target.value);
                        // }}
                    />
                </div>

                <div className="form-field d-flex align-items-center">
                    <span className="fas fa-key"></span>
                    <input
                        type="password"
                        name="password"
                        id="pwd"
                        placeholder="Password"
                        // onChange={(e) => {
                        //     updatePassword(e.target.value);
                        // }}
                        // onChange={(e) => {
                        //     setPassword(e.target.value);
                        // }}
                    />
                </div>
                {showSpinner ? (
                    <button className="btn btn-primary" type="button" disabled>
                        <span
                            className="spinner-grow spinner-grow-sm"
                            role="status"
                            aria-hidden="true"
                        ></span>
                        &nbsp;Logging...
                    </button>
                ) : (
                    <Button
                        type="submit"
                        variant="primary"
                        className="btn mt-3"
                        //href="/StudentHomePage"
                        onClick={login}
                    >
                        <h6>Login</h6>
                    </Button>
                )}
                <Button
                    type="submit"
                    variant="primary"
                    className="btn mt-3"
                    // href="#"
                    onClick={handleShow}
                >
                    <h6>Register</h6>
                </Button>
            </form>
            <div className="text-center fs-6">
                <a href="#">Forget password?</a>
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
}
export default Login;
