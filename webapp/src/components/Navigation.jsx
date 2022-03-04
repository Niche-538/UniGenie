import React, { Component } from "react";

// function Navigation() {
//   return (
//     <div className="navigation">
//       <nav className="navbar navbar-expand navbar-dark bg-dark"></nav>
//       <div className="container">
//         <NavLink className="navbar-brand" to="/">
//           UniGenie
//         </NavLink>
//         <div>
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/AdminLogin">
//                 Admin Login
//                 {/* <span className="sr-only">(current)</span> */}
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/StudentLogin">
//                 Student Login
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

class Navigation extends Component {
    state = {};

    render() {
        return (
            <div className="navigation">
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <a
                            style={{ fontSize: 40, color: "#4a54f1", fontFamily:"cursive" }}
                            className="navbar-brand"
                            href="/"
                        >
                            UniGenie
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end">
                                <li className="nav-item">
                                    <button
                                        type="button"
                                        className="btn btn-primary-outline m-2"
                                        onClick={() =>
                                            (window.location.href =
                                                "/AdminLogin")
                                        }
                                    >
                                        Admin Login
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        type="button"
                                        className="btn btn-primary-outline m-2"
                                        onClick={() =>
                                            (window.location.href =
                                                "/StudentLogin")
                                        }
                                    >
                                        Student Login
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        type="button"
                                        className="btn btn-primary-outline m-2"
                                        onClick={() =>
                                            (window.location.href =
                                                "/")
                                        }
                                    >
                                        Grad School Finder
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navigation;
