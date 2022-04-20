import React, { useState } from "react";
import "./landing.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const ProfilePage = () => {
    const [has_taken_gre, setHasTakenGRE] = useState(true);
    const [has_taken_toefl, setHasTakenTOEFL] = useState(true);
    const [has_taken_ielts, setHasTakenIELTS] = useState(true);
    const [has_taken_sat, setHasTakenSAT] = useState(true);
    const [workExperienceList, setWorkExperienceList] = useState([
        { workExp: "" },
    ]);
    const [publicationsList, setPublicationsList] = useState([
        { publication: "" },
    ]);

    const hasTakenGRE = () => {
        setHasTakenGRE(false);
    };

    const hasNotTakenGRE = () => {
        setHasTakenGRE(true);
    };

    const hasTakenTOEFL = () => {
        setHasTakenTOEFL(false);
    };

    const hasNotTakenTOEFL = () => {
        setHasTakenTOEFL(true);
    };

    const hasTakenIELTS = () => {
        setHasTakenIELTS(false);
    };

    const hasNotTakenIELTS = () => {
        setHasTakenIELTS(true);
    };

    const hasTakenSAT = () => {
        setHasTakenSAT(false);
    };

    const hasNotTakenSAT = () => {
        setHasTakenSAT(true);
    };

    const handleWorkExpAdd = () => {
        setWorkExperienceList([...workExperienceList, { workExp: "" }]);
    };

    const handleWorkExpRemove = (index) => {
        const tempList = [...workExperienceList];
        tempList.splice(index, 1);
        setWorkExperienceList(tempList);
    };

    const handlePublicationAdd = () => {
        setPublicationsList([...publicationsList, { publication: "" }]);
    };

    const handlePublicationRemove = (index) => {
        const tempList = [...publicationsList];
        tempList.splice(index, 1);
        setPublicationsList(tempList);
    };

    return (
        <Container
            className="my-3 rounded border"
            style={{ backgroundColor: "white" }}
        >
            <div className="row g-3 my-3 mx-auto align-items-top">
                <div className="col-12 justify-content-center">
                    <h3 className="text-center">
                        <strong>Educational Details</strong>
                    </h3>
                    <Form>
                        <div className="row g-3 my-3 mx-5 justify-content-center text-start align-items-center">
                            <Form.Group
                                className="col-2"
                                controlId="formSchoolName"
                            >
                                <Form.Label>School Name</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-8">
                                <Form.Control
                                    type="text"
                                    placeholder="Enter the name of the last school you attended"
                                />
                            </Form.Group>
                        </div>

                        <div className="row g-3 mb-3 mx-5 justify-content-center text-start align-items-center">
                            <Form.Group
                                className="col-2"
                                controlId="formDegree"
                            >
                                <Form.Label>Degree</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Enter the last degree earned"
                                />
                                {/* <Form.Select>
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
                                </Form.Select> */}
                            </Form.Group>

                            <Form.Group className="col-2" controlId="formMajor">
                                <Form.Label>Major</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your major"
                                />
                            </Form.Group>
                        </div>

                        <div className="row g-3 mb-3 mx-5 justify-content-start text-start align-items-center">
                            <Form.Group
                                className="col-2 offset-1"
                                controlId="formSchoolStartYear"
                            >
                                <Form.Label>Start Year</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-3">
                                <Form.Control
                                    type="number"
                                    placeholder="YYYY"
                                    min="1980"
                                    max="2099"
                                />
                            </Form.Group>

                            <Form.Group
                                className="col-2"
                                controlId="formSchoolEndYear"
                            >
                                <Form.Label>End Year</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-3">
                                <Form.Control
                                    type="number"
                                    placeholder="YYYY"
                                    min="1980"
                                    max="2099"
                                />
                            </Form.Group>
                        </div>

                        <div className="row g-3 mb-3 mx-5 justify-content-center text-start align-items-center">
                            <Form.Group className="col-2" controlId="formCGPA">
                                <Form.Label>CGPA</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-3">
                                <Form.Control type="text" placeholder="3.00" />
                            </Form.Group>

                            <Form.Group
                                className="col-2"
                                controlId="formCGPAScale"
                            >
                                <Form.Label>CGPA Scale</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-3">
                                <Form.Control type="text" placeholder="4.00" />
                                {/* <Form.Select>
                                    <option selected>Choose...</option>
                                    <option value="4">4</option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="100">100</option>
                                </Form.Select> */}
                            </Form.Group>
                        </div>
                    </Form>

                    <div className="row my-4 mx-3 border-bottom border-1 text-center justify-content-center align-items-center"></div>

                    <h3 className="text-center mt-3">
                        <strong>Educational Preferences</strong>
                    </h3>
                    <Form>
                        <div className="row g-3 my-3 mx-5 justify-content-center text-start align-items-center">
                            <Form.Group
                                className="col-2"
                                controlId="formCountryPreference"
                            >
                                <Form.Label>Country</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your country preference"
                                />
                                {/* <Form.Select>
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
                                </Form.Select> */}
                            </Form.Group>

                            <Form.Group
                                className="col-2"
                                controlId="formDegreePreference"
                            >
                                <Form.Label>Degree</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your degree preference"
                                />
                                {/* <Form.Select>
                                    <option selected>Choose...</option>
                                    <option value="Bachelor">
                                        Bachelor's Degree
                                    </option>
                                    <option value="Master">
                                        Master's Degree
                                    </option>
                                    <option value="PhD">Ph.D.</option>
                                </Form.Select> */}
                            </Form.Group>
                        </div>

                        <div className="row g-3 mb-3 mx-5 justify-content-start text-start align-items-center">
                            <Form.Group
                                className="col-2 offset-1"
                                controlId="formProgramPreference"
                            >
                                <Form.Label>Program</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your program preference"
                                />
                            </Form.Group>
                        </div>

                        <div className="row g-3 mb-3 mx-5 justify-content-center text-start align-items-center">
                            <Form.Group
                                className="col-2"
                                controlId="formIntakeYearPreference"
                            >
                                <Form.Label>Preferred Year</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-2">
                                <Form.Control
                                    type="number"
                                    placeholder="YYYY"
                                    min="2022"
                                    max="2099"
                                />
                            </Form.Group>

                            <Form.Group
                                className="col-2 offset-1"
                                controlId="formIntakeSemesterPreference"
                            >
                                <Form.Label>Preferred Semester</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your semester preference"
                                />
                                {/* <Form.Select>
                                    <option selected>Choose...</option>
                                    <option value="Fall">Fall</option>
                                    <option value="Spring">Spring</option>
                                </Form.Select> */}
                            </Form.Group>
                        </div>
                    </Form>

                    <div className="row my-4 mx-3 border-bottom border-1 text-center justify-content-center align-items-center"></div>

                    <h3 className="text-center mt-3">
                        <strong>Admissions Tests</strong>
                    </h3>
                    <Form>
                        <div className="row g-3 my-3 mx-5 justify-content-center text-start align-items-center">
                            <Form.Group
                                className="col-2"
                                controlId="formGREAttempted"
                            >
                                <Form.Label>GRE Attempted?</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-2">
                                <Form.Check
                                    inline
                                    label="Yes"
                                    type="radio"
                                    name="gre"
                                    id={`inline-radio-1`}
                                    onClick={hasTakenGRE}
                                />
                                <Form.Check
                                    inline
                                    label="No"
                                    type="radio"
                                    name="gre"
                                    id={`inline-radio-2`}
                                    onClick={hasNotTakenGRE}
                                />
                            </Form.Group>

                            <Form.Group
                                className="col-2"
                                controlId="formTotalGREScore"
                            >
                                <Form.Label>Total GRE Score</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-2">
                                <Form.Control
                                    type="number"
                                    placeholder="340"
                                    min="260"
                                    max="340"
                                    disabled={has_taken_gre}
                                />
                            </Form.Group>

                            <Form.Group
                                className="col-2"
                                controlId="formGREVerbalScore"
                            >
                                <Form.Label>Verbal</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-2">
                                <Form.Control
                                    type="number"
                                    placeholder="170"
                                    min="130"
                                    max="170"
                                    disabled={has_taken_gre}
                                />
                            </Form.Group>
                        </div>

                        <div className="row g-3 mb-3 mx-5 align-items-center justify-content-left text-start">
                            <Form.Group
                                className="col-2 offset-4"
                                controlId="formGREQuantScore"
                            >
                                <Form.Label>Quant</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-2">
                                <Form.Control
                                    type="number"
                                    placeholder="170"
                                    min="130"
                                    max="170"
                                    disabled={has_taken_gre}
                                />
                            </Form.Group>

                            <Form.Group
                                className="col-2"
                                controlId="formGREAWMScore"
                            >
                                <Form.Label>AWM</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-2">
                                <Form.Control
                                    type="text"
                                    placeholder="6"
                                    disabled={has_taken_gre}
                                />
                            </Form.Group>
                        </div>

                        <div className="row">
                            <div className="col-11 mb-3 mx-5 border-bottom border-1 text-center justify-content-center align-items-center"></div>
                        </div>

                        <div className="row g-3 mb-3 mx-5 align-items-center justify-content-left text-start">
                            <Form.Group
                                className="col-2"
                                controlId="formTOEFLAttempted"
                            >
                                <Form.Label>TOEFL Attempted?</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-2">
                                <Form.Check
                                    inline
                                    label="Yes"
                                    type="radio"
                                    name="toefl"
                                    id={`inline-radio-3`}
                                    onClick={hasTakenTOEFL}
                                />
                                <Form.Check
                                    inline
                                    label="No"
                                    type="radio"
                                    name="toefl"
                                    id={`inline-radio-4`}
                                    onClick={hasNotTakenTOEFL}
                                />
                            </Form.Group>

                            <Form.Group
                                className="col-2"
                                controlId="formTotalTOEFLScore"
                            >
                                <Form.Label>Total TOEFL Score</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-2">
                                <Form.Control
                                    type="number"
                                    placeholder="120"
                                    min="0"
                                    max="120"
                                    disabled={has_taken_toefl}
                                />
                            </Form.Group>

                            <Form.Group
                                className="col-2"
                                controlId="formTOEFLReadingScore"
                            >
                                <Form.Label>Reading</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-2">
                                <Form.Control
                                    type="number"
                                    placeholder="30"
                                    min="0"
                                    max="30"
                                    disabled={has_taken_toefl}
                                />
                            </Form.Group>
                        </div>

                        <div className="row g-3 mb-3 mx-5 align-items-center justify-content-left text-start">
                            <Form.Group
                                className="col-2 offset-4"
                                controlId="formTOEFLListeningScore"
                            >
                                <Form.Label>Listening</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-2">
                                <Form.Control
                                    type="number"
                                    placeholder="30"
                                    min="0"
                                    max="30"
                                    disabled={has_taken_toefl}
                                />
                            </Form.Group>

                            <Form.Group
                                className="col-2"
                                controlId="formTOEFLSpeakingScore"
                            >
                                <Form.Label>Speaking</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-2">
                                <Form.Control
                                    type="number"
                                    placeholder="30"
                                    min="0"
                                    max="30"
                                    disabled={has_taken_toefl}
                                />
                            </Form.Group>
                        </div>

                        <div className="row g-3 mb-3 mx-5 align-items-center justify-content-left text-start">
                            <Form.Group
                                className="col-2 offset-4"
                                controlId="formTOEFLWritingScore"
                            >
                                <Form.Label>Writing</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-2">
                                <Form.Control
                                    type="number"
                                    placeholder="30"
                                    min="0"
                                    max="30"
                                    disabled={has_taken_toefl}
                                />
                            </Form.Group>
                        </div>

                        <div className="row">
                            <div className="col-11 mb-3 mx-5 border-bottom border-1 text-center justify-content-center align-items-center"></div>
                        </div>

                        <div className="row g-3 mb-3 mx-5 align-items-center justify-content-left text-start">
                            <Form.Group
                                className="col-2"
                                controlId="formIELTSAttempted"
                            >
                                <Form.Label>IELTS Attempted?</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-2">
                                <Form.Check
                                    inline
                                    label="Yes"
                                    type="radio"
                                    name="ielts"
                                    id={`inline-radio-5`}
                                    onClick={hasTakenIELTS}
                                />
                                <Form.Check
                                    inline
                                    label="No"
                                    type="radio"
                                    name="ielts"
                                    id={`inline-radio-6`}
                                    onClick={hasNotTakenIELTS}
                                />
                            </Form.Group>

                            <Form.Group
                                className="col-2"
                                controlId="formOverallBandScore"
                            >
                                <Form.Label>Overall Band Score</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-2">
                                <Form.Control
                                    type="number"
                                    placeholder="9"
                                    min="1"
                                    max="9"
                                    disabled={has_taken_ielts}
                                />
                            </Form.Group>

                            <Form.Group
                                className="col-2"
                                controlId="formIELTSListeningScore"
                            >
                                <Form.Label>Listening</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-2">
                                <Form.Control
                                    type="number"
                                    placeholder="9"
                                    min="1"
                                    max="9"
                                    disabled={has_taken_ielts}
                                />
                            </Form.Group>
                        </div>

                        <div className="row g-3 mb-3 mx-5 align-items-center justify-content-left text-start">
                            <Form.Group
                                className="col-2 offset-4"
                                controlId="formIELTSReadingScore"
                            >
                                <Form.Label>Reading</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-2">
                                <Form.Control
                                    type="number"
                                    placeholder="9"
                                    min="1"
                                    max="9"
                                    disabled={has_taken_ielts}
                                />
                            </Form.Group>

                            <Form.Group
                                className="col-2"
                                controlId="formIELTSWritingScore"
                            >
                                <Form.Label>Writing</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-2">
                                <Form.Control
                                    type="number"
                                    placeholder="9"
                                    min="1"
                                    max="9"
                                    disabled={has_taken_ielts}
                                />
                            </Form.Group>
                        </div>

                        <div className="row g-3 mb-3 mx-5 align-items-center justify-content-left text-start">
                            <Form.Group
                                className="col-2 offset-4"
                                controlId="formIELTSSpeakingScore"
                            >
                                <Form.Label>Speaking</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-2">
                                <Form.Control
                                    type="number"
                                    placeholder="9"
                                    min="1"
                                    max="9"
                                    disabled={has_taken_ielts}
                                />
                            </Form.Group>
                        </div>

                        <div className="row">
                            <div className="col-11 mb-3 mx-5 border-bottom border-1 text-center justify-content-center align-items-center"></div>
                        </div>

                        <div className="row g-3 mb-3 mx-5 align-items-center justify-content-left text-start">
                            <Form.Group
                                className="col-2"
                                controlId="formSATAttempted"
                            >
                                <Form.Label>SAT Attempted?</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-2">
                                <Form.Check
                                    inline
                                    label="Yes"
                                    type="radio"
                                    name="SAT"
                                    id={`inline-radio-7`}
                                    onClick={hasTakenSAT}
                                />
                                <Form.Check
                                    inline
                                    label="No"
                                    type="radio"
                                    name="SAT"
                                    id={`inline-radio-8`}
                                    onClick={hasNotTakenSAT}
                                />
                            </Form.Group>

                            <Form.Group
                                className="col-2"
                                controlId="formTotalSATScore"
                            >
                                <Form.Label>Total SAT Score</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-2">
                                <Form.Control
                                    type="number"
                                    placeholder="1600"
                                    min="400"
                                    max="1600"
                                    disabled={has_taken_sat}
                                />
                            </Form.Group>

                            <Form.Group
                                className="col-2"
                                controlId="formSATEnglishScore"
                            >
                                <Form.Label>English</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-2">
                                <Form.Control
                                    type="number"
                                    placeholder="800"
                                    min="200"
                                    max="800"
                                    disabled={has_taken_sat}
                                />
                            </Form.Group>
                        </div>

                        <div className="row g-3 mb-3 mx-5 align-items-center justify-content-left text-start">
                            <Form.Group
                                className="col-2 offset-4"
                                controlId="formSATMathScore"
                            >
                                <Form.Label>Math</Form.Label>
                            </Form.Group>
                            <Form.Group className="col-2">
                                <Form.Control
                                    type="number"
                                    placeholder="800"
                                    min="200"
                                    max="800"
                                    disabled={has_taken_sat}
                                />
                            </Form.Group>
                        </div>
                    </Form>

                    <div className="row my-4 mx-3 border-bottom border-1 text-center justify-content-center align-items-center"></div>

                    <h3 className="text-center mt-3">
                        <strong>Work Experience</strong>
                    </h3>
                    <Form>
                        {workExperienceList.map((singleWorkExp, index) => (
                            <div key={index}>
                                <div className="row g-3 my-3 mx-5 justify-content-center text-start align-items-center">
                                    <Form.Group
                                        className="col-2"
                                        controlId="formCompanyName"
                                    >
                                        <Form.Label>Company Name</Form.Label>
                                    </Form.Group>
                                    <Form.Group className="col-8">
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter company name"
                                        />
                                    </Form.Group>
                                </div>

                                <div className="row g-3 mb-3 mx-5 justify-content-center text-start align-items-center">
                                    <Form.Group
                                        className="col-2"
                                        controlId="formJobPosition"
                                    >
                                        <Form.Label>Job Position</Form.Label>
                                    </Form.Group>
                                    <Form.Group className="col-8">
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter job position"
                                        />
                                    </Form.Group>
                                </div>

                                <div className="row g-3 mb-3 mx-5 justify-content-center text-start align-items-center">
                                    <Form.Group
                                        className="col-2"
                                        controlId="formJobDescription"
                                    >
                                        <Form.Label>Description</Form.Label>
                                    </Form.Group>
                                    <Form.Group className="col-8">
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
                                        className="col-2 offset-1"
                                        controlId="formJobStartYear"
                                    >
                                        <Form.Label>Start Year</Form.Label>
                                    </Form.Group>
                                    <Form.Group className="col-3">
                                        <Form.Control
                                            type="number"
                                            placeholder="YYYY"
                                            min="1980"
                                            max="2099"
                                        />
                                    </Form.Group>

                                    <Form.Group
                                        className="col-2"
                                        controlId="formJobEndYear"
                                    >
                                        <Form.Label>End Year</Form.Label>
                                    </Form.Group>
                                    <Form.Group className="col-3">
                                        <Form.Control
                                            type="number"
                                            placeholder="YYYY"
                                            min="1980"
                                            max="2099"
                                        />
                                    </Form.Group>
                                </div>

                                <div className="row g-3 mb-3 mx-5 justify-content-center text-center align-items-center">
                                    <div className="col-2">
                                        {workExperienceList.length - 1 ===
                                            index && (
                                            <Form.Group className="text-center">
                                                <Button
                                                    variant="primary"
                                                    onClick={handleWorkExpAdd}
                                                >
                                                    Add
                                                </Button>
                                            </Form.Group>
                                        )}
                                    </div>
                                    <div className="col-2">
                                        {workExperienceList.length !== 1 && (
                                            <Button
                                                variant="danger"
                                                onClick={() =>
                                                    handleWorkExpRemove(index)
                                                }
                                            >
                                                Remove
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Form>

                    <div className="row my-4 mx-3 border-bottom border-1 text-center justify-content-center align-items-center"></div>

                    <h3 className="text-center mt-3">
                        <strong>Research Paper Publications</strong>
                    </h3>
                    <Form>
                        {publicationsList.map((singlePublication, index) => (
                            <div key={index}>
                                <div className="row g-3 my-3 mx-5 justify-content-center text-start align-items-center">
                                    <Form.Group
                                        className="col-2"
                                        controlId="formPublicationName"
                                    >
                                        <Form.Label>
                                            Publication Name
                                        </Form.Label>
                                    </Form.Group>
                                    <Form.Group className="col-8">
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter research paper name"
                                        />
                                    </Form.Group>
                                </div>

                                <div className="row g-3 mb-3 mx-5 justify-content-center text-start align-items-center">
                                    <Form.Group
                                        className="col-2"
                                        controlId="formPublicationURL"
                                    >
                                        <Form.Label>Publication URL</Form.Label>
                                    </Form.Group>
                                    <Form.Group className="col-8">
                                        <Form.Control
                                            type="url"
                                            placeholder="www.myresearchpaper.com"
                                        />
                                    </Form.Group>
                                </div>

                                <div className="row g-3 mb-3 mx-5 justify-content-center text-center align-items-center">
                                    <div className="col-2">
                                        {publicationsList.length - 1 ===
                                            index && (
                                            <Form.Group className="text-center">
                                                <Button
                                                    variant="primary"
                                                    onClick={
                                                        handlePublicationAdd
                                                    }
                                                >
                                                    Add
                                                </Button>
                                            </Form.Group>
                                        )}
                                    </div>
                                    <div className="col-2">
                                        {publicationsList.length !== 1 && (
                                            <Button
                                                variant="danger"
                                                onClick={() =>
                                                    handlePublicationRemove(
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
                        ))}
                    </Form>

                    <div className="row my-4 mx-3 border-bottom border-1 text-center justify-content-center align-items-center"></div>

                    <Form>
                        <Row className="mb-3 text-center justify-content-center align-items-center">
                            <Col>
                                <Button
                                    className="update-preferences-btn"
                                    type="submit"
                                >
                                    Update Preferences
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
                <div>
                    <p></p>
                </div>
            </div>
        </Container>
    );
};

export default ProfilePage;
