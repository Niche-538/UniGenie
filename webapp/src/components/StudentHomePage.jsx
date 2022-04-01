import React from "react";
import { Button, Container, Form } from "react-bootstrap";

const StudentHomePage = () => {
    // const length=window.outerWidth;
    // console.log(length)
    return (
    <div>
        <Container className="rounded border my-4">
            <h3 className="row g-3 my-3 mx-5 align-items-top justify-content-center">
                Create a post
            </h3>
            <Form className="row g-3 mb-3 mx-5 align-items-top justify-content-center">
                <Form.Group
                    className="col-xl-9 mb-3 px-5"
                    controlId="formPostSomething"
                >
                    <Form.Control
                        placeholder="What's on your mind...?"
                        as="textarea"
                        rows={1}
                    />
                </Form.Group>
                <Form.Group className="col-xl-1 mb-3 py-auto justify-content-start">
                    <Button variant="success" type="submit">
                        Post
                    </Button>
                </Form.Group>
            </Form>
            
        </Container>
    </div>
    );
};

export default StudentHomePage;


