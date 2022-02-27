// import React, { Component } from "react";

// class StudentLogin extends Component {
//   state = {};

//   render() {
//     return (
//       <form>
//         <div className="row g-3 mb-3 align-items-center justify-content-center">
//           <div className="col-sm-1">
//             <label for="exampleInputEmail" className="col-form-label">
//               Email address
//             </label>
//           </div>
//           <div className="col-sm-3">
//             <input
//               type="email"
//               className="form-control"
//               id="exampleInputEmail"
//               aria-describedby="emailHelp"
//               placeholder="Enter email"
//             />
//           </div>
//         </div>
//         <div className="row g-3 mb-3 align-items-center justify-content-center">
//           <div className="col-sm-1">
//             <label for="inputPassword" className="col-form-label">
//               Password
//             </label>
//           </div>
//           <div className="col-sm-3">
//             <input
//               type="password"
//               id="inputPassword"
//               className="form-control"
//               aria-describedby="passwordHelpBlock"
//               placeholder="Enter password"
//             />
//           </div>
//         </div>
//         {/* <div className="mb-3 form-check text-center">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             id="flexCheckDefault"
//           />
//           <label className="form-check-label" for="flexCheckDefault">
//             Remember Me
//           </label>
//         </div> */}
//         <div className="mb-3 form-group text-center">
//           <div className="custom-control custom-checkbox">
//             <input
//               type="checkbox"
//               className="custom-control-input"
//               id="customCheck1"
//             />
//             <label className="custom-control-label m-2" for="customCheck1">
//               Remember me
//             </label>
//           </div>
//         </div>
//         <div className="text-center">
//           <button type="button" className="btn btn-primary m-2">
//             Login
//           </button>
//           <button
//             type="button"
//             className="btn btn-primary m-2"
//             onClick={() => (window.location.href = "/StudentSignup")}
//           >
//             Signup
//           </button>
//         </div>
//       </form>
//     );
//   }
// }

// export default StudentLogin;

import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

class StudentLogin extends Component {
    state = {};

    render() {
        return (
            <Form>
                <Form.Group
                    className="row g-3 mb-3 my-auto align-items-center justify-content-center"
                    controlId="formBasicEmail"
                >
                    <Form.Group className="col-xl-1">
                        <Form.Label>Email Address</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-3">
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            Please enter the same email registered with us.
                        </Form.Text>
                    </Form.Group>
                </Form.Group>

                <Form.Group
                    className="row g-3 mb-3 align-items-center justify-content-center"
                    controlId="formBasicPassword"
                >
                    <Form.Group className="col-xl-1">
                        <Form.Label>Password</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-3">
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group
                    className="row mb-3 align-items-center justify-content-center"
                    controlId="formBasicCheckbox"
                >
                    <Form.Group className="col-xl-1">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                </Form.Group>

                <Form.Group className="text-center">
                    <Button
                        variant="primary"
                        type="submit"
                        href="/StudentDetails"
                    >
                        Login
                    </Button>{" "}
                    <Button
                        variant="primary"
                        type="submit"
                        href="/StudentSignup"
                    >
                        Signup
                    </Button>{" "}
                </Form.Group>
            </Form>
        );
    }
}

export default StudentLogin;
