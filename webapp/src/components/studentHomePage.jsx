import React, { useState, useEffect } from "react";
import { Field, Formik } from "formik";
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
    const [blog_head, setPTitle] = useState();
    const [blog_content, setContent] = useState();
    const user_id = 4;
    const handleSubmitt = (e) => {
        e.preventDefault();

        const payload = { blog_head, blog_content, user_id };

        fetch("http://localhost:8080/addBlogs", {
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

    function validatePostTitle(value) {
        let error;

        if (!value) {
            error = "Required";
        } else if (!/^([a-zA-Z0-9%_ ]+)$/i.test(value)) {
            error =
                "Post title can only contain alphabets, numbers and some special characters";
        }

        return error;
    }

    function validatePostContent(value) {
        let error;

        if (!value) {
            error = "Required";
        } else if (!/^([a-zA-Z0-9%_ ]+)$/i.test(value)) {
            error =
                "Post content can only contain alphabets, numbers and some special characters";
        }

        return error;
    }

    // const validSchema = Yup.object().shape({
    //     post_title: Yup.string()
    //         .matches(
    //             /^([a-zA-Z0-9-_ &]+)$/,
    //             "Post title cannot contain special characters besides space and &."
    //         )
    //         .required("Please enter a valid post title."),
    //     content: Yup.string().required("Please write something here."),
    // });

    return (
        <div>
            <Container
                className="rounded border my-4"
                style={{ backgroundColor: "white" }}
            >
                <div className="row mx-4 my-4 justify-content-center text-center align-items-center">
                    <div className="col-4" style={{ fontSize: "25px" }}>
                        <b>Something on your mind?</b>{" "}
                    </div>
                    <div className="col-2">
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
                            initialValues={{
                                username: "",
                                email: "",
                            }}
                            onSubmit={(values) => {
                                console.log(values);
                            }}
                        >
                            {({ errors, touched, isValidating }) => (
                                <Form>
                                    <div>
                                        <Field
                                            name="blog_head"
                                            type="text"
                                            as="textarea"
                                            placeholder="Title"
                                            // validate={validatePostTitle}
                                            className="mb-2"
                                            style={{
                                                //  borderRadius: "20px",
                                                width: "400px",
                                            }}
                                            onChange={(e) =>
                                                setPTitle(e.target.value)
                                            }
                                        />
                                        {errors.post_title &&
                                            touched.post_title && (
                                                <div>{errors.post_title}</div>
                                            )}
                                    </div>
                                    <div>
                                        <Field
                                            name="blog_content"
                                            type="text"
                                            as="textarea"
                                            placeholder="What's on your mind...?"
                                            // validate={validatePostContent}
                                            className="mb-2"
                                            style={{
                                                //  borderRadius: "20px",
                                                width: "400px",
                                            }}
                                            onChange={(e) =>
                                                setContent(e.target.value)
                                            }
                                        />
                                        {errors.content && touched.content && (
                                            <div>{errors.content}</div>
                                        )}
                                    </div>
                                </Form>
                            )}
                        </Formik>
                        <Button
                            className="mx-2 mt-2"
                            style={{
                                width: "8rem",
                                borderRadius: "25px",
                            }}
                            variant="secondary"
                            onClick={handleClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            className="mx-2 mt-2"
                            style={{
                                width: "8rem",
                                background: "#6C63FF",
                                borderRadius: "25px",
                            }}
                            type="submit"
                            variant="success"
                            //href="/ProfileSettingsPage"
                            onClick={handleSubmitt}
                        >
                            Post
                        </Button>
                        {/* <Formik
                            // validationSchema={validSchema}
                            onSubmit={(values) => {
                                console.log(values);
                            }}
                            initialValues={{
                                post_title: "",
                                content: "",
                            }}
                        >
                            {({
                                errors,
                                touched,
                                validateField,
                                validateForm,
                            }) => (
                                <Form
                                    // noValidate
                                    className="my-3 bg-body rounded"
                                    onSubmit={handleSubmitt}
                                >
                                    <Col className="mb-3 mx-2 g-3">
                                        <Row>
                                            <FloatingLabel controlId="floatingInput2">
                                                <FormGroup>
                                                    <Form.Control
                                                        name="post_title"
                                                        validate={{
                                                            validatePostTitle,
                                                        }}
                                                        style={{
                                                            borderRadius:
                                                                "20px",
                                                        }}
                                                        type="text"
                                                        placeholder="Title"
                                                        as="textarea"
                                                        onChange={(e) =>
                                                            setPTitle(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    {errors.post_title &&
                                                    touched.post_title && (
                                                    <div>
                                                        {errors.post_title}
                                                    </div>
                                                    )}
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.post_title}
                                                        {errors.post_title &&
                                                            touched.post_title && (
                                                                <div>
                                                                    {
                                                                        errors.post_title
                                                                    }
                                                                </div>
                                                            )}
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
                                                        <Field
                                                            name="content"
                                                            validate={{
                                                                validatePostContent,
                                                            }}
                                                            type="text"
                                                            placeholder="What's on your mind...?"
                                                            as="textarea"
                                                            onChange={(e) =>
                                                                setContent(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            style={{
                                                                height: "100px",
                                                                borderRadius:
                                                                    "20px",
                                                            }}
                                                        />
                                                        {errors.content &&
                                                            touched.content && (
                                                                <div>
                                                                    {
                                                                        errors.content
                                                                    }
                                                                </div>
                                                            )}
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
                                            style={{
                                                width: "8rem",
                                                borderRadius: "25px",
                                            }}
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
                                            // onClick={handleSubmitt}
                                        >
                                            Post
                                        </Button>
                                    </Form.Group>
                                </Form>
                            )}
                        </Formik> */}
                    </Modal.Body>
                </Modal>

                <h3 className="row py-3 my-3 mx-5 align-items-top justify-content-center text-center">
                    <strong>Recent Posts</strong>
                </h3>
                {data.map((post) => (
                    <div className=" mb-4 border rounded border-dark">
                        <div className="col-2 ms-5">
                            <h4>{post.blog_head}</h4>
                        </div>

                        <div className="row g-3 mb-3 mx-5 my-2">
                            {post.blog_content}
                        </div>
                        <div className="row mb-3 my-2">
                            <div className="col-3 ms-5 ">
                                <p>
                                    <strong>Authored by:</strong> Kunal Dudhe
                                </p>
                            </div>

                            <div className="col ms-5">
                                <p>
                                    <strong>Created on:</strong>{" "}
                                    {post.CreatedAt}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
                <div className=" mb-4 border rounded border-dark">
                    <div className="col-2 ms-5">
                        <h4>Things to do at UF</h4>
                    </div>

                    <div className="row g-3 mb-3 mx-5 my-2">
                        Gainesville, a small town still has a lot of things to
                        do. Lake Alice and Lake Wauberg are maintained by the
                        the campus. Gator Night happens every Friday.
                    </div>
                    <div className="row mb-3 my-2">
                        <div className="col-3 ms-5 ">
                            <p>
                                <strong>Authored by:</strong> Aakash Naik
                            </p>
                        </div>

                        <div className="col ms-5">
                            <p>
                                <strong>Created on:</strong>{" "}
                                2022-04-20T20:08:55.943372-04:00
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" mb-4 border rounded border-dark">
                    <div className="col-2 ms-5">
                        <h4>UF Review</h4>
                    </div>

                    <div className="row g-3 mb-3 mx-5 my-2">
                        UF is an amazing place to be at. Being top 5 public
                        university, it is a good mixture of smart people and
                        good weather.
                    </div>
                    <div className="row mb-3 my-2">
                        <div className="col-3 ms-5 ">
                            <p>
                                <strong>Authored by:</strong> Pratik K
                            </p>
                        </div>

                        <div className="col ms-5">
                            <p>
                                <strong>Created on:</strong>{" "}
                                2022-04-20T20:05:36.554655-04:00
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default StudentHomePage;
