import React, { useState } from "react";
import "./landing.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Field, Formik } from "formik";

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

    function validateSchoolName(value) {
        let error;

        if (!value) {
            error = "Required";
        } else if (!/^([a-zA-Z ]+)$/i.test(value)) {
            error = "You can only have characters in your school name";
        }

        return error;
    }

    function validateDegree(value) {
        let error;

        if (!value) {
            error = "Required";
        } else if (!/^([a-zA-Z ]+)$/i.test(value)) {
            error = "You can only have characters in your degree";
        }

        return error;
    }

    function validateMajor(value) {
        let error;

        if (!value) {
            error = "Required";
        } else if (!/^([a-zA-Z ]+)$/i.test(value)) {
            error = "You can only have characters in your major";
        }

        return error;
    }

    function validateStartYear(value) {
        let error;

        if (!value) {
            error = "Required";
        } else if (!/^([0-9]+)$/i.test(value)) {
            error = "You can only have numbers in the start year";
        }

        return error;
    }

    function validateEndYear(value) {
        let error;

        if (!value) {
            error = "Required";
        } else if (!/^([0-9]+)$/i.test(value)) {
            error = "You can only have numbers in the end year";
        }

        return error;
    }

    function validateCGPA(value) {
        let error;

        if (!value) {
            error = "Required";
        } else if (!/^([0-9.]+)$/i.test(value)) {
            error = "You can only have numbers in the CGPA";
        }

        return error;
    }

    function validateCGPAScale(value) {
        let error;

        if (!value) {
            error = "Required";
        } else if (!/^([0-9.]+)$/i.test(value)) {
            error = "You can only have numbers in the CGPA scale";
        }

        return error;
    }

    function validateCountry(value) {
        let error;

        if (!value) {
            error = "Required";
        } else if (!/^([a-zA-Z. ]+)$/i.test(value)) {
            error = "You can only have characters in your preffered country";
        }

        return error;
    }

    function validateDegreePreferred(value) {
        let error;

        if (!value) {
            error = "Required";
        } else if (!/^([a-zA-Z'. ]+)$/i.test(value)) {
            error = "You can only have characters in your preffered degree";
        }

        return error;
    }

    function validateProgram(value) {
        let error;

        if (!value) {
            error = "Required";
        } else if (!/^([a-zA-Z'. ]+)$/i.test(value)) {
            error = "You can only have characters in your preffered program";
        }

        return error;
    }

    function validatePreferredYear(value) {
        let error;

        if (!value) {
            error = "Required";
        } else if (!/^([0-9]+)$/i.test(value)) {
            error = "You can only have numbers in the prferred year";
        }

        return error;
    }

    function validatePreferredSemester(value) {
        let error;

        if (!value) {
            error = "Required";
        } else if (!/^([a-zA-Z]+)$/i.test(value)) {
            error = "You can only have characters in your preffered semester";
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
                        <strong>Educational Details</strong>
                    </h3>
                    <Formik
                        initialValues={{
                            schoolName: "",
                            degree: "",
                            major: "",
                            startYear: "",
                            endYear: "",
                            cgpa: "",
                            cgpaScale: "",
                        }}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        {({ errors, touched, isValidating }) => (
                            <Form>
                                <div className="row mt-3 mb-1 mx-5 justify-content-center text-start align-items-center">
                                    <Form.Group className="col-2 pt-3 text-center">
                                        <Form.Label>School Name</Form.Label>
                                    </Form.Group>
                                    <Field
                                        name="schoolName"
                                        type="text"
                                        id="schoolName"
                                        placeholder="School name"
                                        validate={validateSchoolName}
                                        className="align-items-center profile-settings-page-form-field col-8"
                                        style={{
                                            height: "50px",
                                            // width: "258px",
                                        }}
                                    />
                                </div>
                                {errors.schoolName && touched.schoolName && (
                                    <div className="errMsg offset-6 col-1">
                                        {errors.schoolName}
                                    </div>
                                )}

                                <div className="row mt-3 mb-1 mx-5 justify-content-center text-start align-items-center">
                                    <Form.Group className="col-2 pt-3 text-center">
                                        <Form.Label>Degree</Form.Label>
                                    </Form.Group>
                                    <Field
                                        name="degree"
                                        type="text"
                                        id="degree"
                                        placeholder="Degree"
                                        validate={validateDegree}
                                        className="align-items-center profile-settings-page-form-field col-3"
                                        style={{
                                            height: "50px",
                                            // width: "258px",
                                        }}
                                    />

                                    <Form.Group className="col-2 pt-3 text-center">
                                        <Form.Label>Major</Form.Label>
                                    </Form.Group>
                                    <Field
                                        name="major"
                                        type="text"
                                        id="major"
                                        placeholder="Major"
                                        validate={validateMajor}
                                        className="align-items-center profile-settings-page-form-field col-3"
                                        style={{
                                            height: "50px",
                                            // width: "258px",
                                        }}
                                    />
                                </div>
                                <div className="row">
                                    {errors.degree && touched.degree && (
                                        <div className="errMsg offset-4 col-1">
                                            {errors.degree}
                                        </div>
                                    )}
                                    {errors.major && touched.major && (
                                        <div className="errMsg offset-4 col-1">
                                            {errors.major}
                                        </div>
                                    )}
                                </div>

                                <div className="row mt-3 mb-1 mx-5 justify-content-center text-start align-items-center">
                                    <Form.Group className="col-2 pt-3 text-center">
                                        <Form.Label>Start Year</Form.Label>
                                    </Form.Group>
                                    <Field
                                        name="startYear"
                                        type="number"
                                        id="startYear"
                                        placeholder="YYYY"
                                        min="1980"
                                        max="2099"
                                        validate={validateStartYear}
                                        className="align-items-center profile-settings-page-form-field col-3"
                                        style={{
                                            height: "50px",
                                            // width: "258px",
                                        }}
                                    />

                                    <Form.Group className="col-2 pt-3 text-center">
                                        <Form.Label>End Year</Form.Label>
                                    </Form.Group>
                                    <Field
                                        name="endYear"
                                        type="number"
                                        id="endYear"
                                        placeholder="YYYY"
                                        min="1980"
                                        max="2099"
                                        validate={validateEndYear}
                                        className="align-items-center profile-settings-page-form-field col-3"
                                        style={{
                                            height: "50px",
                                            // width: "258px",
                                        }}
                                    />
                                </div>
                                <div className="row">
                                    {errors.startYear && touched.startYear && (
                                        <div className="errMsg offset-4 col-1">
                                            {errors.startYear}
                                        </div>
                                    )}
                                    {errors.endYear && touched.endYear && (
                                        <div className="errMsg offset-4 col-1">
                                            {errors.endYear}
                                        </div>
                                    )}
                                </div>

                                <div className="row mt-3 mb-1 mx-5 justify-content-center text-start align-items-center">
                                    <Form.Group className="col-2 pt-3 text-center">
                                        <Form.Label>CGPA</Form.Label>
                                    </Form.Group>
                                    <Field
                                        name="cgpa"
                                        type="text"
                                        id="cgpa"
                                        placeholder="3.00"
                                        validate={validateCGPA}
                                        className="align-items-center profile-settings-page-form-field col-3"
                                        style={{
                                            height: "50px",
                                            // width: "258px",
                                        }}
                                    />

                                    <Form.Group className="col-2 pt-3 text-center">
                                        <Form.Label>CGPA Scale</Form.Label>
                                    </Form.Group>
                                    <Field
                                        name="cgpaScale"
                                        type="text"
                                        id="cgpaScale"
                                        placeholder="4.00"
                                        validate={validateCGPAScale}
                                        className="align-items-center profile-settings-page-form-field col-3"
                                        style={{
                                            height: "50px",
                                            // width: "258px",
                                        }}
                                    />
                                </div>
                                <div className="row">
                                    {errors.cgpa && touched.cgpa && (
                                        <div className="errMsg offset-4 col-1">
                                            {errors.cgpa}
                                        </div>
                                    )}
                                    {errors.cgpaScale && touched.cgpaScale && (
                                        <div className="errMsg offset-4 col-1">
                                            {errors.cgpaScale}
                                        </div>
                                    )}
                                </div>
                            </Form>
                        )}
                    </Formik>

                    <div className="row my-4 mx-3 border-bottom border-1"></div>

                    <h3 className="text-center mt-3">
                        <strong>Educational Preferences</strong>
                    </h3>
                    <Formik
                        initialValues={{
                            country: "",
                            degreePreferred: "",
                            program: "",
                            preferredYear: "",
                            preferredSemester: "",
                        }}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        {({ errors, touched, isValidating }) => (
                            <Form>
                                <div className="row mt-3 mb-1 mx-5 justify-content-center text-start align-items-center">
                                    <Form.Group className="col-2 pt-3 text-center">
                                        <Form.Label>Country</Form.Label>
                                    </Form.Group>
                                    <Field
                                        name="country"
                                        type="text"
                                        id="country"
                                        placeholder="Country"
                                        validate={validateCountry}
                                        className="align-items-center profile-settings-page-form-field col-3"
                                        style={{
                                            height: "50px",
                                            // width: "258px",
                                        }}
                                    />

                                    <Form.Group className="col-2 pt-3 text-center">
                                        <Form.Label>Degree</Form.Label>
                                    </Form.Group>
                                    <Field
                                        name="degreePreferred"
                                        type="text"
                                        id="degreePreferred"
                                        placeholder="Degree"
                                        validate={validateDegreePreferred}
                                        className="align-items-center profile-settings-page-form-field col-3"
                                        style={{
                                            height: "50px",
                                            // width: "258px",
                                        }}
                                    />
                                </div>

                                <div className="row">
                                    {errors.country && touched.country && (
                                        <div className="errMsg offset-4 col-1">
                                            {errors.country}
                                        </div>
                                    )}
                                    {errors.degreePreferred &&
                                        touched.degreePreferred && (
                                            <div className="errMsg offset-4 col-1">
                                                {errors.degreePreferred}
                                            </div>
                                        )}
                                </div>

                                <div className="row mt-3 mb-1 mx-5 justify-content-start text-start align-items-center">
                                    <Form.Group className="col-2 pt-3 offset-1 text-center">
                                        <Form.Label>Program</Form.Label>
                                    </Form.Group>
                                    <Field
                                        name="program"
                                        type="text"
                                        id="program"
                                        placeholder="Program"
                                        validate={validateProgram}
                                        className="align-items-center profile-settings-page-form-field col-3"
                                        style={{
                                            height: "50px",
                                            // width: "258px",
                                        }}
                                    />
                                </div>
                                <div className="row">
                                    {errors.program && touched.program && (
                                        <div className="errMsg offset-4 col-1">
                                            {errors.program}
                                        </div>
                                    )}
                                </div>

                                <div className="row mt-3 mb-1 mx-5 justify-content-center text-start align-items-center">
                                    <Form.Group className="col-2 pt-3 text-center">
                                        <Form.Label>Preferred Year</Form.Label>
                                    </Form.Group>
                                    <Field
                                        name="preferredYear"
                                        type="number"
                                        id="preferredYear"
                                        placeholder="YYYY"
                                        min="1980"
                                        max="2099"
                                        validate={validatePreferredYear}
                                        className="align-items-center profile-settings-page-form-field col-3"
                                        style={{
                                            height: "50px",
                                            // width: "258px",
                                        }}
                                    />

                                    <Form.Group className="col-2 pt-3 text-center">
                                        <Form.Label>
                                            Preferred Semester
                                        </Form.Label>
                                    </Form.Group>
                                    <Field
                                        name="preferredSemester"
                                        type="text"
                                        id="preferredSemester"
                                        placeholder="Semester"
                                        validate={validatePreferredSemester}
                                        className="align-items-center profile-settings-page-form-field col-3"
                                        style={{
                                            height: "50px",
                                            // width: "258px",
                                        }}
                                    />
                                </div>
                                <div className="row">
                                    {errors.preferredYear &&
                                        touched.preferredYear && (
                                            <div className="errMsg offset-4 col-1">
                                                {errors.preferredYear}
                                            </div>
                                        )}
                                    {errors.preferredSemester &&
                                        touched.preferredSemester && (
                                            <div className="errMsg offset-4 col-1">
                                                {errors.preferredSemester}
                                            </div>
                                        )}
                                </div>
                            </Form>
                        )}
                    </Formik>

                    <div className="row my-4 mx-3 border-bottom border-1"></div>

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
