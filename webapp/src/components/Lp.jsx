import React, { useState } from "react";
import styles from "./landing.css";
import { Button } from "react-bootstrap";
const LP = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="wrapper">
            <div className="logo">
                {" "}
                <img
                    src="https://as2.ftcdn.net/v2/jpg/02/34/61/79/1000_F_234617921_p1AGQkGyEl8CSzwuUI74ljn6IZXqMUf2.jpg"
                    alt=""
                />{" "}
            </div>
            <div className="text-center mt-4 name"> UniGenie </div>
            <form className="p-3 mt-3">
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
                >
                    Login
                </Button>
            </form>
            <div className="text-center fs-6">
                {" "}
                <a href="#">Forget password?</a> or <a href="#">Sign up</a>{" "}
            </div>
        </div>
    );
};
export default LP;
