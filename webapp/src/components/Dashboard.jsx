import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";

const Dashboard = () => {
    const [data, setData] = useState([]);

    const getData = () => {
        fetch("http://localhost:8080/getUniversities")
            .then(function (response) {
                console.log(response);
                return response.json();
            })
            .then(function (myJSON) {
                console.log(typeof myJSON); // returns object
                // setData(JSON.parse(myJSON));
                setData(myJSON);
                // setData(JSON.stringify(myJSON));
            });
    };

    useEffect(() => {
        getData();
        // console.log(data);
    }, []);

    return (
        <div>
            <div
                className="mx-3 my-3 px-2 py-4 justify-content-center align-items-cnter text-center rounded border"
                style={{ backgroundColor: "white" }}
            >
                <h3>
                    <strong>My Applications</strong>
                </h3>

                <Form>
                    <div className="row g-3 my-3 mx-5 justify-content-center text-start align-items-center">
                        <Form.Group
                            className="col-xl-2"
                            controlId="formUniversityName"
                        >
                            <Form.Label>University Name</Form.Label>
                        </Form.Group>
                        <Form.Group className="col-xl-3">
                            <Form.Select>
                                <option selected>Choose...</option>
                                {data.map((univ) => (
                                    <option value="{univ.name}">
                                        {univ.name}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group
                            className="col-xl-2"
                            controlId="formCourseName"
                        >
                            <Form.Label>Course Name</Form.Label>
                        </Form.Group>
                        <Form.Group className="col-xl-3">
                            <Form.Select>
                                <option selected>Choose...</option>
                                <option value="CS">Computer Science</option>
                                <option value="MBA">M.B.A.</option>
                                <option value="Mech">
                                    Mechanical Engineering
                                </option>
                            </Form.Select>
                        </Form.Group>

                        <Button
                            className="col-1 mx-5 add-bg text-center align-items-center justify-content-center"
                            type="submit"
                        >
                            Add
                        </Button>
                    </div>
                </Form>
            </div>

            <div
                className="row mx-3 my-3 px-4 py-4 align-items-center text-center justify-content-center rounded border"
                style={{ backgroundColor: "white" }}
            >
                <Table striped bordered hover>
                    <thead
                        style={{
                            backgroundColor: "#6C63FF",
                            color: "white",
                        }}
                    >
                        <tr>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Actionables</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user) => (
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.course}</td>
                                <td>
                                    {/* {user.actionables} */}
                                    <Form>
                                        <Form.Check
                                            inline
                                            type="checkbox"
                                            label="LOR1"
                                        ></Form.Check>
                                        <Form.Check
                                            inline
                                            type="checkbox"
                                            label="LOR2"
                                        ></Form.Check>
                                        <Form.Check
                                            inline
                                            type="checkbox"
                                            label="LOR3"
                                        ></Form.Check>
                                        <Form.Check
                                            inline
                                            type="checkbox"
                                            label="SOP"
                                        ></Form.Check>
                                        <Form.Check
                                            inline
                                            type="checkbox"
                                            label="Transcript"
                                        ></Form.Check>
                                    </Form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Dashboard;
