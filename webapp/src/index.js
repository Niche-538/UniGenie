import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from "./components/Navigation";
import AdminLogin from "./components/AdminLogin";
import StudentLogin from "./components/StudentLogin";
import AdminSignup from "./components/AdminSignup";
import StudentSignup from "./components/StudentSignup";
import AdminFunc from "./components/AdminFunc";
import AddUniversity from "./components/AddUniversity";
import DeleteUniversity from "./components/DeleteUniversity";
ReactDOM.render(
    <Router>
      <Navigation />
      <Routes>
        {/* <Route path="/" element={< />} /> */}
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/StudentLogin" element={<StudentLogin />} />
        <Route path="/AdminSignup" element={<AdminSignup />} />
        <Route path="/StudentSignup" element={<StudentSignup />} />
        <Route path="/AdminFunc" element={<AdminFunc />} />
        <Route path="/AddUniversity" element={<AddUniversity />} />
        <Route path="/DeleteUniversity" element={<DeleteUniversity />} />

        {/* <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />}>
          <Route path="" element=   {<Posts />} />
          <Route path=":postSlug" element={<Post />} />
        </Route> */}
      </Routes>
      {/* <Footer /> */}
    </Router>,
  
    document.getElementById("root")
  );
