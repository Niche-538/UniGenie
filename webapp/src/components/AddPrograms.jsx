import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddPrograms extends Component {
    state = {};

    render() {
        return (
            <Form>
                <Form.Group className="row g-3 mb-3 my-auto align-items-center justify-content-center">
                    <Form.Group className="col-xl-2 offset-xl-1">
                        <h4>Add Programs</h4>
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
                        <Form.Select>
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
                                University at Buffalo, State University of New
                                York
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
                    </Form.Group>
                </Form.Group>

                <Form.Group className="row g-3 mb-3 align-items-center justify-content-center">
                    <Form.Group
                        className="col-xl-1"
                        controlId="formProgramName"
                    >
                        <Form.Label>Program Name</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-5">
                        <Form.Control
                            type="text"
                            placeholder="Enter program name"
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group className="row g-3 mb-3 align-items-center justify-content-center">
                    <Form.Group
                        className="col-xl-1"
                        controlId="formCollegeName"
                    >
                        <Form.Label>Offered By</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-5">
                        <Form.Control
                            type="text"
                            placeholder="Enter college name"
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group className="row g-3 mb-3 align-items-center justify-content-center">
                    <Form.Group className="col-xl-1" controlId="formFallIntake">
                        <Form.Label>Fall Intake</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-2">
                        <Form.Control type="number" placeholder="100" />
                    </Form.Group>

                    <Form.Group
                        className="col-xl-1"
                        controlId="formSpringIntake"
                    >
                        <Form.Label>Spring Intake</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-2">
                        <Form.Control type="number" placeholder="100" />
                    </Form.Group>
                </Form.Group>

                <Form.Group className="row g-3 mb-3 my-auto align-items-center justify-content-center">
                    <Form.Group className="col-xl-2 offset-xl-1">
                        <h4>Add Courses</h4>
                    </Form.Group>
                </Form.Group>

                <Form.Group className="row g-3 mb-3 align-items-center justify-content-center">
                    <Form.Group
                        className="col-xl-1"
                        controlId="formCourse1Name"
                    >
                        <Form.Label>Course name</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-5">
                        <Form.Control
                            type="text"
                            placeholder="Enter course name"
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group className="row g-3 mb-3 align-items-center justify-content-center">
                    <Form.Group
                        className="col-xl-1"
                        controlId="formCourse2Name"
                    >
                        <Form.Label>Course name</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-5">
                        <Form.Control
                            type="text"
                            placeholder="Enter course name"
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group className="row g-3 mb-3 align-items-center justify-content-center">
                    <Form.Group
                        className="col-xl-1"
                        controlId="formCourse3Name"
                    >
                        <Form.Label>Course name</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-5">
                        <Form.Control
                            type="text"
                            placeholder="Enter course name"
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group className="row g-3 mb-3 align-items-center justify-content-center">
                    <Form.Group
                        className="col-xl-1"
                        controlId="formCourse4Name"
                    >
                        <Form.Label>Course name</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-5">
                        <Form.Control
                            type="text"
                            placeholder="Enter course name"
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group className="row g-3 mb-3 align-items-center justify-content-center">
                    <Form.Group
                        className="col-xl-1"
                        controlId="formCourse5Name"
                    >
                        <Form.Label>Course name</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-5">
                        <Form.Control
                            type="text"
                            placeholder="Enter course name"
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group className="row g-3 mb-3 align-items-center justify-content-center">
                    <Form.Group
                        className="col-xl-1"
                        controlId="formCourse6Name"
                    >
                        <Form.Label>Course name</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-5">
                        <Form.Control
                            type="text"
                            placeholder="Enter course name"
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group className="row g-3 mb-3 align-items-center justify-content-center">
                    <Form.Group
                        className="col-xl-1"
                        controlId="formCourse7Name"
                    >
                        <Form.Label>Course name</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-5">
                        <Form.Control
                            type="text"
                            placeholder="Enter course name"
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group className="row g-3 mb-3 align-items-center justify-content-center">
                    <Form.Group
                        className="col-xl-1"
                        controlId="formCourse8Name"
                    >
                        <Form.Label>Course name</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-5">
                        <Form.Control
                            type="text"
                            placeholder="Enter course name"
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group className="row g-3 mb-3 align-items-center justify-content-center">
                    <Form.Group
                        className="col-xl-1"
                        controlId="formCourse9Name"
                    >
                        <Form.Label>Course name</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-5">
                        <Form.Control
                            type="text"
                            placeholder="Enter course name"
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group className="row g-3 mb-3 align-items-center justify-content-center">
                    <Form.Group
                        className="col-xl-1"
                        controlId="formCourse10Name"
                    >
                        <Form.Label>Course name</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-5">
                        <Form.Control
                            type="text"
                            placeholder="Enter course name"
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group className="text-center">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>{" "}
                </Form.Group>
            </Form>
        );
    }
}

export default AddPrograms;
