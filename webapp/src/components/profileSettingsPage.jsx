import React from "react";
import "./landing.css";
import { Button, Container, Form } from "react-bootstrap";
import { ErrorMessage, Field, Formik } from "formik";

const ProfileSettingsPage = () => {
    function validateFirstName(value) {
        let error;

        if (!value) {
            error = "Required";
        } else if (!/^([a-zA-Z.']+)$/i.test(value)) {
            error = "You can only have characters in your first name";
        }

        return error;
    }

    function validateLastName(value) {
        let error;

        if (!value) {
            error = "Required";
        } else if (!/^([a-zA-Z.']+)$/i.test(value)) {
            error = "You can only have characters in your last name";
        }

        return error;
    }

    function validateEmailAddress(value) {
        let error;

        if (!value) {
            error = "Required";
        } else if (!/^([a-zA-Z.']+)$/i.test(value)) {
            error = "You can only have characters in your first name";
        }

        return error;
    }

    function validatePhoneNumber(value) {
        let error;

        if (!value) {
            error = "Required";
        } else if (!/^([0-9)(/-]+)$/i.test(value)) {
            error = "You can only have numbers in your phone number";
        }

        return error;
    }

    function validateOldPassword(value) {
        let error;

        if (!value) {
            error = "Required";
        }

        return error;
    }

    function validateNewPassword(value) {
        let error;

        if (!value) {
            error = "Required";
        }

        return error;
    }

    return (
        <Container
            className="my-3 rounded border"
            style={{ backgroundColor: "white" }}
        >
            <div className="row g-3 my-3 mx-auto align-items-top">
                <div className="col-12 justify-content-center">
                    <h3 className="text-center">
                        <strong>Personal Details</strong>
                    </h3>
                    <Formik
                        initialValues={{
                            firstName: "Kunal",
                            lastName: "Dudhe",
                            emailAddress: "kdudhe@gmail.com",
                            phoneNumber: "",
                        }}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        {({ errors, touched, isValidating }) => (
                            <Form>
                                <div className="row g-3 my-3 mx-5 justify-content-center">
                                    <Form.Group className="col-2 pt-3 text-center">
                                        <Form.Label>First Name</Form.Label>
                                    </Form.Group>
                                    <Field
                                        name="firstName"
                                        type="text"
                                        id="firstName"
                                        placeholder="Kunal"
                                        validate={validateFirstName}
                                        className="align-items-center profile-settings-page-form-field col-3 me-2"
                                        style={{
                                            height: "50px",
                                            // width: "258px",
                                        }}
                                    />

                                    <Form.Group className="col-2 pt-3 text-center">
                                        <Form.Label>Last Name</Form.Label>
                                    </Form.Group>
                                    <Field
                                        name="lastName"
                                        type="text"
                                        id="lastName"
                                        placeholder="Dudhe"
                                        validate={validateLastName}
                                        className="align-items-center profile-settings-page-form-field col-3 me-2"
                                        style={{
                                            height: "50px",
                                            // width: "258px",
                                        }}
                                    />
                                </div>
                                <div className="row">
                                    {errors.firstName && touched.firstName && (
                                        <div className="errMsg offset-4 col-3">
                                            {errors.firstName}
                                        </div>
                                    )}
                                    {errors.lastName && touched.lastName && (
                                        <div className="errMsg offset-2 col-3">
                                            {errors.lastName}
                                        </div>
                                    )}
                                </div>

                                <div className="row g-3 my-3 mx-5 justify-content-center">
                                    <Form.Group className="col-2 pt-3 text-center">
                                        <Form.Label>Email Address</Form.Label>
                                    </Form.Group>
                                    <Field
                                        name="emailAddress"
                                        type="email"
                                        id="emailAddress"
                                        placeholder="kunaldudhe@gmail.com"
                                        validate={validateEmailAddress}
                                        className="align-items-center profile-settings-page-form-field col-3 me-2"
                                        style={{
                                            height: "50px",
                                            // width: "258px",
                                        }}
                                    />

                                    <Form.Group className="col-2 pt-3 text-center">
                                        <Form.Label>Phone Number</Form.Label>
                                    </Form.Group>
                                    <Field
                                        name="phoneNumber"
                                        type="number"
                                        id="phoneNumber"
                                        placeholder="(123) 456-7890"
                                        validate={validatePhoneNumber}
                                        className="align-items-center profile-settings-page-form-field col-3 me-2"
                                        style={{
                                            height: "50px",
                                            // width: "258px",
                                        }}
                                    />
                                </div>
                                <div className="row">
                                    {errors.emailAddress &&
                                        touched.emailAddress && (
                                            <div className="errMsg offset-4 col-3">
                                                {errors.emailAddress}
                                            </div>
                                        )}
                                    {errors.phoneNumber &&
                                        touched.phoneNumber && (
                                            <div className="errMsg offset-2 col-3">
                                                {errors.phoneNumber}
                                            </div>
                                        )}
                                </div>
                            </Form>
                        )}
                    </Formik>
                    <div className="row my-3 justify-content-center">
                        <Form.Group className="col-3 text-center">
                            <Button
                                className="update-profile-btn"
                                type="submit"
                            >
                                Update Profile
                            </Button>
                        </Form.Group>
                    </div>
                    {/* <Form>
                        <div className="row g-3 my-3 mx-5 justify-content-center">
                            <Form.Group
                                className="col-xl-2 pt-3 text-center"
                                controlId="formFirstName"
                            >
                                <Form.Label>First Name</Form.Label>
                            </Form.Group>
                            <Form.Group className="profile-settings-page-form-field col-xl-3 me-2">
                                <Form.Control type="text" placeholder="John" />
                            </Form.Group>

                            <Form.Group
                                className="col-xl-2 pt-3 text-center"
                                controlId="formLastName"
                            >
                                <Form.Label>Last Name</Form.Label>
                            </Form.Group>
                            <Form.Group className="profile-settings-page-form-field col-xl-3 me-2">
                                <Form.Control type="text" placeholder="Doe" />
                            </Form.Group>
                        </div>
                        <div className="row g-3 mb-3 mx-5 justify-content-center">
                            <Form.Group className="col-xl-2 pt-3 text-center">
                                <Form.Label>Email Address</Form.Label>
                            </Form.Group>
                            <Form.Group className="profile-settings-page-form-field col-xl-3 me-2">
                                <Form.Control
                                    type="email"
                                    placeholder="john.doe@gmail.com"
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group className="col-xl-2 pt-3 text-center">
                                <Form.Label>Phone Number</Form.Label>
                            </Form.Group>
                            <Form.Group className="profile-settings-page-form-field col-xl-3 me-2">
                                <Form.Control
                                    type="number"
                                    placeholder="(123) 456-7890"
                                    // min="2002110000"
                                    // max="9199999999"
                                />
                            </Form.Group>
                        </div>
                        <div className="row g-3 mb-3 mx-5 justify-content-center">
                            <Form.Group className="col-3 text-center justify-content-center">
                                <Button
                                    className="update-profile-btn"
                                    type="submit"
                                >
                                    Update Profile
                                </Button>
                            </Form.Group>
                        </div>
                    </Form> */}

                    <div className="row my-4 mx-3 border-bottom border-1"></div>

                    <h3 className="text-center my-3">
                        <strong>Change Your Password</strong>
                    </h3>
                    <Formik
                        initialValues={{
                            oldPassword: "",
                            newPassword1: "",
                            newPassword2: "",
                        }}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        {({ errors, touched, isValidating }) => (
                            <Form>
                                <div className="row g-3 my-1 mx-5 justify-content-center">
                                    <Form.Group className="col-2 pt-3 text-center">
                                        <Form.Label>Old Password</Form.Label>
                                    </Form.Group>
                                    <Field
                                        name="oldPassword"
                                        type="password"
                                        id="oldPassword"
                                        placeholder="Old Password"
                                        validate={validateOldPassword}
                                        className="align-items-center profile-settings-page-form-field col-3"
                                        style={{
                                            height: "50px",
                                            // width: "258px",
                                        }}
                                    />
                                </div>
                                {/* <div className="row"> */}
                                {errors.oldPassword && touched.oldPassword && (
                                    <div className="errMsg offset-6 col-1">
                                        {errors.oldPassword}
                                    </div>
                                )}
                                {/* </div> */}
                                <div className="row g-3 my-1 mx-5 justify-content-center">
                                    <Form.Group className="col-2 pt-3 text-center">
                                        <Form.Label>New Password</Form.Label>
                                    </Form.Group>
                                    <Field
                                        name="newPassword1"
                                        type="password"
                                        id="newPassword1"
                                        placeholder="New Password"
                                        validate={validateNewPassword}
                                        className="align-items-center profile-settings-page-form-field col-3"
                                        style={{
                                            height: "50px",
                                            // width: "258px",
                                        }}
                                    />
                                </div>
                                {/* <div className="row"> */}
                                {errors.newPassword1 &&
                                    touched.newPassword1 && (
                                        <div className="row errMsg offset-6 col-1">
                                            {errors.newPassword1}
                                        </div>
                                    )}
                                {/* </div> */}
                                <div className="row g-3 my-1 mx-5 justify-content-center">
                                    <Form.Group className="col-2 pt-3 text-center">
                                        <Form.Label>
                                            Confirm Password
                                        </Form.Label>
                                    </Form.Group>
                                    <Field
                                        name="newPassword2"
                                        type="password"
                                        id="newPassword2"
                                        placeholder="Re-enter New Password"
                                        validate={validateNewPassword}
                                        className="align-items-center profile-settings-page-form-field col-3"
                                        style={{
                                            height: "50px",
                                            // width: "258px",
                                        }}
                                    />
                                </div>
                                {/* <div className="row"> */}
                                {errors.newPassword2 &&
                                    touched.newPassword2 && (
                                        <div className="errMsg offset-6 col-1">
                                            {errors.newPassword2}
                                        </div>
                                    )}
                                {/* </div> */}
                            </Form>
                        )}
                    </Formik>
                    <div className="row g-3 my-2 mx-5 justify-content-center">
                        <Form.Group className="col-3 text-center justify-content-center">
                            <Button
                                className="update-password-btn"
                                type="submit"
                            >
                                Update Password
                            </Button>
                        </Form.Group>
                    </div>
                    {/* <Form>
                        <div className="row g-3 my-1 mx-5 justify-content-center">
                            <Form.Group
                                className="col-xl-2 pt-3 text-center"
                                controlId="formOldPassword"
                            >
                                <Form.Label>Old Password</Form.Label>
                            </Form.Group>
                            <Form.Group className="profile-settings-page-form-field col-xl-3">
                                <Form.Control
                                    type="password"
                                    placeholder="Old Password"
                                />
                            </Form.Group>
                        </div>
                        <div className="row g-3 mb-1 mx-5 justify-content-center">
                            <Form.Group
                                className="col-xl-2 pt-3 text-center"
                                controlId="formNewPassword"
                            >
                                <Form.Label>New Password</Form.Label>
                            </Form.Group>
                            <Form.Group className="profile-settings-page-form-field col-xl-3">
                                <Form.Control
                                    type="password"
                                    placeholder="New Password"
                                />
                            </Form.Group>
                        </div>
                        <div className="row g-3 mb-1 mx-5 justify-content-center">
                            <Form.Group
                                className="col-xl-2 pt-3 text-center"
                                controlId="formReenterPassword"
                            >
                                <Form.Label>Re-enter Password</Form.Label>
                            </Form.Group>
                            <Form.Group className="profile-settings-page-form-field col-xl-3">
                                <Form.Control
                                    type="password"
                                    placeholder="Re-enter Passsword"
                                />
                            </Form.Group>
                        </div>
                        <div className="row g-3 mb-1 mx-5 justify-content-center">
                            <Form.Group className="col-3 text-center justify-content-center">
                                <Button
                                    className="update-password-btn"
                                    type="submit"
                                >
                                    Update Password
                                </Button>
                            </Form.Group>
                        </div>
                    </Form> */}
                </div>
                <div>
                    <p></p>
                </div>
                <div>
                    <p></p>
                </div>
            </div>
        </Container>
    );
};

export default ProfileSettingsPage;
