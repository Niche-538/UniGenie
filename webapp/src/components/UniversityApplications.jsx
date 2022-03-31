import React from "react";
import { Form, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

const UniversityApplications = () => {
    const validSchema = yup.object().shape({
        instituteName: yup.string().required("Please select an institute."),
        degreeName: yup.string().required("Please select a degree."),
        majorName: yup.string().required("Please select a major."),
    });

    return (
        <Formik
            validationSchema={validSchema}
            onSubmit={console.log}
            initialValues={{
                instituteName: "",
                degreeName: "",
                majorName: "",
            }}
        >
            {({ handleSubmit, handleChange, values, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group className="row g-3 mb-3 my-auto align-items-center justify-content-center">
                        <Form.Group className="col-xl-2">
                            <h4>Add University Applications</h4>
                        </Form.Group>
                    </Form.Group>

                    <Form.Group className="row g-3 mb-3 align-items-center justify-content-center">
                        <Form.Group
                            className="col-xl-1"
                            controlId="formInstituteName"
                        >
                            <Form.Label>Institute name</Form.Label>
                        </Form.Group>
                        <Form.Group className="col-xl-5">
                            <Form.Select
                                name="instituteName"
                                value={values.instituteName}
                                onChange={handleChange}
                                isInvalid={!!errors.instituteName}
                            >
                                <option selected>Choose...</option>
                                <option value="Massachusetts Institute of Technology">
                                    Massachusetts Institute of Technology
                                </option>
                                <option value="Harvard University">
                                    Harvard University
                                </option>
                                <option value="Stanford University">
                                    Stanford University
                                </option>
                                <option value="Cornell University">
                                    Cornell University
                                </option>
                                <option value="University of California, Berkeley">
                                    University of California, Berkeley
                                </option>
                                <option value="Columbia University in the City of New York">
                                    Columbia University in the City of New York
                                </option>
                                <option value="University of Michigan">
                                    University of Michigan
                                </option>
                                <option value="University of Washington">
                                    University of Washington
                                </option>
                                <option value="University of Pennsylvania">
                                    University of Pennsylvania
                                </option>
                                <option value="University of Minnesota-Twin Cities">
                                    University of Minnesota-Twin Cities
                                </option>
                                <option value="Yale University">
                                    Yale University
                                </option>
                                <option value="University of California, Los Angeles">
                                    University of California, Los Angeles
                                </option>
                                <option value="Johns Hopkins University">
                                    Johns Hopkins University
                                </option>
                                <option value="The University of Texas at Austin">
                                    The University of Texas at Austin
                                </option>
                                <option value="New York University">
                                    New York University
                                </option>
                                <option value="University of Wisconsin-Madison">
                                    University of Wisconsin-Madison
                                </option>
                                <option value="Purdue University">
                                    Purdue University
                                </option>
                                <option value="Penn State University">
                                    Penn State University
                                </option>
                                <option value="Princeton University">
                                    Princeton University
                                </option>
                                <option value="Carnegie Mellon University">
                                    Carnegie Mellon University
                                </option>
                                <option value="University of Southern California">
                                    University of Southern California
                                </option>
                                <option value="University of Chicago">
                                    University of Chicago
                                </option>
                                <option value="Arizona State University">
                                    Arizona State University
                                </option>
                                <option value="University of Florida">
                                    University of Florida
                                </option>
                                <option value="Michigan State University">
                                    Michigan State University
                                </option>
                                <option value="University of California, San Diego">
                                    University of California, San Diego
                                </option>
                                <option value="University of Illinois at Urbana-Champaign">
                                    University of Illinois at Urbana-Champaign
                                </option>
                                <option value="University of North Carolina at Chapel Hill">
                                    University of North Carolina at Chapel Hill
                                </option>
                                <option value="Duke University">
                                    Duke University
                                </option>
                                <option value="Northwestern University">
                                    Northwestern University
                                </option>
                                <option value="University of California, Davis">
                                    University of California, Davis
                                </option>
                                <option value="Boston University">
                                    Boston University
                                </option>
                                <option value="University of Maryland">
                                    University of Maryland
                                </option>
                                <option value="Rutgers, The State University of New Jersey">
                                    Rutgers, The State University of New Jersey
                                </option>
                                <option value="University of California, Irvine">
                                    University of California, Irvine
                                </option>
                                <option value="The University of Arizona">
                                    The University of Arizona
                                </option>
                                <option value="Texas A&M University">
                                    Texas A&M University
                                </option>
                                <option value="The University of Utah">
                                    The University of Utah
                                </option>
                                <option value="University of Virginia">
                                    University of Virginia
                                </option>
                                <option value="The Ohio State University">
                                    The Ohio State University
                                </option>
                                <option value="University of Colorado Boulder">
                                    University of Colorado Boulder
                                </option>
                                <option value="North Carolina State University">
                                    North Carolina State University
                                </option>
                                <option value="Georgia Institute of Technology">
                                    Georgia Institute of Technology
                                </option>
                                <option value="University of Pittsburgh">
                                    University of Pittsburgh
                                </option>
                                <option value="Indiana University Bloomington">
                                    Indiana University Bloomington
                                </option>
                                <option value="California Institute of Technology">
                                    California Institute of Technology
                                </option>
                                <option value="Washington University in St. Louis">
                                    Washington University in St. Louis
                                </option>
                                <option value="University of California, Santa Barbara">
                                    University of California, Santa Barbara
                                </option>
                                <option value="Georgetown University">
                                    Georgetown University
                                </option>
                                <option value="Tufts University">
                                    Tufts University
                                </option>
                                <option value="University of Nebraska-Lincoln">
                                    University of Nebraska-Lincoln
                                </option>
                                <option value="Virginia Polytechnic Institute and State University">
                                    Virginia Polytechnic Institute and State
                                    University
                                </option>
                                <option value="Florida State University">
                                    Florida State University
                                </option>
                                <option value="University of South Florida">
                                    University of South Florida
                                </option>
                                <option value="Oregon State University">
                                    Oregon State University
                                </option>
                                <option value="University of Massachusetts Amherst">
                                    University of Massachusetts Amherst
                                </option>
                                <option value="University of Georgia">
                                    University of Georgia
                                </option>
                                <option value="Brown University">
                                    Brown University
                                </option>
                                <option value="Iowa State University">
                                    Iowa State University
                                </option>
                                <option value="Brigham Young University">
                                    Brigham Young University
                                </option>
                                <option value="University of Rochester">
                                    University of Rochester
                                </option>
                                <option value="University of Iowa">
                                    University of Iowa
                                </option>
                                <option value="University of California, Riverside">
                                    University of California, Riverside
                                </option>
                                <option value="Washington State University">
                                    Washington State University
                                </option>
                                <option value="University of Delaware">
                                    University of Delaware
                                </option>
                                <option value="Georgia State University">
                                    Georgia State University
                                </option>
                                <option value="William Marsh Rice University">
                                    William Marsh Rice University
                                </option>
                                <option value="University at Buffalo, State University of New York">
                                    University at Buffalo, State University of
                                    New York
                                </option>
                                <option value="Dartmouth College">
                                    Dartmouth College
                                </option>
                                <option value="George Washington University">
                                    George Washington University
                                </option>
                                <option value="Vanderbilt University">
                                    Vanderbilt University
                                </option>
                                <option value="Syracuse University">
                                    Syracuse University
                                </option>
                                <option value="Colorado State University">
                                    Colorado State University
                                </option>
                                <option value="University of Houston">
                                    University of Houston
                                </option>
                                <option value="George Mason University">
                                    George Mason University
                                </option>
                                <option value="University of Oregon">
                                    University of Oregon
                                </option>
                                <option value="University of California, Santa Cruz">
                                    University of California, Santa Cruz
                                </option>
                                <option value="University of Illinois at Chicago">
                                    University of Illinois at Chicago
                                </option>
                                <option value="University of California, San Francisco">
                                    University of California, San Francisco
                                </option>
                                <option value="University of Notre Dame">
                                    University of Notre Dame
                                </option>
                                <option value="University of Connecticut">
                                    University of Connecticut
                                </option>
                                <option value="Emory University">
                                    Emory University
                                </option>
                                <option value="Temple University">
                                    Temple University
                                </option>
                                <option value="Northeastern University">
                                    Northeastern University
                                </option>
                                <option value="University of Missouri">
                                    University of Missouri
                                </option>
                                <option value="University of Central Florida">
                                    University of Central Florida
                                </option>
                                <option value="University of Kansas">
                                    University of Kansas
                                </option>
                                <option value="University of Kentucky">
                                    University of Kentucky
                                </option>
                                <option value="Florida International University">
                                    Florida International University
                                </option>
                                <option value="University of New Mexico">
                                    University of New Mexico
                                </option>
                                <option value="Drexel University">
                                    Drexel University
                                </option>
                                <option value="The University of Tennessee, Knoxville">
                                    The University of Tennessee, Knoxville
                                </option>
                                <option value="Rochester Institute of Technology">
                                    Rochester Institute of Technology
                                </option>
                                <option value="University of Miami">
                                    University of Miami
                                </option>
                                <option value="Louisiana State University">
                                    Louisiana State University
                                </option>
                                <option value="The University of Alabama">
                                    The University of Alabama
                                </option>
                                <option value="San Diego State University">
                                    San Diego State University
                                </option>
                                <option value="American University">
                                    American University
                                </option>
                                <option value="Boston College">
                                    Boston College
                                </option>
                                <option value="Fordham University">
                                    Fordham University
                                </option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                {errors.instituteName}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Group>

                    <Form.Group className="row g-3 mb-3 align-items-center justify-content-center">
                        <Form.Group className="col-xl-1" controlId="formDegree">
                            <Form.Label>Degree</Form.Label>
                        </Form.Group>
                        <Form.Group className="col-xl-2">
                            <Form.Select
                                name="degreeName"
                                value={values.degreeName}
                                onChange={handleChange}
                                isInvalid={!!errors.degreeName}
                            >
                                <option selected>Choose...</option>
                                <option value="Bachelor">Bachelor's</option>
                                <option value="Master">Master's</option>
                                <option value="PhD">Ph.D.</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                {errors.degreeName}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="col-xl-1" controlId="formMajor">
                            <Form.Label>Major</Form.Label>
                        </Form.Group>
                        <Form.Group className="col-xl-2">
                            <Form.Select
                                name="majorName"
                                value={values.majorName}
                                onChange={handleChange}
                                isInvalid={!!errors.majorName}
                            >
                                <option selected>Choose...</option>
                                <option value="Accounting">Accounting</option>
                                <option value="Advertising">Advertising</option>
                                <option value="Aerospace Engineering">
                                    Aerospace Engineering
                                </option>
                                <option value="African-American Studies">
                                    African-American Studies
                                </option>
                                <option value="Agricultural Operations Management">
                                    Agricultural Operations Management
                                </option>
                                <option value="Animal Sciences">
                                    Animal Sciences
                                </option>
                                <option value="Anthropology">
                                    Anthropology
                                </option>
                                <option value="Applied Physiology and Kinesiology">
                                    Applied Physiology and Kinesiology
                                </option>
                                <option value="Arabic">Arabic</option>
                                <option value="Architecture">
                                    Architecture
                                </option>
                                <option value="Art History">Art History</option>
                                <option value="Art">Art</option>
                                <option value="Astronomy and Astrophysics">
                                    Astronomy and Astrophysics
                                </option>
                                <option value="Biological Engineering">
                                    Biological Engineering
                                </option>
                                <option value="Biology">Biology</option>
                                <option value="Biomedical Engineering">
                                    Biomedical Engineering
                                </option>
                                <option value="Botany">Botany</option>
                                <option value="Business Administration">
                                    Business Administration
                                </option>
                                <option value="Chemical Engineering">
                                    Chemical Engineering
                                </option>
                                <option value="Chemistry">Chemistry</option>
                                <option value="Chinese">Chinese</option>
                                <option value="Civil Engineering">
                                    Civil Engineering
                                </option>
                                <option value="Classical Studies">
                                    Classical Studies
                                </option>
                                <option value="Communication Sciences and Disorders">
                                    Communication Sciences and Disorders
                                </option>
                                <option value="Computer Engineering">
                                    Computer Engineering
                                </option>
                                <option value="Computer Science">
                                    Computer Science
                                </option>
                                <option value="Construction Management">
                                    Construction Management
                                </option>
                                <option value="Criminology">Criminology</option>
                                <option value="Dance">Dance</option>
                                <option value="Data Science">
                                    Data Science
                                </option>
                                <option value="Dietetics">Dietetics</option>
                                <option value="Digital Arts and Sciences">
                                    Digital Arts and Sciences
                                </option>
                                <option value="Economics">Economics</option>
                                <option value="Education Sciences">
                                    Education Sciences
                                </option>
                                <option value="Educational Psychology and Research">
                                    Educational Psychology and Research
                                </option>
                                <option value="Educational Technology">
                                    Educational Technology
                                </option>
                                <option value="Electrical Engineering">
                                    Electrical Engineering
                                </option>
                                <option value="English">English</option>
                                <option value="Entomology and Nematology">
                                    Entomology and Nematology
                                </option>
                                <option value="Environmental Engineering">
                                    Environmental Engineering
                                </option>
                                <option value="Environmental Science">
                                    Environmental Science
                                </option>
                                <option value="Finance">Finance</option>
                                <option value="Fire and Emergency Services">
                                    Fire and Emergency Services
                                </option>
                                <option value="Food and Resource Economics">
                                    Food and Resource Economics
                                </option>
                                <option value="Food Science">
                                    Food Science
                                </option>
                                <option value="Foreign Languages and Literatures">
                                    Foreign Languages and Literatures
                                </option>
                                <option value="Forest Resources and Conservation">
                                    Forest Resources and Conservation
                                </option>
                                <option value="French and Francophone Studies">
                                    French and Francophone Studies
                                </option>
                                <option value="General Studies">
                                    General Studies
                                </option>
                                <option value="Geography">Geography</option>
                                <option value="Geology">Geology</option>
                                <option value="Geomatics">Geomatics</option>
                                <option value="German">German</option>
                                <option value="Graphic Design">
                                    Graphic Design
                                </option>
                                <option value="Health Science">
                                    Health Science
                                </option>
                                <option value="Hispanic and Latin American Languages, Literatures and Linguistics">
                                    Hispanic and Latin American Languages,
                                    Literatures and Linguistics
                                </option>
                                <option value="History">History</option>
                                <option value="Horticultural Science">
                                    Horticultural Science
                                </option>
                                <option value="Industrial and Systems Engineering">
                                    Industrial and Systems Engineering
                                </option>
                                <option value="Information Systems">
                                    Information Systems
                                </option>
                                <option value="Interdisciplinary Studies">
                                    Interdisciplinary Studies
                                </option>
                                <option value="Interior Design">
                                    Interior Design
                                </option>
                                <option value="Italian">Italian</option>
                                <option value="Japanese">Japanese</option>
                                <option value="Journalism">Journalism</option>
                                <option value="Linguistics">Linguistics</option>
                                <option value="Management">Management</option>
                                <option value="Marine Sciences">
                                    Marine Sciences
                                </option>
                                <option value="Marketing">Marketing</option>
                                <option value="Materials Science and Engineering">
                                    Materials Science and Engineering
                                </option>
                                <option value="Mathematics">Mathematics</option>
                                <option value="Mechanical Engineering">
                                    Mechanical Engineering
                                </option>
                                <option value="Microbiology and Cell Science">
                                    Microbiology and Cell Science
                                </option>
                                <option value="Music">Music</option>
                                <option value="Natural Resource Conservation">
                                    Natural Resource Conservation
                                </option>
                                <option value="Nuclear and Radiological Sciences">
                                    Nuclear and Radiological Sciences
                                </option>
                                <option value="Nuclear Engineering">
                                    Nuclear Engineering
                                </option>
                                <option value="Nursing">Nursing</option>
                                <option value="Nutritional Sciences">
                                    Nutritional Sciences
                                </option>
                                <option value="Pharmacy">Pharmacy</option>
                                <option value="Philosophy">Philosophy</option>
                                <option value="Physics">Physics</option>
                                <option value="Political Science">
                                    Political Science
                                </option>
                                <option value="Portuguese">Portuguese</option>
                                <option value="Psychology">Psychology</option>
                                <option value="Public Health">
                                    Public Health
                                </option>
                                <option value="Religion">Religion</option>
                                <option value="Russian">Russian</option>
                                <option value="Sociology">Sociology</option>
                                <option value="Soil and Water Sciences">
                                    Soil and Water Sciences
                                </option>
                                <option value="Spanish">Spanish</option>
                                <option value="Sport Management">
                                    Sport Management
                                </option>
                                <option value="Statistics">Statistics</option>
                                <option value="Sustainability Studies">
                                    Sustainability Studies
                                </option>
                                <option value="Theatre">Theatre</option>
                                <option value="Tourism, Hospitality and Event Management">
                                    Tourism, Hospitality and Event Management
                                </option>
                                <option value="Wildlife Ecology and Conservation">
                                    Wildlife Ecology and Conservation
                                </option>
                                <option value="Women's Studies">
                                    Women's Studies
                                </option>
                                <option value="Zoology">Zoology</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                {errors.majorName}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Group>

                    <Form.Group className="text-center">
                        <Button variant="primary" type="submit">
                            Add
                        </Button>
                    </Form.Group>
                </Form>
            )}
        </Formik>
    );
};

export default UniversityApplications;
