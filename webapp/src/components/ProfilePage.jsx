import React, { Component } from "react";
import { Button, Container, Form, Nav } from "react-bootstrap";

class ProfilePage extends Component {
    state = {
        has_taken_gre: true,
        has_taken_toefl: true,
        has_taken_ielts: true,
        has_taken_sat: true,
        workExperienceList: [{ workExp: "" }],
        publicationsList: [{ publication: "" }],
    };

    hasTakenGRE = () => {
        this.setState({ has_taken_gre: false });
    };

    hasNotTakenGRE = () => {
        this.setState({ has_taken_gre: true });
    };

    hasTakenTOEFL = () => {
        this.setState({ has_taken_toefl: false });
    };

    hasNotTakenTOEFL = () => {
        this.setState({ has_taken_toefl: true });
    };

    hasTakenIELTS = () => {
        this.setState({ has_taken_ielts: false });
    };

    hasNotTakenIELTS = () => {
        this.setState({ has_taken_ielts: true });
    };

    hasTakenSAT = () => {
        this.setState({ has_taken_sat: false });
    };

    hasNotTakenSAT = () => {
        this.setState({ has_taken_sat: true });
    };

    handleWorkExpAdd = () => {
        this.setState({
            workExperienceList: [
                ...this.state.workExperienceList,
                { workExp: "" },
            ],
        });
    };

    handleWorkExpRemove = (index) => {
        const tempList = [...this.state.workExperienceList];
        tempList.splice(index, 1);
        this.setState({
            workExperienceList: tempList,
        });
    };

    handlePublicationAdd = () => {
        this.setState({
            publicationsList: [
                ...this.state.publicationsList,
                { publication: "" },
            ],
        });
    };

    handlePublicationRemove = (index) => {
        const tempList = [...this.state.publicationsList];
        tempList.splice(index, 1);
        this.setState({
            publicationsList: tempList,
        });
    };

    render() {
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
                                <Form.Group className="col-xl-3">
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
                                <Form.Group className="col-xl-3">
                                    <Form.Control
                                        type="number"
                                        placeholder="YYYY"
                                        min="1980"
                                        max="2099"
                                    />
                                </Form.Group>
                            </div>

                            <div className="row g-3 mb-3 mx-5 justify-content-center text-start align-items-center">
                                <Form.Group
                                    className="col-xl-2"
                                    controlId="formCGPA"
                                >
                                    <Form.Label>CGPA</Form.Label>
                                </Form.Group>
                                <Form.Group className="col-xl-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="3.00"
                                    />
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
                                        <option value="USA">
                                            United States
                                        </option>
                                        <option value="GBR">
                                            United Kingdom
                                        </option>
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
                                    <Form.Label>Preferred Year</Form.Label>
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
                                    <Form.Label>Preferred Semester</Form.Label>
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

                        <h3 className="text-center mt-3">Admissions Tests</h3>
                        <Form>
                            <div className="row g-3 my-3 mx-5 justify-content-center text-start align-items-center">
                                <Form.Group
                                    className="col-xl-2"
                                    controlId="formGREAttempted"
                                >
                                    <Form.Label>GRE Attempted?</Form.Label>
                                </Form.Group>
                                <Form.Group className="col-xl-2">
                                    <Form.Check
                                        inline
                                        label="Yes"
                                        type="radio"
                                        name="gre"
                                        id={`inline-radio-1`}
                                        onClick={this.hasTakenGRE}
                                    />
                                    <Form.Check
                                        inline
                                        label="No"
                                        type="radio"
                                        name="gre"
                                        id={`inline-radio-2`}
                                        onClick={this.hasNotTakenGRE}
                                    />
                                </Form.Group>

                                <Form.Group
                                    className="col-xl-2"
                                    controlId="formTotalGREScore"
                                >
                                    <Form.Label>Total GRE Score</Form.Label>
                                </Form.Group>
                                <Form.Group className="col-xl-2">
                                    <Form.Control
                                        type="number"
                                        placeholder="340"
                                        min="260"
                                        max="340"
                                        disabled={this.state.has_taken_gre}
                                    />
                                </Form.Group>

                                <Form.Group
                                    className="col-xl-2"
                                    controlId="formGREVerbalScore"
                                >
                                    <Form.Label>Verbal</Form.Label>
                                </Form.Group>
                                <Form.Group className="col-xl-2">
                                    <Form.Control
                                        type="number"
                                        placeholder="170"
                                        min="130"
                                        max="170"
                                        disabled={this.state.has_taken_gre}
                                    />
                                </Form.Group>
                            </div>

                            <div className="row g-3 mb-3 mx-5 align-items-center justify-content-left text-start">
                                <Form.Group
                                    className="col-xl-2 offset-xl-4"
                                    controlId="formGREQuantScore"
                                >
                                    <Form.Label>Quant</Form.Label>
                                </Form.Group>
                                <Form.Group className="col-xl-2">
                                    <Form.Control
                                        type="number"
                                        placeholder="170"
                                        min="130"
                                        max="170"
                                        disabled={this.state.has_taken_gre}
                                    />
                                </Form.Group>

                                <Form.Group
                                    className="col-xl-2"
                                    controlId="formGREAWMScore"
                                >
                                    <Form.Label>AWM</Form.Label>
                                </Form.Group>
                                <Form.Group className="col-xl-2">
                                    <Form.Control
                                        type="number"
                                        placeholder="6"
                                        max="6"
                                        disabled={this.state.has_taken_gre}
                                    />
                                </Form.Group>
                            </div>

                            <div className="row">
                                <div className="col-xl-11 mb-3 mx-5 border-bottom border-1 text-center justify-content-center align-items-center"></div>
                            </div>

                            <div className="row g-3 mb-3 mx-5 align-items-center justify-content-left text-start">
                                <Form.Group
                                    className="col-xl-2"
                                    controlId="formTOEFLAttempted"
                                >
                                    <Form.Label>TOEFL Attempted?</Form.Label>
                                </Form.Group>
                                <Form.Group className="col-xl-2">
                                    <Form.Check
                                        inline
                                        label="Yes"
                                        type="radio"
                                        name="toefl"
                                        id={`inline-radio-3`}
                                        onClick={this.hasTakenTOEFL}
                                    />
                                    <Form.Check
                                        inline
                                        label="No"
                                        type="radio"
                                        name="toefl"
                                        id={`inline-radio-4`}
                                        onClick={this.hasNotTakenTOEFL}
                                    />
                                </Form.Group>

                                <Form.Group
                                    className="col-xl-2"
                                    controlId="formTotalTOEFLScore"
                                >
                                    <Form.Label>Total TOEFL Score</Form.Label>
                                </Form.Group>
                                <Form.Group className="col-xl-2">
                                    <Form.Control
                                        type="number"
                                        placeholder="120"
                                        disabled={this.state.has_taken_toefl}
                                    />
                                </Form.Group>

                                <Form.Group
                                    className="col-xl-2"
                                    controlId="formTOEFLReadingScore"
                                >
                                    <Form.Label>Reading</Form.Label>
                                </Form.Group>
                                <Form.Group className="col-xl-2">
                                    <Form.Control
                                        type="number"
                                        placeholder="30"
                                        disabled={this.state.has_taken_toefl}
                                    />
                                </Form.Group>
                            </div>

                            <div className="row g-3 mb-3 mx-5 align-items-center justify-content-left text-start">
                                <Form.Group
                                    className="col-xl-2 offset-xl-4"
                                    controlId="formTOEFLListeningScore"
                                >
                                    <Form.Label>Listening</Form.Label>
                                </Form.Group>
                                <Form.Group className="col-xl-2">
                                    <Form.Control
                                        type="number"
                                        placeholder="30"
                                        disabled={this.state.has_taken_toefl}
                                    />
                                </Form.Group>

                                <Form.Group
                                    className="col-xl-2"
                                    controlId="formTOEFLSpeakingScore"
                                >
                                    <Form.Label>Speaking</Form.Label>
                                </Form.Group>
                                <Form.Group className="col-xl-2">
                                    <Form.Control
                                        type="number"
                                        placeholder="30"
                                        disabled={this.state.has_taken_toefl}
                                    />
                                </Form.Group>
                            </div>

                            <div className="row g-3 mb-3 mx-5 align-items-center justify-content-left text-start">
                                <Form.Group
                                    className="col-xl-2 offset-xl-4"
                                    controlId="formTOEFLWritingScore"
                                >
                                    <Form.Label>Writing</Form.Label>
                                </Form.Group>
                                <Form.Group className="col-xl-2">
                                    <Form.Control
                                        type="number"
                                        placeholder="30"
                                        disabled={this.state.has_taken_toefl}
                                    />
                                </Form.Group>
                            </div>

                            <div className="row">
                                <div className="col-xl-11 mb-3 mx-5 border-bottom border-1 text-center justify-content-center align-items-center"></div>
                            </div>

                            <div className="row g-3 mb-3 mx-5 align-items-center justify-content-left text-start">
                                <Form.Group
                                    className="col-xl-2"
                                    controlId="formIELTSAttempted"
                                >
                                    <Form.Label>IELTS Attempted?</Form.Label>
                                </Form.Group>
                                <Form.Group className="col-xl-2">
                                    <Form.Check
                                        inline
                                        label="Yes"
                                        type="radio"
                                        name="ielts"
                                        id={`inline-radio-5`}
                                        onClick={this.hasTakenIELTS}
                                    />
                                    <Form.Check
                                        inline
                                        label="No"
                                        type="radio"
                                        name="ielts"
                                        id={`inline-radio-6`}
                                        onClick={this.hasNotTakenIELTS}
                                    />
                                </Form.Group>

                                <Form.Group
                                    className="col-xl-2"
                                    controlId="formOverallBandScore"
                                >
                                    <Form.Label>Overall Band Score</Form.Label>
                                </Form.Group>
                                <Form.Group className="col-xl-2">
                                    <Form.Control
                                        type="number"
                                        placeholder="9"
                                        disabled={this.state.has_taken_ielts}
                                    />
                                </Form.Group>

                                <Form.Group
                                    className="col-xl-2"
                                    controlId="formIELTSListeningScore"
                                >
                                    <Form.Label>Listening</Form.Label>
                                </Form.Group>
                                <Form.Group className="col-xl-2">
                                    <Form.Control
                                        type="number"
                                        placeholder="9"
                                        disabled={this.state.has_taken_ielts}
                                    />
                                </Form.Group>
                            </div>

                            <div className="row g-3 mb-3 mx-5 align-items-center justify-content-left text-start">
                                <Form.Group
                                    className="col-xl-2 offset-xl-4"
                                    controlId="formIELTSReadingScore"
                                >
                                    <Form.Label>Reading</Form.Label>
                                </Form.Group>
                                <Form.Group className="col-xl-2">
                                    <Form.Control
                                        type="number"
                                        placeholder="9"
                                        disabled={this.state.has_taken_ielts}
                                    />
                                </Form.Group>

                                <Form.Group
                                    className="col-xl-2"
                                    controlId="formIELTSWritingScore"
                                >
                                    <Form.Label>Writing</Form.Label>
                                </Form.Group>
                                <Form.Group className="col-xl-2">
                                    <Form.Control
                                        type="number"
                                        placeholder="9"
                                        disabled={this.state.has_taken_ielts}
                                    />
                                </Form.Group>
                            </div>

                            <div className="row g-3 mb-3 mx-5 align-items-center justify-content-left text-start">
                                <Form.Group
                                    className="col-xl-2 offset-xl-4"
                                    controlId="formIELTSSpeakingScore"
                                >
                                    <Form.Label>Speaking</Form.Label>
                                </Form.Group>
                                <Form.Group className="col-xl-2">
                                    <Form.Control
                                        type="number"
                                        placeholder="9"
                                        disabled={this.state.has_taken_ielts}
                                    />
                                </Form.Group>
                            </div>

                            <div className="row">
                                <div className="col-xl-11 mb-3 mx-5 border-bottom border-1 text-center justify-content-center align-items-center"></div>
                            </div>

                            <div className="row g-3 mb-3 mx-5 align-items-center justify-content-left text-start">
                                <Form.Group
                                    className="col-xl-2"
                                    controlId="formSATAttempted"
                                >
                                    <Form.Label>SAT Attempted?</Form.Label>
                                </Form.Group>
                                <Form.Group className="col-xl-2">
                                    <Form.Check
                                        inline
                                        label="Yes"
                                        type="radio"
                                        name="SAT"
                                        id={`inline-radio-7`}
                                        onClick={this.hasTakenSAT}
                                    />
                                    <Form.Check
                                        inline
                                        label="No"
                                        type="radio"
                                        name="SAT"
                                        id={`inline-radio-8`}
                                        onClick={this.hasNotTakenSAT}
                                    />
                                </Form.Group>

                                <Form.Group
                                    className="col-xl-2"
                                    controlId="formTotalSATScore"
                                >
                                    <Form.Label>Total SAT Score</Form.Label>
                                </Form.Group>
                                <Form.Group className="col-xl-2">
                                    <Form.Control
                                        type="number"
                                        placeholder="1600"
                                        min="400"
                                        max="1600"
                                        disabled={this.state.has_taken_sat}
                                    />
                                </Form.Group>

                                <Form.Group
                                    className="col-xl-2"
                                    controlId="formSATEnglishScore"
                                >
                                    <Form.Label>English</Form.Label>
                                </Form.Group>
                                <Form.Group className="col-xl-2">
                                    <Form.Control
                                        type="number"
                                        placeholder="800"
                                        min="200"
                                        max="800"
                                        disabled={this.state.has_taken_sat}
                                    />
                                </Form.Group>
                            </div>

                            <div className="row g-3 mb-3 mx-5 align-items-center justify-content-left text-start">
                                <Form.Group
                                    className="col-xl-2 offset-xl-4"
                                    controlId="formSATMathScore"
                                >
                                    <Form.Label>Math</Form.Label>
                                </Form.Group>
                                <Form.Group className="col-xl-2">
                                    <Form.Control
                                        type="number"
                                        placeholder="800"
                                        min="200"
                                        max="800"
                                        disabled={this.state.has_taken_sat}
                                    />
                                </Form.Group>
                            </div>
                        </Form>

                        <div className="row my-4 mx-3 border-bottom border-1 text-center justify-content-center align-items-center"></div>

                        <h3 className="text-center mt-3">Work Experience</h3>
                        <Form>
                            {this.state.workExperienceList.map(
                                (singleWorkExp, index) => (
                                    <div key={index}>
                                        <div className="row g-3 my-3 mx-5 justify-content-center text-start align-items-center">
                                            <Form.Group
                                                className="col-xl-2"
                                                controlId="formCompanyName"
                                            >
                                                <Form.Label>
                                                    Company Name
                                                </Form.Label>
                                            </Form.Group>
                                            <Form.Group className="col-xl-8">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter company name"
                                                />
                                            </Form.Group>
                                        </div>

                                        <div className="row g-3 mb-3 mx-5 justify-content-center text-start align-items-center">
                                            <Form.Group
                                                className="col-xl-2"
                                                controlId="formJobPosition"
                                            >
                                                <Form.Label>
                                                    Job Position
                                                </Form.Label>
                                            </Form.Group>
                                            <Form.Group className="col-xl-8">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter job position"
                                                />
                                            </Form.Group>
                                        </div>

                                        <div className="row g-3 mb-3 mx-5 justify-content-center text-start align-items-center">
                                            <Form.Group
                                                className="col-xl-2"
                                                controlId="formJobDescription"
                                            >
                                                <Form.Label>
                                                    Description
                                                </Form.Label>
                                            </Form.Group>
                                            <Form.Group className="col-xl-8">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter description"
                                                    as="textarea"
                                                    rows={4}
                                                />
                                            </Form.Group>
                                        </div>

                                        <div className="row g-3 mb-3 mx-5 justify-content-start text-start align-items-center">
                                            <Form.Group
                                                className="col-xl-2 offset-xl-1"
                                                controlId="formJobStartYear"
                                            >
                                                <Form.Label>
                                                    Start Year
                                                </Form.Label>
                                            </Form.Group>
                                            <Form.Group className="col-xl-3">
                                                <Form.Control
                                                    type="number"
                                                    placeholder="YYYY"
                                                    min="1980"
                                                    max="2099"
                                                />
                                            </Form.Group>

                                            <Form.Group
                                                className="col-xl-2"
                                                controlId="formJobEndYear"
                                            >
                                                <Form.Label>
                                                    End Year
                                                </Form.Label>
                                            </Form.Group>
                                            <Form.Group className="col-xl-3">
                                                <Form.Control
                                                    type="number"
                                                    placeholder="YYYY"
                                                    min="1980"
                                                    max="2099"
                                                />
                                            </Form.Group>
                                        </div>

                                        <div className="row g-3 mb-3 mx-5 justify-content-center text-center align-items-center">
                                            <div className="col-xl-2">
                                                {this.state.workExperienceList
                                                    .length -
                                                    1 ===
                                                    index && (
                                                    <Form.Group className="text-center">
                                                        <Button
                                                            variant="primary"
                                                            onClick={
                                                                this
                                                                    .handleWorkExpAdd
                                                            }
                                                        >
                                                            Add
                                                        </Button>
                                                    </Form.Group>
                                                )}
                                            </div>
                                            <div className="col-xl-2">
                                                {this.state.workExperienceList
                                                    .length !== 1 && (
                                                    <Button
                                                        variant="danger"
                                                        onClick={() =>
                                                            this.handleWorkExpRemove(
                                                                index
                                                            )
                                                        }
                                                    >
                                                        Remove
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                        </Form>

                        <div className="row my-4 mx-3 border-bottom border-1 text-center justify-content-center align-items-center"></div>

                        <h3 className="text-center mt-3">
                            Research Paper Publications
                        </h3>
                        <Form>
                            {this.state.publicationsList.map(
                                (singlePublication, index) => (
                                    <div key={index}>
                                        <div className="row g-3 my-3 mx-5 justify-content-center text-start align-items-center">
                                            <Form.Group
                                                className="col-xl-2"
                                                controlId="formPublicationName"
                                            >
                                                <Form.Label>
                                                    Publication Name
                                                </Form.Label>
                                            </Form.Group>
                                            <Form.Group className="col-xl-8">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter research paper name"
                                                />
                                            </Form.Group>
                                        </div>

                                        <div className="row g-3 mb-3 mx-5 justify-content-center text-start align-items-center">
                                            <Form.Group
                                                className="col-xl-2"
                                                controlId="formPublicationURL"
                                            >
                                                <Form.Label>
                                                    Publication URL
                                                </Form.Label>
                                            </Form.Group>
                                            <Form.Group className="col-xl-8">
                                                <Form.Control
                                                    type="url"
                                                    placeholder="www.myresearchpaper.com"
                                                />
                                            </Form.Group>
                                        </div>

                                        <div className="row g-3 mb-3 mx-5 justify-content-center text-center align-items-center">
                                            <div className="col-xl-2">
                                                {this.state.publicationsList
                                                    .length -
                                                    1 ===
                                                    index && (
                                                    <Form.Group className="text-center">
                                                        <Button
                                                            variant="primary"
                                                            onClick={
                                                                this
                                                                    .handlePublicationAdd
                                                            }
                                                        >
                                                            Add
                                                        </Button>
                                                    </Form.Group>
                                                )}
                                            </div>
                                            <div className="col-xl-2">
                                                {this.state.publicationsList
                                                    .length !== 1 && (
                                                    <Button
                                                        variant="danger"
                                                        onClick={() =>
                                                            this.handlePublicationRemove(
                                                                index
                                                            )
                                                        }
                                                    >
                                                        Remove
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                        </Form>

                        <div className="row my-4 mx-3 border-bottom border-1 text-center justify-content-center align-items-center"></div>

                        <div className="row mb-3 text-center justify-content-center align-items-center">
                            <div>
                                <Button
                                    type="submit"
                                    size="lg"
                                    variant="success"
                                >
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}
export default ProfilePage;
