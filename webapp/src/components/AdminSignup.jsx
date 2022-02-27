// import React, { Component } from "react";

// class AdminSignup extends Component {
//   state = {};
//   render() {
//     return (
//       <form>
//         <div className="row g-3 mb-3 align-items-center justify-content-center">
//           <div className="col-sm-1">
//             <label for="exampleInputFirstName" className="col-form-label">
//               First name
//             </label>
//           </div>
//           <div className="col-sm-3">
//             <input
//               type="text"
//               className="form-control"
//               id="exampleInputFirstName"
//               placeholder="First name"
//             />
//           </div>
//         </div>
//         <div className="row g-3 mb-3 align-items-center justify-content-center">
//           <div className="col-sm-1">
//             <label for="exampleInputLastName" className="col-form-label">
//               Last name
//             </label>
//           </div>
//           <div className="col-sm-3">
//             <input
//               type="text"
//               className="form-control"
//               id="exampleInputLastName"
//               placeholder="Last name"
//             />
//           </div>
//         </div>
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
//         <div className="text-center">
//           <button
//             type="button"
//             className="btn btn-primary m-2"
//             // onClick={() => (window.location.href = "/AdminSignup")}
//           >
//             Signup
//           </button>
//         </div>
//       </form>
//     );
//   }
// }

// export default AdminSignup;

import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AdminSignup extends Component {
    state = {};

    render() {
        return (
            <Form>
                <Form.Group
                    className="row g-3 mb-3 my-auto align-items-center justify-content-center"
                    controlId="formFirstName"
                >
                    <Form.Group className="col-xl-1">
                        <Form.Label>First Name</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-3">
                        <Form.Control
                            type="firstName"
                            placeholder="Enter first name"
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group
                    className="row g-3 mb-3 align-items-center justify-content-center"
                    controlId="formLastName"
                >
                    <Form.Group className="col-xl-1">
                        <Form.Label>Last Name</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-3">
                        <Form.Control
                            type="lastName"
                            placeholder="Enter last name"
                        />
                    </Form.Group>
                </Form.Group>

                <Form.Group
                    className="row g-3 mb-3 align-items-center justify-content-center"
                    controlId="formBasicEmail"
                >
                    <Form.Group className="col-xl-1">
                        <Form.Label>Email Address</Form.Label>
                    </Form.Group>
                    <Form.Group className="col-xl-3">
                        <Form.Control
                            type="email"
                            placeholder="Enter email address"
                        />
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

                <Form.Group className="text-center">
                    <Button variant="primary" type="submit" href="/AdminFunc">
                        Signup
                    </Button>{" "}
                </Form.Group>
            </Form>
        );
    }
}

export default AdminSignup;
