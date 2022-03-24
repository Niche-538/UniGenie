import React, { Component } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";


const AdminFunc = () => {
    
    return (
        <Row
                xs={1}
                sm={2}
                md={3}
                lg={4}
                xl={5}
                className="g-4 mb-3 mx-auto my-auto align-items-center justify-content-center"
            >
                <Col className="col-xl-2">
                    <Card style={{ width: "25rem", height: "35rem" }}>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Add University</Card.Title>
                            <Card.Text>
                                Add a new university to the database.
                            </Card.Text>
                            <Button variant="primary" href="/AddUniversity">
                                Add university
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="col-xl-1"></Col>

                <Col className="col-xl-2">
                    <Card style={{ width: "25rem", height: "35rem" }}>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Add Programs</Card.Title>
                            <Card.Text>
                                Add the programs offered by universitites as
                                well as the courses offered in these programs.
                            </Card.Text>
                            <Button variant="primary" href="/AddPrograms">
                                Add programs
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="col-xl-1"></Col>

                <Col className="col-xl-2">
                    <Card style={{ width: "25rem", height: "35rem" }}>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Update University Details</Card.Title>
                            <Card.Text>
                                Makes changes to a pre-existing university.
                            </Card.Text>
                            <Button variant="primary" href="#">
                                Update university
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="col-xl-1"></Col>

                <Col className="col-xl-2">
                    <Card style={{ width: "25rem", height: "35rem" }}>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Delete University</Card.Title>
                            <Card.Text>
                                Delete a pre-existing university.
                            </Card.Text>
                            <Button variant="primary" href="/DeleteUniversity">
                                Delete university
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="col-xl-1"></Col>

                <Col className="col-xl-2">
                    <Card style={{ width: "25rem", height: "35rem" }}>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Manage Banners</Card.Title>
                            <Card.Text>
                                Manage the banners displayed on the landing
                                page.
                            </Card.Text>
                            <Button variant="primary" href="#">
                                Manage banners
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="col-xl-1"></Col>

                <Col className="col-xl-2">
                    <Card style={{ width: "25rem", height: "35rem" }}>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Schedule Event</Card.Title>
                            <Card.Text>Schedule an event.</Card.Text>
                            <Button variant="primary" href="#">
                                Schedule Event
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="col-xl-1"></Col>

                <Col className="col-xl-2">
                    <Card style={{ width: "25rem", height: "35rem" }}>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Delete Blog Posts</Card.Title>
                            <Card.Text>
                                Delete unwanted posts from the blog.
                            </Card.Text>
                            <Button variant="primary" href="#">
                                Delete blog posts
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="col-xl-1"></Col>

                <Col className="col-xl-2">
                    <Card style={{ width: "25rem", height: "35rem" }}>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Remove User</Card.Title>
                            <Card.Text>Remove a user.</Card.Text>
                            <Button variant="primary" href="#">
                                Remove user
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className="col-xl-1"></Col>
            </Row>
    );
   };

export default AdminFunc;
