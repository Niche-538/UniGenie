import React, { Component, StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import AdminLogin from "./components/AdminLogin";
import StudentLogin from "./components/StudentLogin";
import AdminSignup from "./components/AdminSignup";
import StudentSignup from "./components/StudentSignup";
import AdminFunc from "./components/AdminFunc";
import AddUniversity from "./components/AddUniversity";
import DeleteUniversity from "./components/DeleteUniversity";
import StudentDetails from "./components/StudentDetails";
import AddPrograms from "./components/AddPrograms";
// import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/Anim.tsx";
import Icon from "./components/Icon";

const rootElement = document.getElementById("root");
const image = document.getElementById("image");
const text = document.getElementById("text");
const needImage=true;
const needAnim=true;

ReactDOM.render(
    <StrictMode>
        <Navigation/>
        <Router>
            <Routes>
                <Route path="/AdminLogin" element={<AdminLogin />} />
                <Route path="/StudentLogin" element={<StudentLogin />} />
                <Route path="/AdminSignup" element={<AdminSignup />} />
                <Route path="/StudentSignup" element={<StudentSignup />} />
                <Route path="/AdminFunc" element={<AdminFunc />} />
                <Route path="/AddUniversity" element={<AddUniversity />} />
                <Route
                    path="/DeleteUniversity"
                    element={<DeleteUniversity />}
                />
                <Route path="/StudentDetails" element={<StudentDetails />} />
                <Route path="/AddPrograms" element={<AddPrograms />} />
            </Routes>
        </Router>
        
    </StrictMode>,
    rootElement
);

function Image(props){
    //const needImage=props.needImage;
    if(needImage){
        return <Icon/>
    }  
}

function Anim(props){
    //const needAnim=props.needAnim;
    if(needAnim){
        return <App/>
    }  
}

ReactDOM.render(
    <StrictMode>
        <Image needImage/>
    </StrictMode>,
    image
);

ReactDOM.render(
    <StrictMode>
        <Anim needAnim/>
    </StrictMode>,
    text
);
