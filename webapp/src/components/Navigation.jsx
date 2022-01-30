import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
        <nav className="navbar navbar-expand navbar-dark bg-dark"></nav>
        <div className="container">
            <NavLink className="navbar-brand" to="/">
                    UniGenie
            </NavLink>
            <div>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                            <NavLink className="nav-link" to="/AdminLogin">
                                    Admin Login
                            {/* <span className="sr-only">(current)</span> */}
                            </NavLink>
                    </li>
                    <li className="nav-item">
                            <NavLink className="nav-link" to="/StudentLogin">
                                    Student Login
                            </NavLink>
                    </li>
                </ul>  
            </div>
        </div>
    </div>
  );
}

export default Navigation;
