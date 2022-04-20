import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccessful } from "./auth";
import { updateUserData } from "./userData";

let showSpinner = false;

const Login = () => {
  showSpinner = true;

  const [modal, setModal] = useState(false);
  //const [token, setToken] = useState('');
  const userToken = useSelector(
    (state: any) => state.isAuthenticated.usertoken
  );
  const dispatch = useDispatch();
  const defaultData = {
    username: "",
    password: "",
  };
  const mockUserData = {
    //   name: "R",
    email: "R",
    username: "R",
  };
  const [userData, setUserData] = useState(defaultData);

  // Toggle for Modal
  //const toggle = () => setModal(!modal);

  const authenticateUser = (response: any) => {
    dispatch(loginSuccessful(response));
  };
  const updateEmail = (email: string) => {
    setUserData({ ...userData, username: email });
  };
  const updatePassword = (password: string) => {
    setUserData({ ...userData, password });
  };
  const updateStateWithUserData = (userData: any) => {
    dispatch(updateUserData(userData));
  };

  axios
    .post(`http://localhost:8080/login`, userData)
    .then((res) => {
      // debugger;
      //console.log(res.data);
      authenticateUser(res.data);
      axios
        .get(`http://localhost:8080/users/${userData.username}`, {
          headers: { token: res.data.token },
        })
        .then((res) => {
          if (res.data.ID != 0) {
            const userResponse = {
              //   name: res.data.Name,
              email: res.data.username,
              password: res.data.Password,
            };
            updateStateWithUserData(userResponse);
          } else {
            // TO-DO: this needs to be handled in catch
            alert("Auth failed");
          }
        })
        .catch(() => {});
    })
    .catch(() => {
      alert("Auth failed, please check your user name and password");
    })
    .finally(() => {
      //setModal(false);
      showSpinner = false;
    });

  return (
    <div className="wrapper">
      <div className="logo">
        {" "}
        <img
          src="https://as2.ftcdn.net/v2/jpg/02/34/61/79/1000_F_234617921_p1AGQkGyEl8CSzwuUI74ljn6IZXqMUf2.jpg"
          alt=""
        />{" "}
      </div>
      <div className="text-center mt-4 name"> UniGenie </div>
      <form className="p-3 mt-3">
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            onChange={(e) => {
              updateEmail(e.target.value);
            }}
          />
        </div>

        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input
            type="password"
            name="password"
            id="pwd"
            placeholder="Password"
            onChange={(e) => {
              updatePassword(e.target.value);
            }}
          />
        </div>
        {showSpinner ? (
          <button className="btn btn-primary" type="button" disabled>
            <span
              className="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
            &nbsp;Logging...
          </button>
        ) : (
          <Button
            type="submit"
            variant="primary"
            className="btn mt-3"
            //href="/StudentHomePage"
            onClick={Login}
          >
            <h6>Login</h6>
          </Button>
        )}
        <Button type="submit" variant="primary" className="btn mt-3" href="#">
          <h6>Register</h6>
        </Button>
      </form>
      <div className="text-center fs-6">
        <a href="#">Forget password?</a>
      </div>
    </div>
  );
};

export default Login;
