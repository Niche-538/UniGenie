import React from "react";
import styles from "./landing.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const StudentHomePage = () => {
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
                        <Button
                            className="post-button-bg"
                            variant="success"
                            type="submit"
                        >
                            Post
                        </Button>
                    </Form.Group>
                </Form>

                <h3 className="row g-3 pt-5 my-3 mx-5 align-items-top justify-content-center">
                    Recent Posts
                </h3>

                <Container className="mb-5 border rounded border-dark">
                    <div className="row g-3 my-3 mx-5 align-items-center justify-content-center">
                        <img
                            className="blog-image"
                            src="https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                            alt=""
                        />
                    </div>
                    <div className="row g-3 mb-3 mx-5 align-items-center justify-content-center text-center">
                        <h4>What is Lorem Ipsum?</h4>
                    </div>
                    <div className="row g-3 mb-3 mx-5 align-items-center justify-content-center text-center">
                        <div className="col-3 ms-5 text-center">
                            <p>
                                <strong>Authored by:</strong> Levi Ackerman
                            </p>
                        </div>
                        <div className="col-3 me-5 text-center">
                            <p>
                                <strong>Created on:</strong> March 15, 2022
                            </p>
                        </div>
                    </div>
                    <div className="row g-3 mb-3 mx-5 align-items-center justify-content-center text-center">
                        <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum."
                        </p>
                    </div>
                </Container>

                <Container className="mb-5 border rounded border-dark">
                    <div className="row g-3 my-3 mx-5 align-items-center justify-content-center">
                        <img
                            className="blog-image"
                            src="https://images.unsplash.com/photo-1581362072978-14998d01fdaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVuaXZlcnNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                            alt=""
                        />
                    </div>
                    <div className="row g-3 mb-3 mx-5 align-items-center justify-content-center text-center">
                        <h4>More on Finibus Bonorum et Malorum</h4>
                    </div>
                    <div className="row g-3 mb-3 mx-5 align-items-center justify-content-center text-center">
                        <div className="col-3 ms-5 text-center">
                            <p>
                                <strong>Authored by:</strong> Mikasa Ackerman
                            </p>
                        </div>
                        <div className="col-3 me-5 text-center">
                            <p>
                                <strong>Created on:</strong> February 21, 2022
                            </p>
                        </div>
                    </div>
                    <div className="row g-3 mb-3 mx-5 align-items-center justify-content-center text-center">
                        <p>
                            "Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est,
                            qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi
                            tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem. Ut enim ad minima veniam, quis
                            nostrum exercitationem ullam corporis suscipit
                            laboriosam, nisi ut aliquid ex ea commodi
                            consequatur? Quis autem vel eum iure reprehenderit
                            qui in ea voluptate velit esse quam nihil molestiae
                            consequatur, vel illum qui dolorem eum fugiat quo
                            voluptas nulla pariatur?"
                        </p>
                    </div>
                </Container>

                <Container className="mb-5 border rounded border-dark">
                    <div className="row g-3 my-3 mx-5 align-items-center justify-content-center">
                        <img
                            className="blog-image"
                            src="https://images.unsplash.com/photo-1607013407627-6ee814329547?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dW5pdmVyc2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            alt=""
                        />
                    </div>
                    <div className="row g-3 mb-3 mx-5 align-items-center justify-content-center text-center">
                        <h4>Understanding de Finibus Bonorum et Malorum</h4>
                    </div>
                    <div className="row g-3 mb-3 mx-5 align-items-center justify-content-center text-center">
                        <div className="col-3 ms-5 text-center">
                            <p>
                                <strong>Authored by:</strong> Eren Yeager
                            </p>
                        </div>
                        <div className="col-3 me-5 text-center">
                            <p>
                                <strong>Created on:</strong> December 9, 2021
                            </p>
                        </div>
                    </div>
                    <div className="row g-3 mb-3 mx-5 align-items-center justify-content-center text-center">
                        <p>
                            "At vero eos et accusamus et iusto odio dignissimos
                            ducimus qui blanditiis praesentium voluptatum
                            deleniti atque corrupti quos dolores et quas
                            molestias excepturi sint occaecati cupiditate non
                            provident, similique sunt in culpa qui officia
                            deserunt mollitia animi, id est laborum et dolorum
                            fuga. Et harum quidem rerum facilis est et expedita
                            distinctio. Nam libero tempore, cum soluta nobis est
                            eligendi optio cumque nihil impedit quo minus id
                            quod maxime placeat facere possimus, omnis voluptas
                            assumenda est, omnis dolor repellendus. Temporibus
                            autem quibusdam et aut officiis debitis aut rerum
                            necessitatibus saepe eveniet ut et voluptates
                            repudiandae sint et molestiae non recusandae. Itaque
                            earum rerum hic tenetur a sapiente delectus, ut aut
                            reiciendis voluptatibus maiores alias consequatur
                            aut perferendis doloribus asperiores repellat."
                        </p>
                    </div>
                </Container>
            </Container>
        </div>
    );
};

export default StudentHomePage;
