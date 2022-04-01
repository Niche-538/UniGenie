import React from "react";
import styles from "./landing.css";
import { Button, Container, Form } from "react-bootstrap";

const ProfileSettingsPage = () => {
    return (
        <Container className="rounded border">
            <div className="row g-3 my-3 mx-auto align-items-top">
                <div className="col-xl-12 justify-content-center">
                    <h3 className="text-center">Personal Details</h3>
                    <Form>
                        <div className="row g-3 my-3 mx-5 justify-content-center">
                            <Form.Group
                                className="col-xl-2"
                                controlId="formFirstName"
                            >
                                <Form.Label>First Name</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-xl-3">
                                <Form.Control type="text" placeholder="John" />
                            </Form.Group>

                            <Form.Group
                                className="col-xl-2"
                                controlId="formLastName"
                            >
                                <Form.Label>Last Name</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-xl-3">
                                <Form.Control type="text" placeholder="Doe" />
                            </Form.Group>
                        </div>
                        <div className="row g-3 mb-3 mx-5 justify-content-center">
                            <Form.Group className="col-xl-2">
                                <Form.Label>Email Address</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-xl-3">
                                <Form.Control
                                    type="email"
                                    placeholder="john.doe@gmail.com"
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group className="col-xl-2">
                                <Form.Label>Phone Number</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-xl-3">
                                <Form.Control
                                    type="number"
                                    placeholder="(123) 456-7890"
                                    // min="2002110000"
                                    // max="9199999999"
                                />
                            </Form.Group>
                        </div>
                        <Form.Group className="text-center justify-content-center">
                            <Button
                                className="update-profile-btn"
                                type="submit"
                            >
                                Update Profile
                            </Button>
                        </Form.Group>
                    </Form>

                    <div className="row my-4 mx-3 border-bottom border-1 text-center justify-content-center align-items-center"></div>

                    <h3 className="text-center mt-3">Change Your Password</h3>
                    <Form>
                        <div className="row g-3 my-3 mx-5 justify-content-center">
                            <Form.Group
                                className="col-xl-2"
                                controlId="formOldPassword"
                            >
                                <Form.Label>Old Password</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-xl-3">
                                <Form.Control
                                    type="password"
                                    placeholder="Old Password"
                                />
                            </Form.Group>
                        </div>
                        <div className="row g-3 mb-3 mx-5 justify-content-center">
                            <Form.Group
                                className="col-xl-2"
                                controlId="formNewPassword"
                            >
                                <Form.Label>New Password</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-xl-3">
                                <Form.Control
                                    type="password"
                                    placeholder="New Password"
                                />
                            </Form.Group>
                        </div>
                        <div className="row g-3 mb-3 mx-5 justify-content-center">
                            <Form.Group
                                className="col-xl-2"
                                controlId="formReenterPassword"
                            >
                                <Form.Label>Re-enter Password</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-xl-3">
                                <Form.Control
                                    type="password"
                                    placeholder="Re-enter Passsword"
                                />
                            </Form.Group>
                        </div>
                        <Form.Group className="text-center justify-content-center">
                            <Button
                                className="update-password-btn"
                                type="submit"
                            >
                                Update Password
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </Container>
    );
};

export default ProfileSettingsPage;
