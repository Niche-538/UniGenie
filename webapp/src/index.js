import React from "react";
import ReactDOM from "react-dom";
//import Hello from "./components/Navigation";   
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import AdminLogin from "./components/AdminLogin";
import StudentLogin from "./components/StudentLogin";

//const element=<h1>UniGenie</h1>;
ReactDOM.render(
    <Router>
      <Navigation />
      <Routes>
        {/* <Route path="/" element={< />} /> */}
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/StudentLogin" element={<StudentLogin />} />
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

