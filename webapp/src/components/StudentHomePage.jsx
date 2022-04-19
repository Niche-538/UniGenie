import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import {
  Button,
  Col,
  Container,
  Form,
  Row,
  FloatingLabel,
  Modal,
  FormGroup,
} from "react-bootstrap";

const StudentHomePage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [post_title, setPTitle] = useState();
  const [content, setContent] = useState();

  const handleSubmitt = (e) => {
    e.preventDefault();

    const payload = { post_title, content };

    fetch("http://localhost:8080/signup", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
        "Access-Control-Request-Headers": "*",
        "Access-Control-Request-Method": "*",
      },
      body: JSON.stringify(payload),
    }).then(() => {
      console.log(payload);
    });

    handleClose();
  };

  const [data, setData] = useState([]);

  const getData = () => {
    fetch("http://localhost:8080/blogs")
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
  }, []);

  const validSchema = Yup.object().shape({
    post_title: Yup
      .string()
      .matches(
        /^([a-zA-Z0-9-_ &]+)$/,
        "Post title cannot contain numbers or special characters besides space and &."
      )
      .required("Please enter a valid post title."),
    content: Yup.string().required("Please write something here."),
  });

  return (
    <div>
      <Container className="rounded border my-4">
        <div className="row py-4">
          <div className="row">
            <div className="col-4" style={{ fontSize: "25px" }}>
              <b>Something on your mind?</b>{" "}
            </div>
            <div className="col ">
              <Button
                type="submit"
                variant="primary"
                href="#"
                onClick={handleShow}
                className="post-button-bg"
              >
                Create a post
              </Button>
            </div>
          </div>
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
          rounded-4
          fullscreen="fullscreen-below-md"
        >
          <Modal.Header closeButton>
            <Modal.Title>Create a post.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Formik
              validationSchema={validSchema}
              onSubmit={console.log}
              initialValues={{
                post_title: "",
                content: "",
              }}
            >
              {({ errors,touched }) => (
                <Form
                  noValidate
                  className="my-3 bg-body rounded"
                  onSubmit={handleSubmitt}
                >
                  <Col className="mb-3 mx-2 g-3">
                    <Row>
                      <FloatingLabel controlId="floatingInput2">
                        <FormGroup>
                          <Form.Control
                            name="post_title"
                            style={{ borderRadius: "20px" }}
                            type="text"
                            placeholder="Title"
                            as="textarea"
                            onChange={(e) => setPTitle(e.target.value)}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.post_title}
                          </Form.Control.Feedback>
                        </FormGroup>
                      </FloatingLabel>
                    </Row>
                    <Row>
                      <p></p>
                    </Row>
                    <Row>
                      <FormGroup>
                        <FloatingLabel controlId="floatingInput3">
                          <FormGroup>
                            <Form.Control
                              name="content"
                              type="text"
                              placeholder="What's on your mind...?"
                              as="textarea"
                              onChange={(e) => setContent(e.target.value)}
                              style={{ height: "100px", borderRadius: "20px" }}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.content}
                            </Form.Control.Feedback>
                          </FormGroup>
                        </FloatingLabel>
                      </FormGroup>
                    </Row>
                  </Col>
                  <Form.Group></Form.Group>
                  <Form.Group className="text-center">
                    <Button
                      style={{ width: "8rem", borderRadius: "25px" }}
                      variant="secondary"
                      onClick={handleClose}
                    >
                      Cancel
                    </Button>
                    <Button
                      style={{
                        width: "8rem",
                        background: "#6C63FF",
                        borderRadius: "25px",
                      }}
                      type="submit"
                      variant="success"
                      //href="/ProfileSettingsPage"
                      //onClick={handleSubmitt}
                    >
                      Post
                    </Button>
                  </Form.Group>
                </Form>
              )}
            </Formik>
          </Modal.Body>
        </Modal>

        <h3 className="row g-3 pt-5 my-3 mx-5 align-items-top justify-content-center">
          Recent Posts
        </h3>
        {data.map((post) => (
          <Container className="mb-5 border rounded border-dark">
            <div className="row g-3 mb-3 mx-5 align-items-center justify-content-center text-center">
              <h4>{post.blog_head}</h4>
            </div>
            <div className="row g-3 mb-3 mx-5 align-items-center justify-content-center text-center">
              <div className="col-3 ms-5 text-center">
                <p>
                  <strong>Authored by:</strong> Mikasa Ackerman
                </p>
              </div>
              <div className="col-3 me-5 text-center">
                <p>
                  <strong>Created on:</strong> {post.CreatedAt}
                </p>
              </div>
            </div>
            <div className="row g-3 mb-3 mx-5 align-items-center justify-content-center text-center">
              {post.blog_content}
            </div>
          </Container>
        ))}
      </Container>
    </div>
  );
};

export default StudentHomePage;
