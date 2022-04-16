import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Anim from "./components/Anim.tsx";
import Icon from "./components/Icon.jsx";
import LandingPage from "./components/LandingPage";
import Navigation from "./components/Navigation";
import Navigation_nonMain from "./components/Navigation_nonMain";
import AdminLogin from "./components/AdminLogin";
import StudentLogin from "./components/StudentLogin";
import AdminSignup from "./components/AdminSignup";
import StudSignUp from "./components/StudSignUp";
import StudentSignup from "./components/StudentSignup";
import AdminFunc from "./components/AdminFunc";
import AddUniversity from "./components/AddUniversity";
import DeleteUniversity from "./components/DeleteUniversity";
import StudentDetails from "./components/StudentDetails";
import AddPrograms from "./components/AddPrograms";
import UniversityApplications from "./components/UniversityApplications";
import ProfilePage from "./components/ProfilePage";
import ProfileSettingsPage from "./components/ProfileSettingsPage";
import StudentHomePage from "./components/StudentHomePage";
import Footerx from "./components/Footerx";
import LP from "./components/Lp";
import Get from "./components/Get";

function App(){
    const rootElement = document.getElementById("root");
    const image = document.getElementById("image");
    const text = document.getElementById("text");
    const login = document.getElementById("login");
    const foot = document.getElementById("foot");
    var wind = window.location.href;

    if (wind === "http://localhost:3000/") {
        return(
            ReactDOM.render(
                <StrictMode>
                    <Navigation />
                    <Router>
                        <Routes>
                            <Route path="/AdminLogin" element={<AdminLogin />} />
                            <Route path="/StudSignUp" element={<StudSignUp/>}/>
                            <Route path="/StudentLogin" element={<StudentLogin />} />
                            <Route path="/AdminSignup" element={<AdminSignup />} />
                            <Route path="/StudentSignup" element={<StudentSignup />} />
                            <Route path="/AdminFunc" element={<AdminFunc />} />
                            <Route path="/AddUniversity" element={<AddUniversity />} />
                            
                            <Route
                                path="/DeleteUniversity"
                                element={<DeleteUniversity />}
                            />
                            <Route
                                path="/StudentDetails"
                                element={<StudentDetails />}
                            />
                            <Route path="/AddPrograms" element={<AddPrograms />} />
                            <Route
                                path="/UniversityApplications"
                                element={<UniversityApplications />}
                            />
                            <Route path="/ProfilePage" element={<ProfilePage />} />
                            <Route
                                path="/ProfileSettingsPage"
                                element={<ProfileSettingsPage />}
                            />
                            <Route
                                path="/StudentHomePage"
                                element={<StudentHomePage />}
                            />
                        </Routes>
                    </Router>
                </StrictMode>,
                rootElement
            ),
   
            ReactDOM.render(
                <StrictMode>
                    <Icon />
                </StrictMode>,
                image
            ),
        
            ReactDOM.render(
                <StrictMode>
                    <Anim/>
                </StrictMode>,
                text
            ),
         
            ReactDOM.render(
                // if(!token) {
                //     return <Login setToken={setToken} />
                //   }
                <StrictMode>
                    {/* if(!token){
                    <LP setToken={setToken}/>} */}
                    <LP/>
                </StrictMode>,
                login
            ),
        
            ReactDOM.render(
                <StrictMode>
                    <Footerx />
                </StrictMode>,
                foot
            )
        );
    }
    else{
        return(
            ReactDOM.render(
                <StrictMode>
                    <Navigation_nonMain />
                    <Router>
                        <Routes>
                            <Route path="/StudSignUp" element={<StudSignUp/>}/>
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
                            <Route
                                path="/StudentDetails"
                                element={<StudentDetails />}
                            />
                            <Route path="/AddPrograms" element={<AddPrograms />} />
                            <Route
                                path="/UniversityApplications"
                                element={<UniversityApplications />}
                            />
                            <Route path="/ProfilePage" element={<ProfilePage />} />
                            <Route
                                path="/ProfileSettingsPage"
                                element={<ProfileSettingsPage />}
                            />
                            <Route
                                path="/StudentHomePage"
                                element={<StudentHomePage />}
                            />
                        </Routes>
                    </Router>
                </StrictMode>,
                rootElement
            ),
            ReactDOM.render(
                <StrictMode>
                    <Footerx />
                </StrictMode>,
                foot
            )
        );
    }
}
export default App;