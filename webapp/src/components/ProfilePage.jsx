import React from "react";
import { Button, Container, Form, Nav } from "react-bootstrap";

const ProfilePage = () => {
    return (
        <Container className="rounded border">
            <div className="row g-3 my-3 mx-auto align-items-top">
                <div className="col-xl-2">
                    <Nav
                        // defaultActiveKey="/ProfilePage"
                        variant="pills"
                        className="flex-column"
                        activeKey="/ProfilePage"
                    >
                        <Nav.Link
                            // eventKey="link-1"
                            href="/ProfilePage"
                            className="rounded border mb-2"
                        >
                            My Profile
                        </Nav.Link>
                        <Nav.Link
                            // eventKey="link-2"
                            href="/ProfileSettingsPage"
                            className="rounded border mb-2"
                        >
                            Settings
                        </Nav.Link>
                        <Nav.Link
                            // eventKey="link-3"
                            href="/"
                            className="rounded border mb-2"
                        >
                            Log Out
                        </Nav.Link>
                    </Nav>
                </div>
                <div className="col-xl-10 justify-content-center">
                    <h3 className="text-center">Educational Details</h3>
                    <Form>
                        <div className="row g-3 my-3 mx-5 justify-content-center text-start align-items-center">
                            <Form.Group
                                className="col-xl-2"
                                controlId="formSchoolName"
                            >
                                <Form.Label>School Name</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-xl-8">
                                <Form.Control
                                    type="text"
                                    placeholder="Enter the name of the last school you attended"
                                />
                            </Form.Group>
                        </div>

                        <div className="row g-3 mb-3 mx-5 justify-content-center text-start align-items-center">
                            <Form.Group
                                className="col-xl-2"
                                controlId="formDegree"
                            >
                                <Form.Label>Degree</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-xl-3">
                                <Form.Select>
                                    <option selected>Choose...</option>
                                    <option value="HS Diploma">
                                        High School Diploma
                                    </option>
                                    <option value="Bachelor">
                                        Bachelor's Degree
                                    </option>
                                    <option value="Master">
                                        Master's Degree
                                    </option>
                                    <option value="PhD">Ph.D.</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group
                                className="col-xl-2"
                                controlId="formMajor"
                            >
                                <Form.Label>Major</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-xl-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your major"
                                />
                            </Form.Group>
                        </div>

                        <div className="row g-3 mb-3 mx-5 justify-content-start text-start align-items-center">
                            <Form.Group
                                className="col-xl-2 offset-xl-1"
                                controlId="formSchoolStartYear"
                            >
                                <Form.Label>Start Year</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-xl-2">
                                <Form.Control
                                    type="number"
                                    placeholder="YYYY"
                                    min="1980"
                                    max="2099"
                                />
                            </Form.Group>

                            <Form.Group
                                className="col-xl-2"
                                controlId="formSchoolEndYear"
                            >
                                <Form.Label>End Year</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-xl-2">
                                <Form.Control
                                    type="number"
                                    placeholder="YYYY"
                                    min="1980"
                                    max="2099"
                                />
                            </Form.Group>

                            {/* <div className="col-xl-2"></div> */}
                        </div>

                        <div className="row g-3 mb-3 mx-5 justify-content-center text-start align-items-center">
                            <Form.Group
                                className="col-xl-2"
                                controlId="formCGPA"
                            >
                                <Form.Label>CGPA</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-xl-3">
                                <Form.Control type="text" placeholder="3.00" />
                            </Form.Group>

                            <Form.Group
                                className="col-xl-2"
                                controlId="formCGPAScale"
                            >
                                <Form.Label>CGPA Scale</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-xl-3">
                                <Form.Select>
                                    <option selected>Choose...</option>
                                    <option value="4">4</option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="100">100</option>
                                </Form.Select>
                            </Form.Group>
                        </div>

                        <Form.Group className="text-center justify-content-center">
                            <Button variant="primary" size="lg" type="submit">
                                Submit
                            </Button>
                        </Form.Group>
                    </Form>

                    <div className="row my-4 mx-3 border-bottom border-1 text-center justify-content-center align-items-center"></div>

                    <h3 className="text-center mt-3">
                        Educational Preferences
                    </h3>
                    <Form>
                        <div className="row g-3 my-3 mx-5 justify-content-center text-start align-items-center">
                            <Form.Group
                                className="col-xl-2"
                                controlId="formCountryPreference"
                            >
                                <Form.Label>Country</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-xl-3">
                                <Form.Select>
                                    <option selected>Choose...</option>
                                    <option value="USA">United States</option>
                                    <option value="GBR">United Kingdom</option>
                                    <option value="DEU">Germany</option>
                                    <option value="CAN">Canada</option>
                                    <option value="FRA">France</option>
                                    <option value="CHE">Switzerland</option>
                                    <option value="JPN">Japan</option>
                                    <option value="AUS">Australia</option>
                                    <option value="SWE">Sweden</option>
                                    <option value="NLD">Netherlands</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group
                                className="col-xl-2"
                                controlId="formDegreePreference"
                            >
                                <Form.Label>Degree</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-xl-3">
                                <Form.Select>
                                    <option selected>Choose...</option>
                                    <option value="Bachelor">
                                        Bachelor's Degree
                                    </option>
                                    <option value="Master">
                                        Master's Degree
                                    </option>
                                    <option value="PhD">Ph.D.</option>
                                </Form.Select>
                            </Form.Group>
                        </div>

                        <div className="row g-3 mb-3 mx-5 justify-content-start text-start align-items-center">
                            <Form.Group
                                className="col-xl-2 offset-xl-1"
                                controlId="formProgramPreference"
                            >
                                <Form.Label>Program</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-xl-5">
                                <Form.Control
                                    type="text"
                                    placeholder="Enter program preference"
                                />
                            </Form.Group>
                        </div>

                        <div className="row g-3 mb-3 mx-5 justify-content-center text-start align-items-center">
                            <Form.Group
                                className="col-xl-2"
                                controlId="formIntakeYearPreference"
                            >
                                <Form.Label>Year of Intake</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-xl-2">
                                <Form.Control
                                    type="number"
                                    placeholder="YYYY"
                                    min="2022"
                                    max="2099"
                                />
                            </Form.Group>

                            <Form.Group
                                className="col-xl-2 offset-xl-1"
                                controlId="formIntakeSemesterPreference"
                            >
                                <Form.Label>Semester of Intake</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-xl-3">
                                <Form.Select>
                                    <option selected>Choose...</option>
                                    <option value="Fall">Fall</option>
                                    <option value="Spring">Spring</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                    </Form>

                    <div className="row my-4 mx-3 border-bottom border-1 text-center justify-content-center align-items-center"></div>

                    <div></div>
                </div>
            </div>
        </Container>
    );
};

export default ProfilePage;
