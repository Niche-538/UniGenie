import React, { Component } from "react";

class AdminLogin extends Component {
  state = {};

  render() {
    return (
      <form>
        <div className="row g-3 mb-3 align-items-center justify-content-center">
          <div className="col-sm-1">
            <label for="exampleInputEmail" className="col-form-label">
              Email address
            </label>
          </div>
          <div className="col-sm-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
        </div>
        <div className="row g-3 mb-3 align-items-center justify-content-center">
          <div className="col-sm-1">
            <label for="inputPassword" className="col-form-label">
              Password
            </label>
          </div>
          <div className="col-sm-3">
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              aria-describedby="passwordHelpBlock"
              placeholder="Enter password"
            />
          </div>
        </div>
       <div className="mb-3 form-group text-center">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label m-2" for="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="text-center">
          <button
            type="button"
            className="btn btn-primary m-2"
            onClick={() => (window.location.href = "/AdminFunc")}
          >
            Login
          </button>
          <button
            type="button"
            className="btn btn-primary m-2"
            onClick={() => (window.location.href = "/AdminSignup")}
          >
            Signup
          </button>
        </div>
      </form>
    );
  }
}

export default AdminLogin;
